# Тесты на Google App Script

Структура:
+ src/ - исходный код проекта, выгружен через clasp
+ sample/ - примеры файлов проекта
  + table.ods - таблица Google Spreadsheet
  + page.html - страница опроса
## Структура проекта
### Таблица Google Spreadsheet
Обязательно в таблице должно быть:
1. Страницы с названием `Вопросы` и `Ответы` аналогичные примеру из sample/table.ods 
2. Области с именами `passScore` и `title`

### Код проекта Google App Script
Код проекта расположен в каталоге `src/`, выгружен через [clasp](https://github.com/google/clasp).
Проект контейнирован в таблицу.

