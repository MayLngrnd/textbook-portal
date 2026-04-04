// Загрузка недавних страниц
document.addEventListener('DOMContentLoaded', function() {
    const recentList = document.getElementById('recentList');
    
    // Получаем историю из Cookies
    const history = getCookie('recentPages');
    let recentPages = [];
    
    if (history) {
        try {
            recentPages = JSON.parse(history);
        } catch (e) {
            recentPages = [];
        }
    }
    
    // Если нет истории, показываем пример
    if (recentPages.length === 0) {
        recentPages = [
            { book: 'catering', page: 5, title: 'Lesson 1. Hospitality Industry' },
            { book: 'catering', page: 12, title: 'Lesson 2. Catering Industry' }
        ];
    }
    
    // Отображаем недавние
    recentList.innerHTML = '';
    recentPages.slice(0, 5).forEach(item => {
        const link = document.createElement('a');
        link.href = `reader.html?book=${item.book}&page=${item.page}`;
        link.className = 'recent-item';
        link.innerHTML = `
            <div class="recent-title">${item.title}</div>
            <div class="recent-page">Страница ${item.page}</div>
        `;
        recentList.appendChild(link);
    });
});

// Функция для начала чтения
function startReading(bookId, page) {
    window.location.href = `reader.html?book=${bookId}&page=${page}`;
}