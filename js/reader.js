// Текущее состояниеupdateURL
let currentBook = 'catering';
let currentPage = 1;
let totalPages = 24;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация читалки...');
    
    // Получаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookParam = urlParams.get('book');
    const pageParam = urlParams.get('page');
    
    if (bookParam && textbookData[bookParam]) {
        currentBook = bookParam;
        totalPages = textbookData[currentBook].totalPages || 12;
    }
    
    // Определяем, какую страницу загружать
    if (pageParam) {
        // Если в URL есть параметр page - используем его
        currentPage = parseInt(pageParam);
        console.log('Загрузка страницы из URL:', currentPage);
    } else {
        // Иначе загружаем последнюю сохраненную страницу
        const savedPage = getCookie(`lastPage_${currentBook}`);
        if (savedPage) {
            currentPage = parseInt(savedPage);
            console.log('Загрузка последней сохраненной страницы:', currentPage);
        } else {
            console.log('Загрузка страницы по умолчанию (1):', currentPage);
        }
    }
    
    // Загружаем страницу
    loadPage(currentPage);
    
    // Генерируем оглавление
    generateTOC();
    
    // Обновляем URL (без перезагрузки)
    updateURL();
});

// Загрузка страницы
function loadPage(pageNum) {
    console.log('Загрузка страницы', pageNum);
    
    const pageView = document.getElementById('pageView');
    const book = textbookData[currentBook];
    
    if (book && book.pages[pageNum]) {
        pageView.innerHTML = book.pages[pageNum].content;
        currentPage = pageNum;
        
        // Сохраняем в SessionStorage (чтобы при обновлении вернуться)
        setCookie(`lastPage_${currentBook}`, pageNum);
        console.log('Сохранена последняя страница:', pageNum);
        
        // Обновляем инпут с номером страницы
        const pageInput = document.getElementById('pageInput');
        if (pageInput) pageInput.value = pageNum;
        
        // Обновляем активный пункт в содержании
        updateActiveTOCItem(pageNum);
        
        // Активируем/деактивируем кнопки навигации
        updateNavButtons();
        
        // Загружаем заметки для этой страницы
        loadNotesForPage(pageNum);
        
        // Загружаем сохраненные ответы
        setTimeout(() => {
            if (typeof loadSavedAnswers === 'function') {
                loadSavedAnswers();
            }
        }, 100);
        
    } else {
        pageView.innerHTML = '<div class="error-page">Страница не найдена</div>';
    }
}

// Переход на следующую страницу
function goToNextPage() {
    if (currentPage < totalPages) {
        loadPage(currentPage + 1);
        updateURL(); // Обновляем URL при переходе
    }
}

// Переход на предыдущую страницу
function goToPrevPage() {
    if (currentPage > 1) {
        loadPage(currentPage - 1);
        updateURL(); // Обновляем URL при переходе
    }
}

// Переход на конкретную страницу
function goToPage() {
    const input = document.getElementById('pageInput');
    if (!input) return;
    
    let pageNum = parseInt(input.value);
    
    if (isNaN(pageNum)) pageNum = 1;
    if (pageNum < 1) pageNum = 1;
    if (pageNum > totalPages) pageNum = totalPages;
    
    loadPage(pageNum);
    updateURL(); // Обновляем URL при переходе
}

// Генерация оглавления
function generateTOC() {
    const tocList = document.getElementById('tocList');
    if (!tocList) return;
    
    const toc = textbookData[currentBook]?.tableOfContents;
    if (!toc || toc.length === 0) {
        tocList.innerHTML = '<div class="toc-empty">Содержание не загружено</div>';
        return;
    }
    
    tocList.innerHTML = '';
    toc.forEach(item => {
        const div = document.createElement('div');
        div.className = `toc-item level-${item.level}`;
        div.textContent = item.title;
        div.dataset.page = item.page;
        div.onclick = () => {
            loadPage(item.page);
            updateURL(); // Обновляем URL при клике на содержание
            
            // Обновляем активный класс
            document.querySelectorAll('.toc-item').forEach(el => {
                el.classList.remove('active');
            });
            div.classList.add('active');
        };
        
        if (item.page === currentPage) {
            div.classList.add('active');
        }
        
        tocList.appendChild(div);
    });
}

// Обновление активного пункта в содержании
function updateActiveTOCItem(pageNum) {
    document.querySelectorAll('.toc-item').forEach(el => {
        el.classList.remove('active');
        if (parseInt(el.dataset.page) === pageNum) {
            el.classList.add('active');
        }
    });
}

// Обновление кнопок навигации
function updateNavButtons() {
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentPage <= 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage >= totalPages;
    }
}

// Обновление URL без перезагрузки
function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set('book', currentBook);
    url.searchParams.set('page', currentPage);
    window.history.pushState({}, '', url);
    console.log('🔗 URL обновлен:', url.toString());
}

// Переключение сайдбара
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    
    sidebar.classList.toggle('hidden');
    
    // Меняем текст кнопки на мобильных
    if (window.innerWidth <= 768) {
        if (sidebar.classList.contains('hidden')) {
            mobileBtn.innerHTML = '📋 Показать содержание';
        } else {
            mobileBtn.innerHTML = '✕ Закрыть';
        }
    }
}

// Закрыть сайдбар при клике вне его (для мобильных)
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        const mobileBtn = document.getElementById('mobileMenuBtn');
        
        if (!sidebar.contains(e.target) && !mobileBtn.contains(e.target) && !sidebar.classList.contains('hidden')) {
            toggleSidebar();
        }
    }
});

// Поиск
function showSearch() {
    document.getElementById('searchModal').classList.add('show');
}

function closeSearch() {
    document.getElementById('searchModal').classList.remove('show');
}

// Обработка клавиш
document.addEventListener('keydown', function(e) {
    // Не срабатывает, если пользователь печатает в поле ввода
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
    }
    
    if (e.key === 'ArrowRight') {
        goToNextPage();
    } else if (e.key === 'ArrowLeft') {
        goToPrevPage();
    } else if (e.key === 'Escape') {
        closeSearch();
    }
});

// Сохранение заметок
function saveNotes(pageNum) {
    const textarea = document.getElementById(`notes-page${pageNum}`);
    if (textarea) {
        setCookie(`notes_${currentBook}_${pageNum}`, textarea.value);
        alert('Заметки сохранены');
        console.log('Заметки сохранены для страницы', pageNum);
    }
}

// Загрузка заметок
function loadNotesForPage(pageNum) {
    const textarea = document.getElementById(`notes-page${pageNum}`);
    if (textarea) {
        const saved = getCookie(`notes_${currentBook}_${pageNum}`);
        if (saved) {
            textarea.value = saved;
            console.log('Заметки загружены для страницы', pageNum);
        }
    }
}