// Правильные ответы
const correctAnswers = {
    // Таблица на странице 6
    'page6_1_0_0': 'sieve',
    'page6_1_1_1': 'a sour-tasting liquid used as a condiment, made by fermenting wine or cider',
    'page6_1_2_0': 'blanch',
    'page6_1_2_2': 'бланшировать',
    'page6_1_3_1': 'a cold Spanish soup made from tomatoes, peppers, and other vegetables',
    'page6_1_4_0': 'beignet',
    'page6_1_5_1': 'the front part of the lower leg',
    'page6_1_6_0': 'roux',
    'page6_1_6_2': 'py',
    'page6_1_7_1': 'the stone of a fruit',
    'page6_1_8_0': 'alfredo sauce',
    'page6_1_9_1': 'the process of heating a liquid until it bubbles and turns to vapor',
    
    // True/False на странице 11
    'tf1': 'true',
    'tf2': 'false',
    'tf3': 'true',
    'tf4': 'true',
    
    // Matching на странице 12
    'match1': 'fast food outlet',
    'match2': 'self-service',
    'match3': 'buffet car',
    'match4': 'office block canteens',
    'match5': 'pubs',
    
    // Gaps на странице 13
    'gap1': 'commercial and non-commercial',
    'gap2': 'Commercial catering',
    'gap3': 'transport',
    'gap4': 'commercial',
    'gap5': 'Welfare catering',
    'gap6': 'welfare',
    
    // Видео на странице 10
    'video1': 'full service',
    'video2': '3',
    'video3': 'hotels',
    'video4': 'travel',
    'video5': 'entertainment',

    // Классификация (таблица)
    'class_military': 'Military catering',
    'class_commercial': 'Hotels,Restaurants,Pubs,Fast food outlets,Airports,Railway stations,Wedding receptions',
    'class_noncommercial': 'Schools,Hospitals,Prisons,Factory canteens'
};

// Инициализация всех заданий при загрузке страницы
function initTasks() {
    console.log('Инициализация заданий...');
    loadSavedAnswers();
}-

// Экранирование (защита от XSS-атак)
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Деэкранирование
function decodeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&');
}

// Проверка поля ввода в таблице
function checkTableInput(input) {
    if (!input) return;
    
    const safeValue = escapeHtml(input.value);
    const taskId = input.dataset.task;
    const row = input.dataset.row;
    const col = input.dataset.col;
    const answerId = `${taskId}_${row}_${col}`;
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = correctAnswers[answerId];
    
    if (!correctAnswer) {
        console.log('Нет правильного ответа для ', answerId);
        return;
    }
    
    // Проверяем правильность
    if (userAnswer === correctAnswer.toLowerCase()) {
        input.classList.remove('incorrect');
        input.classList.add('correct');
        console.log('Правильно: ', answerId, userAnswer);
    } else {
        input.classList.remove('correct');
        input.classList.add('incorrect');
        console.log('Неправильно: ', answerId, 'ожидалось: ', correctAnswer, 'получено: ', userAnswer);
    }
    
    // Сохраняем ответ
    saveTaskAnswer(answerId, safeValue);
}

// Функция для проверки всей таблицы по кнопке
function checkTask(taskId) {
    console.log('Проверка задания:', taskId);
    
    if (taskId === 'page6_1') {
        const inputs = document.querySelectorAll('#task-page6-table1 .task-input');
        let correctCount = 0;
        let totalCount = 0;
        
        inputs.forEach(input => {
            const safeValue = escapeHtml(input.value);
            const row = input.dataset.row;
            const col = input.dataset.col;
            const answerId = `${taskId}_${row}_${col}`;
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = correctAnswers[answerId];
            
            if (correctAnswer) {
                totalCount++;
                if (userAnswer === correctAnswer.toLowerCase()) {
                    correctCount++;
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                }
                // Сохраняем каждый ответ
                saveTaskAnswer(answerId, safeValue);
            }
        });
        
        const resultDiv = document.getElementById('result-page6_1');
        if (resultDiv) {
            if (totalCount > 0) {
                const message = `Правильно: ${correctCount} из ${totalCount}`;
                resultDiv.innerHTML = message;
                resultDiv.className = 'task-result ' + (correctCount === totalCount ? 'success' : 'partial');
                console.log(message);
            } else {
                resultDiv.innerHTML = 'Нет полей для проверки';
            }
        }
    }
}

// Функция для сброса таблицы
function resetTask(taskId) {
    console.log('Сброс задания:', taskId);
    
    if (taskId === 'page6_1') {
        const inputs = document.querySelectorAll('#task-page6-table1 .task-input');
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('correct', 'incorrect');
            
            // Удаляем из SessionStorage
            const row = input.dataset.row;
            const col = input.dataset.col;
            const answerId = `${taskId}_${row}_${col}`;
            deleteCookie(answerId);
        });
        
        const resultDiv = document.getElementById('result-page6_1');
        if (resultDiv) {
            resultDiv.innerHTML = '';
        }
    }
}

// Проверка True/False
function checkTF(questionNum, value) {
    const safeValue = escapeHtml(value);
    const answerId = `tf${questionNum}`;
    const resultSpan = document.getElementById(`tf${questionNum}-result`);
    const correctAnswer = correctAnswers[answerId];
    
    if (resultSpan) {
        if (value === correctAnswer) {
            resultSpan.innerHTML = ' ✓ Правильно';
            resultSpan.style.color = 'green';
            console.log('TF', questionNum, 'правильно');
        } else {
            resultSpan.innerHTML = ' ✗ Неправильно';
            resultSpan.style.color = 'red';
            console.log('TF', questionNum, 'неправильно');
        }
    }
    
    saveTaskAnswer(answerId, safeValue);
}

// Проверка Matching
function checkMatching(imageNum, value) {
    const safeValue = escapeHtml(value);
    const answerId = `match${imageNum}`;
    const resultSpan = document.getElementById(`match${imageNum}-result`);
    const correctAnswer = correctAnswers[answerId];
    
    if (resultSpan) {
        if (value === correctAnswer) {
            resultSpan.innerHTML = ' ✓';
            resultSpan.style.color = 'green';
        } else {
            resultSpan.innerHTML = ' ✗';
            resultSpan.style.color = 'red';
        }
    }
    
    saveTaskAnswer(answerId, safeValue);
}

function checkAllMatching() {
    let correctCount = 0;
    let totalCount = 5;
    
    for (let i = 1; i <= 5; i++) {
        const select = document.querySelector(`select[data-image="${i}"]`);
        const resultSpan = document.getElementById(`match${i}-result`);
        const correctAnswer = correctAnswers[`match${i}`];
        
        if (select && select.value) {
            if (select.value === correctAnswer) {
                correctCount++;
                if (resultSpan) {
                    resultSpan.innerHTML = ' ✓';
                    resultSpan.style.color = 'green';
                }
            } else {
                if (resultSpan) {
                    resultSpan.innerHTML = ' ✗';
                    resultSpan.style.color = 'red';
                }
            }
        }
    }
    
    const resultDiv = document.getElementById('result-page12');
    if (resultDiv) {
        resultDiv.innerHTML = `✅ Правильно: ${correctCount} из ${totalCount}`;
        resultDiv.className = 'task-result ' + (correctCount === totalCount ? 'success' : 'partial');
    }
}

// Сброс всех Matching заданий
function resetAllMatching() {
    for (let i = 1; i <= 5; i++) {
        const select = document.querySelector(`select[data-image="${i}"]`);
        const resultSpan = document.getElementById(`match${i}-result`);
        
        if (select) {
            select.value = '';
        }
        if (resultSpan) {
            resultSpan.innerHTML = '';
        }
        
        deleteCookie(`match${i}`);
    }
    
    const resultDiv = document.getElementById('result-page12');
    if (resultDiv) {
        resultDiv.innerHTML = '';
    }
}

// Проверка Gap-fill
function checkGap(gapNum, value) {
    const safeValue = escapeHtml(value);
    const answerId = `gap${gapNum}`;
    const resultSpan = document.getElementById(`gap${gapNum}-result`);
    const correctAnswer = correctAnswers[answerId];
    
    if (resultSpan) {
        if (value === correctAnswer) {
            resultSpan.innerHTML = ' ✓';
            resultSpan.style.color = 'green';
        } else {
            resultSpan.innerHTML = ' ✗';
            resultSpan.style.color = 'red';
        }
    }
    
    saveTaskAnswer(answerId, safeValue);
}

// Проверка всех пропусков
function checkAllGaps() {
    let correctCount = 0;
    let totalCount = 6;
    
    for (let i = 1; i <= 6; i++) {
        const select = document.querySelector(`select[data-gap="${i}"]`);
        const resultSpan = document.getElementById(`gap${i}-result`);
        
        if (select && select.value) {
            if (select.value === correctAnswers[`gap${i}`]) {
                correctCount++;
                if (resultSpan) {
                    resultSpan.innerHTML = ' ✓';
                    resultSpan.style.color = 'green';
                }
            } else {
                if (resultSpan) {
                    resultSpan.innerHTML = ' ✗';
                    resultSpan.style.color = 'red';
                }
            }
        }
    }
    
    const resultDiv = document.getElementById('result-page13');
    if (resultDiv) {
        resultDiv.innerHTML = `Правильно: ${correctCount} из ${totalCount}`;
        resultDiv.className = 'task-result ' + (correctCount === totalCount ? 'success' : 'partial');
    }
}

// Сброс всех пропусков
function resetGaps() {
    for (let i = 1; i <= 6; i++) {
        const select = document.querySelector(`select[data-gap="${i}"]`);
        const resultSpan = document.getElementById(`gap${i}-result`);
        
        if (select) {
            select.value = '';
        }
        if (resultSpan) {
            resultSpan.innerHTML = '';
        }
        
        // Удаляем из SessionStorage
        deleteCookie(`gap${i}`);
    }
    
    const resultDiv = document.getElementById('result-page13');
    if (resultDiv) {
        resultDiv.innerHTML = '';
    }
}

// Проверка видео-вопросов
function checkVideoAnswer(questionNum, value) {
    const safeValue = escapeHtml(value);
    const answerId = `video${questionNum}`;
    const resultDiv = document.getElementById(`video-q${questionNum}-result`);
    const correctAnswer = correctAnswers[answerId];
    
    if (resultDiv) {
        if (value === correctAnswer) {
            resultDiv.innerHTML = '✓ Правильно!';
            resultDiv.className = 'video-result correct';
        } else {
            resultDiv.innerHTML = '✗ Неправильно';
            resultDiv.className = 'video-result incorrect';
        }
    }
    
    saveTaskAnswer(answerId, safeValue);
}

// Проверка таблицы классификации
function checkClassificationTable() {
    // Правильные наборы слов для каждой категории
    const correctSets = {
        military: ['military catering'],
        commercial: ['hotels', 'restaurants', 'pubs', 'fast food outlets', 'airports', 'railway stations', 'wedding receptions'],
        noncommercial: ['schools', 'hospitals', 'prisons', 'factory canteens']
    };
    
    let feedback = '';
    let allCorrect = true;
    
    // Проверяем каждую категорию
    for (let category of ['military', 'commercial', 'noncommercial']) {
        const inputs = document.querySelectorAll(`.class-input[data-category="${category}"]`);
        const userWords = [];
        
        // Собираем все введённые слова (не пустые)
        inputs.forEach(input => {
            const val = input.value.trim().toLowerCase();
            if (val !== '') {
                userWords.push(val);
            }
        });
        
        const correctWords = correctSets[category];
        const correctWordsLower = correctWords.map(w => w.toLowerCase());
        
        // Проверяем, все ли правильные слова введены
        const missingWords = correctWordsLower.filter(w => !userWords.includes(w));
        // Проверяем, есть ли лишние слова
        const extraWords = userWords.filter(w => !correctWordsLower.includes(w));
        
        if (missingWords.length > 0 || extraWords.length > 0) {
            allCorrect = false;
            let categoryName = '';
            if (category === 'military') categoryName = 'Military catering';
            else if (category === 'commercial') categoryName = 'Commercial catering';
            else categoryName = 'Non-commercial catering';
            
            feedback += `<p><strong>${categoryName}:</strong>`;
            if (missingWords.length > 0) {
                feedback += ` Не хватает: ${missingWords.join(', ')}. `;
            }
            if (extraWords.length > 0) {
                feedback += ` Лишние: ${extraWords.join(', ')}. `;
            }
            feedback += `</p>`;
        }
    }
    
    const resultDiv = document.getElementById('classification-table-result');
    if (allCorrect) {
        resultDiv.innerHTML = '✅ Всё правильно! Все термины распределены верно.';
        resultDiv.className = 'task-result success';
    } else {
        resultDiv.innerHTML = '❌ Есть ошибки:<br>' + feedback;
        resultDiv.className = 'task-result partial';
    }
    
    // Сохраняем все поля в SessionStorage
    document.querySelectorAll('.class-input').forEach(input => {
        const safeValue = escapeHtml(input.value);
        const category = input.dataset.category;
        const row = input.dataset.row;
        saveTaskAnswer(`class_${category}_${row}`, safeValue);
    });
}

// Сброс таблицы классификации
function resetClassificationTable() {
    document.querySelectorAll('.class-input').forEach(input => {
        input.value = '';
        const category = input.dataset.category;
        const row = input.dataset.row;
        deleteCookie(`class_${category}_${row}`);
    });
    const resultDiv = document.getElementById('classification-table-result');
    if (resultDiv) {
        resultDiv.innerHTML = '';
    }
}

// Загрузка сохраненных ответов
function loadSavedAnswers() {
    console.log('Загрузка сохраненных ответов...');
    
    // Загружаем ответы для полей ввода таблицы
    document.querySelectorAll('.task-input').forEach(input => {
        const taskId = input.dataset.task;
        const row = input.dataset.row;
        const col = input.dataset.col;
        const answerId = `${taskId}_${row}_${col}`;
        const savedValue = getCookie(answerId);
        
        if (savedValue) {
            console.log('📎 Загружен ответ:', answerId, '=', savedValue);
            const originalValue = decodeHtml(savedValue);
            input.value = originalValue; // устанавливаем значение
            
            // Проверяем правильность (чтобы подсветить)
            const correctAnswer = correctAnswers[answerId];
            if (correctAnswer) {
                if (savedValue.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                    input.classList.add('correct');
                    input.classList.remove('incorrect');
                } else {
                    input.classList.add('incorrect');
                    input.classList.remove('correct');
                }
            }
        } else {
            // Если нет сохраненного значения, убеждаемся что поле пустое
            input.value = '';
            input.classList.remove('correct', 'incorrect');
        }
    });
    
    // Загружаем ответы для True/False
    for (let i = 1; i <= 4; i++) {
        const answerId = `tf${i}`;
        const savedValue = getCookie(answerId);
        if (savedValue) {
            const radio = document.querySelector(`input[name="tf${i}"][value="${savedValue}"]`);
            if (radio) {
                radio.checked = true;
                // Показываем результат
                const resultSpan = document.getElementById(`tf${i}-result`);
                if (resultSpan) {
                    if (savedValue === correctAnswers[answerId]) {
                        resultSpan.innerHTML = ' ✓ Правильно';
                        resultSpan.style.color = 'green';
                    } else {
                        resultSpan.innerHTML = ' ✗ Неправильно';
                        resultSpan.style.color = 'red';
                    }
                }
            }
        }
    }
    
    // Загружаем ответы для Matching
    for (let i = 1; i <= 5; i++) {
        const answerId = `match${i}`;
        const savedValue = getCookie(answerId);
        if (savedValue) {
            const select = document.querySelector(`select[data-image="${i}"]`);
            if (select) {
                select.value = savedValue;
                const resultSpan = document.getElementById(`match${i}-result`);
                if (resultSpan) {
                    if (savedValue === correctAnswers[answerId]) {
                        resultSpan.innerHTML = ' ✓';
                        resultSpan.style.color = 'green';
                    } else {
                        resultSpan.innerHTML = ' ✗';
                        resultSpan.style.color = 'red';
                    }
                }
            }
        }
    }
    
    // Загружаем ответы для Gap-fill
    for (let i = 1; i <= 6; i++) {
        const answerId = `gap${i}`;
        const savedValue = getCookie(answerId);
        if (savedValue) {
            const select = document.querySelector(`select[data-gap="${i}"]`);
            if (select) {
                select.value = savedValue;
                const resultSpan = document.getElementById(`gap${i}-result`);
                if (resultSpan) {
                    if (savedValue === correctAnswers[answerId]) {
                        resultSpan.innerHTML = ' ✓';
                        resultSpan.style.color = 'green';
                    } else {
                        resultSpan.innerHTML = ' ✗';
                        resultSpan.style.color = 'red';
                    }
                }
            }
        }
    }
    
    // Загружаем ответы для видео
    for (let i = 1; i <= 5; i++) {
        const answerId = `video${i}`;
        const savedValue = getCookie(answerId);
        if (savedValue) {
            const radio = document.querySelector(`input[name="video-q${i}"][value="${savedValue}"]`);
            if (radio) {
                radio.checked = true;
                const resultDiv = document.getElementById(`video-q${i}-result`);
                if (resultDiv) {
                    if (savedValue === correctAnswers[answerId]) {
                        resultDiv.innerHTML = '✓ Правильно!';
                        resultDiv.className = 'video-result correct';
                    } else {
                        resultDiv.innerHTML = '✗ Неправильно';
                        resultDiv.className = 'video-result incorrect';
                    }
                }
            }
        }
    }

    // Загружаем ответы для таблицы классификации
    document.querySelectorAll('.class-input').forEach(input => {
        const category = input.dataset.category;
        const row = input.dataset.row;
        const saved = getCookie(`class_${category}_${row}`);
        if (saved) {
            const originalValue = decodeHtml(saved);
            input.value = originalValue;
        }
    });
    
    console.log('Загрузка завершена');
}

// Вспомогательная функция для отладки
function showAllAnswers() {
    console.log('=== СОХРАНЕННЫЕ ОТВЕТЫ ===');
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
    console.log('===========================');
}