// Данные учебника
const textbookData = {
    'catering': {
        id: 'catering',
        title: 'The Anatomy of Catering',
        author: 'Г.Р. Гарипова',
        year: 2023,
        totalPages: 12,
        pages: {
            // ===== СТРАНИЦА 1 - ТИТУЛЬНЫЙ ЛИСТ =====
            1: {
                type: 'title',
                title: 'Титульный лист',
                content: `
                    <div class="title-page">
                        <p class="ministry">МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
                        <p class="university">ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ</p>
                        <p class="university">«БАШКИРСКИЙ ГОСУДАРСТВЕННЫЙ АГРАРНЫЙ УНИВЕРСИТЕТ»</p>
                        
                        <div class="author">Г. Р. ГАРИПОВА</div>
                        
                        <h1>The Anatomy of Catering</h1>
                        <h2>(Business English for Food Technologists)</h2>
                        
                        <p class="subtitle">Учебное пособие по английскому языку</p>
                        
                        <div class="recommendation">
                            <p>Рекомендовано научно-методическим советом ФГБОУ ВО Башкирский ГАУ</p>
                            <p>в качестве учебного пособия по английскому языку для обучающихся</p>
                            <p>направления бакалавриата «Технология продукции и организация общественного питания»</p>
                        </div>
                        
                        <div class="publisher-info">
                            <p>Уфа</p>
                            <p>Башкирский ГАУ</p>
                            <p>2023</p>
                        </div>
                    </div>
                `
            },
            
            // ===== СТРАНИЦА 2 - АННОТАЦИЯ =====
            2: {
                type: 'copyright',
                title: 'Аннотация',
                content: `
                    <div class="copyright-page">
                        <p class="udk">УДК 811.642(07)</p>
                        <p class="bbk">ББК 65.431я7</p>
                        <p class="signature">Г20</p>
                        
                        <p class="reviewers-title">Рецензенты:</p>
                        <p class="reviewer">И. Т. Гареева — кандидат биол. наук,</p>
                        <p class="reviewer">доцент кафедры технологии общественного питания и переработки</p>
                        <p class="reviewer">растительного сырья ФГБОУ ВО Башкирский ГАУ;</p>
                        
                        <p class="reviewer">А. С. Рябцева — канд. филол. наук, доцент</p>
                        <p class="reviewer">Института русского языка факультета иностранных языков</p>
                        <p class="reviewer">Наньчанского университета, Цзянси, Китай;</p>
                        
                        <p class="reviewer">Н. П. Пешкова — д-р филол. наук, профессор,</p>
                        <p class="reviewer">зав. кафедрой иностранных языков естественных факультетов</p>
                        <p class="reviewer">ФРГФ Уфимского университета науки и технологий</p>
                        
                        <div class="citation">
                            <p><strong>Гарипова Г.Р.</strong></p>
                            <p><strong>Г20 The Anatomy of Catering (Business English for Food Technologists)</strong> : учебное пособие по английскому языку / Г.Р. Гарипова. — Уфа : Башкирский ГАУ, 2023. — 92 с.</p>
                        </div>
                        
                        <p class="isbn">ISBN 978-5-7456-0856-8</p>
                        
                        <p class="annotation">Учебное пособие развивает у обучающихся способности применять современные коммуникативные технологии на иностранных языках для профессионального взаимодействия согласно ФГОС ВО. Пособие предназначено для аудиторной и самостоятельной работы бакалавров, обучающихся по направлению 19.03.04 «Технология продукции и организация общественного питания» в рамках дисциплины «Деловой иностранный язык».</p>
                        
                        <div class="copyright-bottom">
                            <p>© Гарипова Г.Р., 2023</p>
                            <p>© ФГБОУ ВО Башкирский ГАУ, 2023</p>
                        </div>
                    </div>
                `
            },
            
            // ===== СТРАНИЦА 3 - СОДЕРЖАНИЕ (НАЧАЛО) =====
            3: {
                type: 'contents',
                title: 'Содержание',
                content: `
                    <h2 class="contents-title">СОДЕРЖАНИЕ</h2>
        
                    <div class="contents-list">
                        <div class="contents-item"><span>ВВЕДЕНИЕ</span><span class="dots"></span><span>4</span></div>
                        
                        <div class="contents-item"><span>PART I. PROFESSIONAL ENGLISH</span><span class="dots"></span><span>5</span></div>
                        <div class="contents-item level-1"><span>Unit I. Introduction To Hospitality Industry</span><span class="dots"></span><span>5</span></div>
                        <div class="contents-item level-2"><span>Lesson 1. Hospitality Industry</span><span class="dots"></span><span>5</span></div>
                        <div class="contents-item level-2"><span>Lesson 2. Catering Industry</span><span class="dots"></span><span>12</span></div>
                        <div class="contents-item level-2"><span>Lesson 3. Types of Catering</span><span class="dots"></span><span>14</span></div>
                        <div class="contents-item level-2"><span>Lesson 4. Diversity of Food Service Styles</span><span class="dots"></span><span>18</span></div>
                        
                        <div class="contents-item level-1"><span>Unit II. Food And Nutrition</span><span class="dots"></span><span>25</span></div>
                        <div class="contents-item level-2"><span>Lesson 1. What Is Food and Nutrition?</span><span class="dots"></span><span>25</span></div>
                        
                        <div class="contents-item level-1"><span>Unit III. Food And Safety</span><span class="dots"></span><span>30</span></div>
                        <div class="contents-item level-2"><span>Lesson 1. Ancillary Department</span><span class="dots"></span><span>30</span></div>
                        <div class="contents-item level-2"><span>Lesson 2. Personal Hygiene and Food Safety</span><span class="dots"></span><span>35</span></div>
                        <div class="contents-item level-2"><span>Lesson 3. Good Food Hygiene</span><span class="dots"></span><span>38</span></div>
                        
                        <div class="contents-item"><span>PART II. BUSINESS ENGLISH</span><span class="dots"></span><span>41</span></div>
                        <div class="contents-item level-1"><span>Unit I. Restaurant Business</span><span class="dots"></span><span>41</span></div>
                        <div class="contents-item level-2"><span>Lesson 1. Duties and Responsibilities of the Restaurant Staff</span><span class="dots"></span><span>41</span></div>
                        <div class="contents-item level-2"><span>Lesson 2. Menu</span><span class="dots"></span><span>45</span></div>
                        <div class="contents-item level-2"><span>Lesson 3. How To Start Restaurant Business</span><span class="dots"></span><span>48</span></div>
                        
                        <div class="contents-item"><span>PART III. TEXTS FOR ADDITIONAL READING</span><span class="dots"></span><span>51</span></div>
                        
                        <div class="contents-item"><span>APPENDIX 1</span><span class="dots"></span><span>61</span></div>
                        <div class="contents-item"><span>APPENDIX 2</span><span class="dots"></span><span>72</span></div>
                        <div class="contents-item"><span>APPENDIX 3</span><span class="dots"></span><span>79</span></div>
                        <div class="contents-item"><span>APPENDIX 4</span><span class="dots"></span><span>85</span></div>
                        
                        <div class="contents-item"><span>BIBLIOGRAPHY</span><span class="dots"></span><span>90</span></div>
                    </div>
                `
            },
                       
            // ===== СТРАНИЦА 4 - ВВЕДЕНИЕ =====
            4: {
                type: 'intro',
                title: 'Введение',
                content: `
                    <h2>ВВЕДЕНИЕ</h2>
                    
                    <p>За последние 10 лет понятие «кейтеринг» или «выездное ресторанное обслуживание» прочно вошло в нашу жизнь. Нет ни одного человека, который хотя бы раз не пробовал еду, приготовленную вне дома. Разнообразие предприятий общественного питания огромно, так же как и количество профессий в этой сфере. Хотя еда — это универсальный язык, понятный каждому, однако расширение и укрепление связей между разными странами позволяет универсализировать и ассимилировать кулинарные традиции. Шеф-повара известных на весь мир ресторанов делятся опытом, некоторые ведут блоги о технологиях приготовления пищи. Существует огромное количество кулинарных школ по всему миру и, благодаря цифровым технологиям и удаленному обучению, стало возможным расширить свои знания, «прокачать» свои умения, развить навыки, не выходя из дома. Деловой иностранный язык — то самое средство, которое помогает будущему пищевому технологу быть в курсе последних достижений пищевой индустрии и ресторанного бизнеса и помогает овладеть профессиональным иностранным языком для свободной коммуникации в этой сфере деятельности.</p>
                    
                    <p>Учебное пособие «The Anatomy of Catering» предназначено для бакалавров, обучающихся по направлению Технология продукции и организация общественного питания, а также для широкого круга лиц, изучающих английский язык самостоятельно и интересующихся ресторанным бизнесом.</p>
                    
                    <p>Целью пособия является развитие навыков деловой коммуникации, обогащение профессионального словарного запаса через чтение и анализ профессионально-ориентированных текстов и выполнение творческих заданий.</p>
                    
                    <p>Пособие состоит из 3 частей, глоссария и приложений. Основной структурной единицей первых двух частей является урок (Unit). Каждый урок делится на секции — Lessons.</p>
                    
                    <p>Пособие завершается приложениями, содержащими лексический минимум основных терминов, образцов меню, фразы для общения в ресторане.</p>
                    
                    <p>Учебное пособие предназначено для бакалавров, изучающих пищевые технологии в рамках дисциплины «Деловой иностранный язык».</p>
                `
            },
            
            // ===== СТРАНИЦА 5 - PART I, UNIT I, LESSON 1 (НАЧАЛО) =====
            5: {
                type: 'lesson',
                title: 'Lesson 1. Hospitality Industry (начало)',
                content: `
                    <h2>PART I PROFESSIONAL ENGLISH</h2>
                    <h2>UNIT I INTRODUCTION TO HOSPITALITY INDUSTRY</h2>
                    <h3>Lesson 1 Hospitality Industry</h3>
                    
                    <div class="section">
                        <h4>Pre-reading activity</h4>
                        <p><em>Before starting our journey into the world of hospitality click this link to know what your Food IQ is. You will come across new words concerning food and food techniques.</em></p>
                        <p><a href="#" onclick="window.open('https://www.quiz-bliss.com/angie/quiz-only-a-chef-could-ace-this-cooking-terminology-test-can-you', '_blank')">https://www.quiz-bliss.com/angie/quiz-only-a-chef-could-ace-this-cooking-terminology-test-can-you</a></p>
                    </div>
                    
                    <div class="task" id="task-page6-table1">
                        <p><strong>Task 1. Complete the following table:</strong></p>
                        
                        <div class="table-responsive">
                            <table class="task-table">
                                <thead>
                                    <tr>
                                        <th style="width: 25%">Word</th>
                                        <th style="width: 50%">Definition</th>
                                        <th style="width: 25%">Translation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="0" data-col="0" placeholder="введите слово" onblur="checkTableInput(this)"></td>
                                        <td>Tool for separating solids from liquids or larger solids from smaller solids, made of a wire or plastic net attached to a ring.</td>
                                        <td class="translation-cell">сито, решето</td>
                                    </tr>
                                    <tr>
                                        <td class="word-cell">vinegar /ˈvɪnɪɡə(r)/</td>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="1" data-col="1" placeholder="введите определение" onblur="checkTableInput(this)"></td>
                                        <td class="translation-cell">уксус</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="2" data-col="0" placeholder="введите слово" onblur="checkTableInput(this)"></td>
                                        <td>to prepare food, especially vegetables, by putting it into boiling water for a short time</td>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="2" data-col="2" placeholder="введите перевод" onblur="checkTableInput(this)"></td>
                                    </tr>
                                    <tr>
                                        <td class="word-cell">gazpacho /ɡəˈspætʃəʊ/</td>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="3" data-col="1" placeholder="введите определение" onblur="checkTableInput(this)"></td>
                                        <td class="translation-cell">Гаспачо</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="4" data-col="0" placeholder="введите слово" onblur="checkTableInput(this)"></td>
                                        <td>French doughnut that is made up with yeast, sweetened dough, squared cuts and then fried. Then dusted with powdered sugar. They are known to be light, airy like and pillowy pastries.</td>
                                        <td class="translation-cell">Бенье</td>
                                    </tr>
                                    <tr>
                                        <td class="word-cell">shin /ʃɪn/</td>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="5" data-col="1" placeholder="введите определение" onblur="checkTableInput(this)"></td>
                                        <td class="translation-cell">голяшка (кул)</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="6" data-col="0" placeholder="введите слово" onblur="checkTableInput(this)"></td>
                                        <td>a mixture of fat and flour heated together until it forms a mass, used for making sauces</td>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="6" data-col="2" placeholder="введите перевод" onblur="checkTableInput(this)"></td>
                                    </tr>
                                    <tr>
                                        <td class="word-cell">pit /pɪt/</td>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="7" data-col="1" placeholder="введите определение" onblur="checkTableInput(this)"></td>
                                        <td class="translation-cell">фруктовая косточка</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="8" data-col="0" placeholder="введите слово" onblur="checkTableInput(this)"></td>
                                        <td>This sauce is made with butter, heavy cream, garlic, Parmesan cheese, fresh parsley</td>
                                        <td class="translation-cell">соус Альфредо</td>
                                    </tr>
                                    <tr>
                                        <td class="word-cell">boiling</td>
                                        <td><input type="text" class="task-input" data-task="page6_1" data-row="9" data-col="1" placeholder="введите определение" onblur="checkTableInput(this)"></td>
                                        <td class="translation-cell">варить, кипятить</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="task-controls">
                            <button onclick="checkTask('page6_1')" class="btn-small">Проверить таблицу</button>
                            <button onclick="resetTask('page6_1')" class="btn-small btn-outline">Сбросить</button>
                        </div>
                        <div id="result-page6_1" class="task-result"></div>
                    </div>
                `
            },
            
            // ===== СТРАНИЦА 6 =====
            6: {
                type: 'lesson',
                title: 'Lesson 1. Hospitality Industry (продолжение)',
                content: `
                    <div class="section">
                        <h4>Reading activity</h4>
                        <b><p>Task 1. Read the text using a dictionary</p></b>
                        <p><strong>On-premises</strong> — food prepared and served at the place where the function is held</p>
                        <p><strong>Off-premises</strong> — food prepared in a place away from the place where it is served</p>
                        
                        <p>The hospitality industry is a multibillion-dollar industry that depends on the availability of leisure time, disposable income, and complete customer satisfaction. There are four segments of the hospitality industry: Food and beverages, Travel and Tourism, lodging, and recreation.</p>
                        
                        <p><strong>The food and beverage</strong> sector which is professionally known by its initials as F&B is the largest segment of the hospitality industry. The F&B industry is estimated to provide 50% of all meals eaten in the US today. It comprises of establishments primarily engaged in preparing meals, snacks, and beverages for immediate consumption on and off the premises. When a restaurant is part of a hotel, services it renders can enhance the guest experience by providing excellent food and first-class customer service. It can symbiotically function as part of other businesses, such as in bowling alleys or movie theaters.</p>
                        
                        <p><strong>Travel and tourism</strong> deal with services related to moving people from place to place. Buses, cabs, planes, ships, trains and so on are all part of the travel industry. Leisure travel is when a person spends money on lodging, food, and recreation while taking a vacation trip, and business travel is when a person travels for work and spends money on lodging and food. Some people also spend on recreation while on a business travel. The major function of the tourism is to encourage people to travel. When people travel, either for business or leisure, they spend money on hospitality.</p>
                    </div>
                `
            },
            
            // ===== СТРАНИЦА 7 =====
            7: {
                type: 'lesson',
                title: 'Lesson 1. Hospitality Industry (продолжение)',
                content: `
                    <div class="section">
                        
                        <p><strong>Lodging</strong> means accommodation for a period or a place to sleep for one or more nights. Fancy hotels, youth hostels, elder hostels, campgrounds, motels and other businesses that provide a place for people to sleep overnight are all in the lodging industry. Lodging businesses markets to other market segments such as business travelers, leisure travelers, long-stay travelers, budget travelers, and special travelers like people working with the government, airlines, and military.</p>
                        
                        <p><strong>Recreation</strong> is any activity that people do for rest, relaxation, and enjoyment. The goal of recreation is to refresh a person's body and mind. Any business that provides activities for rest, relaxation and enjoyment, to refresh a person's body and mind is in the recreation business. Entertainment businesses which provide shows such as movie or theater, attractions which are places of special interest of visits such as zoos and museums, spectator sports and participatory sports are all parts of the recreation business.</p>
                    </div>

                    <h4>Discussing activity</h4>
                        <p><strong>Task 1. Answer the following questions:</strong></p>
                        
                        <ol>
                            <li>What do you understand by hospitality industry?</li>
                            <li>What are the segments of hospitality industry?</li>
                            <li>How would you characterize the food and beverage sector?</li>
                            <li>What does travel and tourism segment include?</li>
                            <li>What does lodging mean?</li>
                            <li>What does recreation include?</li>
                            <li>Have you got any experience in hospitality industry? Is it positive or negative? Why?</li>
                        </ol>
                        
                        <h4>Vocabulary</h4>
                        <p><em>Give Russian equivalents:</em> multibillion-dollar industry, complete customer satisfaction, to be estimated, provide excellent food and first-class customer service, to encourage people to travel, provides activities spends money on lodging and food.</p>
                        
                        <p><em>Give English equivalents:</em> индустрия гостеприимства; приготовление еды и снеков; оказывать услуги, обслуживать; выездное (ресторанное) обслуживание, на вынос; обслуживание в стенах заведения; создавать, гарантировать место для проживания; индустрия гостиничного обслуживания; отдых, развлечение.</p>
                    </div>
                    
                    <div class="notes-section">
                        <label for="notes-page7">Ваши заметки:</label>
                        <textarea id="notes-page7" class="notes-textarea" rows="4" placeholder="Запишите свои мысли..."></textarea>
                        <button onclick="saveNotes(7)" class="btn-small">Сохранить заметки</button>
                    </div>
                `
            },
            
            // ===== СТРАНИЦА 8 =====
            8: {
                type: 'lesson',
                title: 'Lesson 1. Hospitality Industry (видео)',
                content: `
                    <div class="section">
                        <h4>Video activity</h4>
                        <p><em>Click this link, watch the video on hospitality industry and be ready to answer the questions:</em></p>
                        <p><a href="#" onclick="window.open('https://www.youtube.com/watch?v=ijmgS6L6bt4&feature=youtu.be', '_blank')">https://www.youtube.com/watch?v=ijmgS6L6bt4&feature=youtu.be</a></p>
                        
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ijmgS6L6bt4" frameborder="0" allowfullscreen></iframe>
                        </div>
                        
                        <div class="task">
                            <p><strong>Discussing activity:</strong></p>
                            
                            <div class="question">
                                <p>1. What is the definition of hospitality industry?</p>
                                <label><input type="radio" name="video-q1" value="food only" onchange="checkVideoAnswer(1, this.value)"> A) Industry that provides food only</label><br>
                                <label><input type="radio" name="video-q1" value="full service" onchange="checkVideoAnswer(1, this.value)"> B) Industry that includes food, lodging, travel and recreation</label><br>
                                <label><input type="radio" name="video-q1" value="hotels" onchange="checkVideoAnswer(1, this.value)"> C) Industry that deals only with hotels</label>
                                <div id="video-q1-result" class="video-result"></div>
                            </div>
                            
                            <div class="question">
                                <p>2. How many areas of that industry are mentioned in the video? What are they?</p>
                                <label><input type="radio" name="video-q2" value="2" onchange="checkVideoAnswer(2, this.value)"> A) 2</label><br>
                                <label><input type="radio" name="video-q2" value="3" onchange="checkVideoAnswer(2, this.value)"> B) 3</label><br>
                                <label><input type="radio" name="video-q2" value="4" onchange="checkVideoAnswer(2, this.value)"> C) 4</label>
                                <div id="video-q2-result" class="video-result"></div>
                            </div>
                            
                            <div class="question">
                                <p>3. What lodging businesses does the first area include?</p>
                                <label><input type="radio" name="video-q3" value="hotels" onchange="checkVideoAnswer(3, this.value)"> A) Hotels and motels</label><br>
                                <label><input type="radio" name="video-q3" value="restaurants" onchange="checkVideoAnswer(3, this.value)"> B) Restaurants and cafes</label><br>
                                <label><input type="radio" name="video-q3" value="airlines" onchange="checkVideoAnswer(3, this.value)"> C) Airlines and cruises</label>
                                <div id="video-q3-result" class="video-result"></div>
                            </div>
                            
                            <div class="question">
                                <p>4. What does the second area comprise?</p>
                                <label><input type="radio" name="video-q4" value="food" onchange="checkVideoAnswer(4, this.value)"> A) Food and beverage services</label><br>
                                <label><input type="radio" name="video-q4" value="travel" onchange="checkVideoAnswer(4, this.value)"> B) Travel and tourism</label><br>
                                <label><input type="radio" name="video-q4" value="entertainment" onchange="checkVideoAnswer(4, this.value)"> C) Entertainment and recreation</label>
                                <div id="video-q4-result" class="video-result"></div>
                            </div>
                            
                            <div class="question">
                                <p>5. What does the last area include?</p>
                                <label><input type="radio" name="video-q5" value="hotels" onchange="checkVideoAnswer(5, this.value)"> A) Hotels and resorts</label><br>
                                <label><input type="radio" name="video-q5" value="restaurants" onchange="checkVideoAnswer(5, this.value)"> B) Restaurants and bars</label><br>
                                <label><input type="radio" name="video-q5" value="entertainment" onchange="checkVideoAnswer(5, this.value)"> C) Entertainment and recreation</label>
                                <div id="video-q5-result" class="video-result"></div>
                            </div>
                        </div>
                    </div>
                    
                    <br>

                    <h3>Lesson 2 Catering industry</h3>
                    
                    <div class="section">
                        <h4>Pre-reading activity</h4>
                        <p><strong>Task 1. Read the statements and decide whether they are true or false:</strong></p>
                        
                        <div class="task" id="task-page11-tf">
                            <div class="tf-item">
                                <p>1. Catering is providing people with food and drink.</p>
                                <label><input type="radio" name="tf1" value="true" onchange="checkTF(1, this.value)"> True</label>
                                <label><input type="radio" name="tf1" value="false" onchange="checkTF(1, this.value)"> False</label>
                                <span id="tf1-result" class="tf-result"></span>
                            </div>
                            
                            <div class="tf-item">
                                <p>2. The term "catering" is only used for social situations like parties.</p>
                                <label><input type="radio" name="tf2" value="true" onchange="checkTF(2, this.value)"> True</label>
                                <label><input type="radio" name="tf2" value="false" onchange="checkTF(2, this.value)"> False</label>
                                <span id="tf2-result" class="tf-result"></span>
                            </div>
                            
                            <div class="tf-item">
                                <p>3. The main aim of catering is to make a profit and can be for commercial purposes.</p>
                                <label><input type="radio" name="tf3" value="true" onchange="checkTF(3, this.value)"> True</label>
                                <label><input type="radio" name="tf3" value="false" onchange="checkTF(3, this.value)"> False</label>
                                <span id="tf3-result" class="tf-result"></span>
                            </div>
                            
                            <div class="tf-item">
                                <p>4. Catering services can be found in hotels, restaurants or cafes.</p>
                                <label><input type="radio" name="tf4" value="true" onchange="checkTF(4, this.value)"> True</label>
                                <label><input type="radio" name="tf4" value="false" onchange="checkTF(4, this.value)"> False</label>
                                <span id="tf4-result" class="tf-result"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <h4>Reading activity</h4>
                        <p><strong>Task 2. Read the text about catering industry and see if you were right.</strong></p>
                        
                        <p>Catering is the provision of food and drink to people and this service is divided into two basic sectors: commercial businesses, where the main aim is to make a profit, and non-commercial businesses (welfare), where the main aim is to provide a non-profit-making social service. Commercial catering is usually found in hotels, restaurants, pubs, bars, cafes or fast food outlets, where you can eat in or take away the food and beverages you buy. Commercial catering can also be found in the transport industry in places such as railway stations, airports or motorway service stations and on ships and trains, where the place you eat is called a buffet car and offers self-service, or on aeroplanes, where on the other hand there is waiter service provided by the cabin crew. In other words, whenever people travel any distance for work or pleasure, they are able to eat and drink thanks to the catering. Private events, such as social events or gatherings and wedding receptions, or public events including rock concerts or football matches is also considered commercial. Welfare catering ranges from providing food for workers at a subsidized price in factory or office block canteens, to catering in hospitals, schools, colleges, and universities or prisons, where people pay nothing or very little for the service. Military catering encompasses all catering activities involved in association with armed forces and diplomatic events.</p>
                    </div>
                `
            },
            
            // ===== СТРАНИЦА 9 =====
            9: {
                type: 'lesson',
                title: 'Lesson 2. Catering Industry (задания на соответствие)',
                content: `
                    <div class="section">
                        <p><strong>Task 3. Read the text again and match the words with the pictures:</strong></p>
                        
                        <div class="task" id="task-page12-matching">
                            <div class="matching-grid">
                                <!-- A. fast food outlet -->
                                <div class="matching-item">
                                    <div class="matching-image"></div>
                                    <img src="img/str12img1.png" width="300" loading="lazy"/><br/>
                                    <select class="matching-select" data-image="1" onchange="checkMatching(1, this.value)">
                                        <option value="">-- Выберите --</option>
                                        <option value="fast food outlet">A. fast food outlet</option>
                                        <option value="self-service">B. self-service</option>
                                        <option value="buffet car">C. buffet car</option>
                                        <option value="office block canteens">D. office block canteens</option>
                                        <option value="pubs">E. pubs</option>
                                    </select>
                                    <span id="match1-result" class="match-result"></span>
                                </div>
                                
                                 <!-- B. self-service -->
                                <div class="matching-item">
                                    <img src="img/str12img2.png" width="300" loading="lazy"/><br/>
                                    <select class="matching-select" data-image="2" onchange="checkMatching(2, this.value)">
                                        <option value="">-- Выберите --</option>
                                        <option value="fast food outlet">A. fast food outlet</option>
                                        <option value="self-service">B. self-service</option>
                                        <option value="buffet car">C. buffet car</option>
                                        <option value="office block canteens">D. office block canteens</option>
                                        <option value="pubs">E. pubs</option>
                                    </select>
                                    <span id="match2-result" class="match-result"></span>
                                </div>

                                <!-- C. buffet car -->
                                <div class="matching-item">
                                    <img src="img/str12img3.png" width="300" loading="lazy"/><br/>
                                    <select class="matching-select" data-image="3" onchange="checkMatching(3, this.value)">
                                        <option value="">-- Выберите --</option>
                                        <option value="fast food outlet">A. fast food outlet</option>
                                        <option value="self-service">B. self-service</option>
                                        <option value="buffet car">C. buffet car</option>
                                        <option value="office block canteens">D. office block canteens</option>
                                        <option value="pubs">E. pubs</option>
                                    </select>
                                    <span id="match3-result" class="match-result"></span>
                                </div>

                                <!-- D. office block canteens -->
                                <div class="matching-item">
                                    <img src="img/str12img4.png" width="300" loading="lazy"/><br/>
                                    <select class="matching-select" data-image="4" onchange="checkMatching(4, this.value)">
                                        <option value="">-- Выберите --</option>
                                        <option value="fast food outlet">A. fast food outlet</option>
                                        <option value="self-service">B. self-service</option>
                                        <option value="buffet car">C. buffet car</option>
                                        <option value="office block canteens">D. office block canteens</option>
                                        <option value="pubs">E. pubs</option>
                                    </select>
                                    <span id="match4-result" class="match-result"></span>
                                </div>

                                <!-- E. pubs -->
                                <div class="matching-item">
                                    <img src="img/str12img5.png" width="300" loading="lazy"/><br/>
                                    <select class="matching-select" data-image="5" onchange="checkMatching(5, this.value)">
                                        <option value="">-- Выберите --</option>
                                        <option value="fast food outlet">A. fast food outlet</option>
                                        <option value="self-service">B. self-service</option>
                                        <option value="buffet car">C. buffet car</option>
                                        <option value="office block canteens">D. office block canteens</option>
                                        <option value="pubs">E. pubs</option>
                                    </select>
                                    <span id="match5-result" class="match-result"></span>
                                </div>
                            </div>

                            <div class="task-controls">
                                <button onclick="checkAllMatching()" class="btn-small">Проверить все</button>
                                <button onclick="resetAllMatching()" class="btn-small btn-outline">Сбросить все</button>
                            </div>
                        <div id="result-page12" class="task-result"></div>
                        </div>
                    </div>
                `
            },
            // ===== СТРАНИЦА 10 - Заполнение пропусков (Gap-fill) =====
            10: {
                type: 'lesson',
                title: 'Lesson 2. Catering Industry (заполнение пропусков)',
                content: `
                    <div class="section">
                        <p><strong>Task 4. Complete the statements with the information from the text</strong></p>
                        
                        <div class="task" id="task-page13-gaps">
                            <div class="gap-item">
                                <p>1. Catering is divided into two basic sectors 
                                    <select class="gap-select" data-gap="1" onchange="checkGap(1, this.value)">
                                        <option value="">-- выберите --</option>
                                        <option value="commercial and non-commercial">commercial and non-commercial</option>
                                        <option value="public and private">public and private</option>
                                        <option value="indoor and outdoor">indoor and outdoor</option>
                                    </select>
                                    <span id="gap1-result" class="gap-result"></span>
                                </p>
                            </div>
                            
                            <div class="gap-item">
                                <p>2. 
                                    <select class="gap-select" data-gap="2" onchange="checkGap(2, this.value)">
                                        <option value="">-- выберите --</option>
                                        <option value="Commercial catering">Commercial catering</option>
                                        <option value="Welfare catering">Welfare catering</option>
                                        <option value="Military catering">Military catering</option>
                                    </select>
                                    is usually found in hotels, restaurants, pubs, bars, cafes or fast food outlets.
                                    <span id="gap2-result" class="gap-result"></span>
                                </p>
                            </div>
                            
                            <div class="gap-item">
                                <p>3. Commercial catering can also be found in the 
                                    <select class="gap-select" data-gap="3" onchange="checkGap(3, this.value)">
                                        <option value="">-- выберите --</option>
                                        <option value="transport">transport</option>
                                        <option value="construction">construction</option>
                                        <option value="agriculture">agriculture</option>
                                    </select>
                                    industry in places such as railway stations, airports or motorway service stations.
                                    <span id="gap3-result" class="gap-result"></span>
                                </p>
                            </div>
                            
                            <div class="gap-item">
                                <p>4. Private events, such as social events or gatherings and wedding receptions, or public events including rock concerts or football matches is also considered 
                                    <select class="gap-select" data-gap="4" onchange="checkGap(4, this.value)">
                                        <option value="">-- выберите --</option>
                                        <option value="commercial">commercial</option>
                                        <option value="non-commercial">non-commercial</option>
                                        <option value="military">military</option>
                                    </select>
                                    <span id="gap4-result" class="gap-result"></span>
                                </p>
                            </div>
                            
                            <div class="gap-item">
                                <p>5. 
                                    <select class="gap-select" data-gap="5" onchange="checkGap(5, this.value)">
                                        <option value="">-- выберите --</option>
                                        <option value="Welfare catering">Welfare catering</option>
                                        <option value="Commercial catering">Commercial catering</option>
                                        <option value="Military catering">Military catering</option>
                                    </select>
                                    ranges from providing food for workers at a subsidized price.
                                    <span id="gap5-result" class="gap-result"></span>
                                </p>
                            </div>
                            
                            <div class="gap-item">
                                <p>6. People pay nothing or very little for 
                                    <select class="gap-select" data-gap="6" onchange="checkGap(6, this.value)">
                                        <option value="">-- выберите --</option>
                                        <option value="commercial">commercial</option>
                                        <option value="welfare">welfare</option>
                                        <option value="military">military</option>
                                    </select>
                                    catering.
                                    <span id="gap6-result" class="gap-result"></span>
                                </p>
                            </div>
                        </div>
                        
                        <div class="task-controls">
                            <button onclick="checkAllGaps()" class="btn-small">Проверить все</button>
                            <button onclick="resetGaps()" class="btn-small btn-outline">Сбросить</button>
                        </div>
                        <div id="result-page13" class="task-result"></div>
                    </div>

                    <br>

                    <p><strong>Task 5. Fill in the table with the information from the text. Write the words in the correct columns.</strong></p>
                    <p><em>Термины для распределения: Hotels, Restaurants, Pubs, Fast food outlets, Schools, Hospitals, Prisons, Airports, Railway stations, Factory canteens, Wedding receptions, Military catering</em></p>
                    
                    <div class="task" id="task-page10-classification">
                        <div class="table-responsive">
                            <table class="task-table">
                                <thead>
                                    <tr>
                                        <th style="width: 33%">Military catering</th>
                                        <th style="width: 33%">Commercial catering</th>
                                        <th style="width: 33%">Non-commercial catering</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" class="class-input" data-category="military" data-row="0" placeholder="введите термин">
                                        </td>
                                        <td>
                                            <input type="text" class="class-input" data-category="commercial" data-row="0" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="commercial" data-row="1" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="commercial" data-row="2" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="commercial" data-row="3" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="commercial" data-row="4" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="commercial" data-row="5" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="commercial" data-row="6" placeholder="введите термин">
                                        </td>
                                        <td>
                                            <input type="text" class="class-input" data-category="noncommercial" data-row="0" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="noncommercial" data-row="1" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="noncommercial" data-row="2" placeholder="введите термин">
                                            <input type="text" class="class-input" data-category="noncommercial" data-row="3" placeholder="введите термин">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="task-controls">
                            <button onclick="checkClassificationTable()" class="btn-small">Проверить</button>
                            <button onclick="resetClassificationTable()" class="btn-small btn-outline">Сбросить</button>
                        </div>
                        <div id="classification-table-result" class="task-result"></div>
                    </div>
                </div>
                `
            },
            
            // ===== СТРАНИЦА 11 - Lesson 3. Types of Catering (начало) =====
            11: {
                type: 'lesson',
                title: 'Lesson 3. Types of Catering (начало)',
                content: `
                    <h3>Lesson 3. Types of Catering</h3>
                    
                    <div class="section">
                        <h4>Pre-reading activity</h4>
                        <p>Look through the text and explain what you understand by words given <b>in bold.</b></p>
                        
                        <h4>Task 1. Read the text using dictionary.</h4>
                        <p>Provision of food for an event is as essential as the event itself. However, for a first-time planner, choosing the type of catering that fits your event can be a daunting task. With the wide variety of <b>food options</b> it can be a little tough to choose effectively. Be learning more about each type of catering, this will make it easier to select the type of catering you will need for your event. Here are the six different types of catering:</p>
                        
                        <h4>1. Corporate Catering</h4>
                        <p>Corporate catering depends on the size and level of the function being hosted. Corporate functions may range from small gatherings to fancy dinners. These require a specific type of structure when catering for them. Some companies would prefer a small open bar for its residents while others will opt for a small <b>foods tasting session</b>. Corporate functions are elegant and very relaxed and should be catered for with regard to this fact.</p>
                        
                        <h4>2. Wedding Catering</h4>
                        <p>Wedding catering is one of the most common forms of <b>large-scale catering</b>. One of the most critical aspects of a wedding is the reception, which mainly focuses on the food offered to guests. Weddings can be tricky since you may never be able to accurately estimate the number of people to be present during the wedding. The menu should reflect the diversity of the invited guests with a view to catering to different tastes. Aside from the food and the wine, the <b>caterer</b> is also in charge of table settings and displays, which vary for different functions.</p>

                        <h4>3. Social Event Catering</h4>
                        <p>Retirement parties, birthdays, baby and bridal showers always call for celebration. These functions are more intimate and demand attention to detail, especially when it comes to catering. Due to their small nature, always make an effort to service clients' <b>specific dietary needs</b>. Attention to people's <b>allergens</b> should be noted to avoid cases of inflamed allergies arising from food intake. Also, cultural beliefs should be considered to avoid the chance of providing prohibited foods during such gatherings. Additional options, aside from the food, such as the theme colour of the event, should also be factored. Compared to weddings and other large gatherings, small social events do not require a large presence of <b>on-site staff</b>. This is done to emphasize the intimate nature of such gatherings.</p>
                        
                        <h4>4. Concession Catering</h4>
                        <p>Public events, major sporting events, and large music concerts fall into this category. Wherever you find large crowds of people gathered, chances are there is food on site. In such cases, only the most popular foods are provided since it is difficult <b>to cater</b> to everyone's specific dietary needs. For instance, it makes sense to have popular fast food bars instead of <b>full course food options</b>.</p>
                        
                        <h4>5. Food Truck Catering</h4>
                        <p>This is a highly popular catering option for small outdoor functions or functions with many <b>food vendors</b>. They do not require a large staff. Two or four are enough to facilitate the preparation of food and serve people, which is mainly done through a window. Food selection can range from the very simple to fancy depending on a customer's needs and the nature of the event.</p>
                        
                        <h4>6. Restaurant Catering</h4>
                        <p>If you are hosting an event and would like a more advanced menu than the usual, restaurant catering is the way to go. For instance, if your event is being held within a hotel's premises, using one of the hotel's recommended restaurant caterers is highly advised. You might even get such a catering service as a package, which will save you the hustle of planning for all the intricate details. Some restaurants also provide <b>outside catering</b> should you want the same services at a different location. The caterers might also provide <b>table dressing services</b> if you wish to make the event beautiful and immersive. Understanding the different types of catering services helps you make an informed decision when choosing a caterer for your gathering. The food provided at the event is as important as the event itself since it brings people together, and since people have varying tastes and dietary needs, aligning the menu with this in mind will make for an unforgettable event.</p>
                    </div>
                `
            },
            
            // ===== СТРАНИЦА 12 - Lesson 3. Types of Catering (обсуждение) =====
            12: {
                type: 'lesson',
                title: 'Lesson 3. Types of Catering (обсуждение)',
                content: `
                    <div class="section">
                        <h4>Task 2. Discussing activity</h4>
                        
                        <p><strong>Answer the questions:</strong></p>
                        <ol>
                            <li>What are the types of catering?</li>
                            <li>What do you understand by each of them?</li>
                            <li>What is the difference between these two types of catering?</li>
                            <li>What are the three categories of caterers? What do they cater?</li>
                        </ol>
                        
                        <h4>Vocabulary</h4>
                        <p><em>Give English equivalents for:</em></p>
                        <p>Грандиозная, очень сложная задача; выбор блюд; корпоративный кейтеринг; ресторанное обслуживание; широкомасштабное ресторанное обслуживание; поставщик ресторанной провизии; избегать вспышки внезапной аллергии; персонал ресторана; поставщики продуктов питания; обеспечивать приготовление пищи.</p>
                        
                        <p><em>Give Russian equivalents for:</em></p>
                        <p>from small gatherings to fancy dinners; small open bar; focus on the food offered to guests; diversity; table settings and displays; attention to detail; food intake; fast food bars; large staff; within a hotel's premises; an unforgettable event.</p>
                        
                        <h4>Video activity</h4>
                        <p><em>Click this link, watch the video on different types of catering and be ready to answer the questions:</em></p>
                        <p><a href="#" onclick="window.open('https://www.youtube.com/watch?v=sslmS_UKJYY', '_blank')">https://www.youtube.com/watch?v=sslmS_UKJYY</a></p>
                        
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/sslmS_UKJYY" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="task">
                        <p>1. Name the types of catering mentioned in the video.</p>
                        <p>2. Characterize each of the catering types.</p>
                        <p>3. What are the peculiarities of each type of catering?</p>
                        <p>4. What type of catering do you fins the most interesting for you work and why?</p>
                    </div>
                    
                    <div class="notes-section">
                        <label for="notes-page12">Ваши ответы:</label>
                        <textarea id="notes-page12" class="notes-textarea" rows="4" placeholder="Запишите свои мысли..."></textarea>
                        <button onclick="saveNotes(12)" class="btn-small">Сохранить</button>
                    </div>
                `
            },
            


        },
        tableOfContents: [
            { page: 1, title: 'Титульный лист', level: 0 },
            { page: 2, title: 'Аннотация', level: 0 },
            { page: 3, title: 'Содержание', level: 0 },
            { page: 4, title: 'Введение', level: 0 },
            { page: 5, title: 'PART I. PROFESSIONAL ENGLISH', level: 1 },
            { page: 5, title: 'UNIT I. INTRODUCTION TO HOSPITALITY INDUSTRY', level: 1 },
            { page: 5, title: 'Lesson 1. Hospitality Industry (начало)', level: 2 },
            { page: 6, title: 'Lesson 1. Hospitality Industry (продолжение)', level: 2 },
            { page: 7, title: 'Lesson 1. Hospitality Industry (продолжение)', level: 2 },
            { page: 8, title: 'Lesson 2. Catering Industry (начало)', level: 2 },
            { page: 9, title: 'Lesson 2. Catering Industry (задания)', level: 2 },
            { page: 10, title: 'Lesson 3. Types of Catering (начало)', level: 2 },
            { page: 11, title: 'Lesson 3. Types of Catering (продолжение)', level: 2 },
            { page: 12, title: 'Lesson 3. Types of Catering (продолжение)', level: 2 }
        ]
    }
}