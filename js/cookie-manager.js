// ===== ХРАНЕНИЕ В SESSIONSTORAGE =====

// Сохранить значение
function setData(key, value) {
    try {
        sessionStorage.setItem(key, value);
        console.log('Сохранено в SessionStorage:', key, '=', value);
        return true;
    } catch (e) {
        console.error('Ошибка сохранения:', e);
        return false;
    }
}

// Получить значение
function getData(key) {
    const value = sessionStorage.getItem(key);
    if (value) {
        console.log('Загружено из SessionStorage:', key, '=', value);
    } else {
        console.log('Нет данных в SessionStorage для:', key);
    }
    return value;
}

// Удалить значение
function removeData(key) {
    sessionStorage.removeItem(key);
    console.log('Удалено из SessionStorage:', key);
}

// Очистить всё
function clearAll() {
    sessionStorage.clear();
    console.log('SessionStorage полностью очищен');
}

// ===== ФУНКЦИИ ДЛЯ СОВМЕСТИМОСТИ СО СТАРЫМ КОДОМ =====
// (чтобы не менять вызовы в других файлах)

function setCookie(name, value) {
    return setData(name, value);
}

function getCookie(name) {
    return getData(name);
}

function deleteCookie(name) {
    removeData(name);
}

// Сохранить ответ на задание
function saveTaskAnswer(taskId, value) {
    return setData(taskId, value);
}

// Получить сохраненный ответ
function getTaskAnswer(taskId) {
    return getData(taskId);
}

// Сохранить текущую страницу
function saveCurrentPage(bookId, pageNum) {
    return setData(`lastPage_${bookId}`, pageNum);
}

// Получить последнюю открытую страницу
function getLastPage(bookId) {
    const page = getData(`lastPage_${bookId}`);
    return page ? parseInt(page) : 1;
}

// Сохранить заметки
function saveNotes(bookId, pageNum, text) {
    return setData(`notes_${bookId}_${pageNum}`, text);
}

// Получить заметки
function getNotes(bookId, pageNum) {
    return getData(`notes_${bookId}_${pageNum}`) || '';
}

// Очистить все ответы для книги
function resetAllAnswers(bookId) {
    const keysToRemove = [];
    
    // Собираем ключи для удаления
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key.includes(bookId) || key.startsWith('task_') || key.startsWith('video_') || key.startsWith('gap_')) {
            keysToRemove.push(key);
        }
    }
    
    // Удаляем
    keysToRemove.forEach(key => sessionStorage.removeItem(key));
    console.log(`🧹 Очищено ${keysToRemove.length} записей для книги ${bookId}`);
    
    // Перезагружаем страницу
    location.reload();
}

// Вспомогательная функция: показать все сохраненные данные
function showAllData() {
    console.log('=== СОДЕРЖИМОЕ SESSIONSTORAGE ===');
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
    console.log('==================================');
}