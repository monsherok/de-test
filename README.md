Перед началом: 
 Прошу не судить супер строго, в каждой студии свои правила и подходы - если мой подход не похож на ваш, то это всего лишь дело времени.
 Ну постарался по ТЗ.

Установка:
 npm i
 или
 npm i --legacy-peer-deps
 (i) флаг --legacy-peer-deps позволит продолжить установку при возникновении 
 конфликтов зависимостей (версий пакетов).

Запуск режима разработчика (c запуском сервера)
 npm run dev

Запуск сборки проекта (без запуска сервера, только финальная сборка)
 npm run build

Основные файлы для работы с шаблоном:
 js/app.js
 scss/style.scss

 index.html - главная страница
 файлы html/*.htm - подключаемые части

При возникновении ошибок убедитесь что:
1) У вас установлен Node.js последней версии
2) Терминал открыт с правами администратора
3) В названиях папок на всем пути к проекту нет символа # или !
4) Папки и файлы должны быть названы латиницей без пробелов
5) Тег img и его содержимое должны быть записаны в одну строку без переносов
6) В атрибуте src должен быть указан путь к существующей картинке

Прочие проблемы и их решения:
//-----------------------------------
Ошибка "unable to resolve dependency tree"
Решение:
npm i --legacy-peer-deps
//-----------------------------------
Ошибка node-sass.
Решения:
npm rebuild node-sass
и/или
npm install sass gulp-sass --save-dev
//-----------------------------------
Ошибка Pyton
Решени:
npm install --global windows-build-tools
