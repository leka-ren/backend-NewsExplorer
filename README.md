# Бэкенд проекта NewsExplorer

Разработка бэкенда на Node.js, express.js, с использованием базы данных MongoDB для проекта NewsExplorer
____

## Адреса для API запросов 

- [https://www.api.newsexpo.ml/](https://www.api.newsexpo.ml/)
- [https://api.newsexpo.ml/](https://api.newsexpo.ml/)
____
## Публичный IPv4

- 84.201.177.83
____

## Команды

- npm install - устанвока зависимостей
- npm run start - для запуска на локальном сервере production сборки
- npm run dev - develop запуск с hot reload

____

## Что использовалось

- [NodeJS](https://nodejs.org/en/)
- [Библиотека пакетов NPM](https://nodejs.org/en/download/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [Nginx](https://www.nginx.com/)
____

# Запросы к контроллеру Users

### GET запрос

- url /users/me - запрос данных авторизованного профиля.

### POST запрос

В POST запросе, обрабатываются аутентификация, авторизация и регистрация пользователя. 

- url /signin - для авторизации.
- url /signup - для регистрации.
____
#### signup - тело запроса JSON формат, все поля являются обязательными.
##### Пример тела запроса по /signup
```json
{
  "name": "Имя от 2 символов", 
  "email": "Почта любой длинны, проходит валидацию",
  "password": "Пароль от 8 символов"
}
```
____
#### signin - тело запроса JSON формат, все поля являются обязательными.
##### Пример тела запроса по /signin
```json
{
  "email": "Почта любой длинны, проходит валидацию",
  "password": "Пароль от 8 символов"
}
```
____

# Запросы к контроллеру Articles

### GET запрос

- url /articles - Запрос сохраненных пользователем статей.

### POST запрос

- url /articles - создаёт статью, тело запроса JSON формат, все поля являются обязательными.
____

##### Пример тела запроса по /signin
```json
{
  "keyword": "Слово",
  "title": "Заголовок",
  "text": "Текст статьи",
  "date": "Дата",
  "source": "Источник",
  "link": "Ссылка на статью, проходит валидацию на URL",
  "image": "Ссылка на иллюстрацию к статье, проходит валидацию на URL"
}
```

____

### DELETE запрос

- url /articles/articleId - удаляет сохранённую статью  по _id.
