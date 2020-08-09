# Бэкенд проекта NewsExplorer

Разработка бэкенда на Node.js, express.js, с использованием базы данных MongoDB для проекта NewsExplorer
____

## Адреса для API запросов 

- [https://api.mestoproject.ml/](https://api.mestoproject.ml/)
- [https://www.api.mestoproject.ml/](https://www.api.mestoproject.ml/)
____
## Публичный IPv4

- 84.201.179.39
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

- запрос данных авторизованного профиля осуществляется по url /users/me

### POST запрос

В POST запросе, обрабатываются аутентификация, авторизация и регистрация пользователя. 

- url для авторизации - /signin
- url для регистрации - /signup
____
#### signup - тело запроса JSON формат, все поля являются обязательными.
##### Пример тела запроса по /signup
{
  "name": "Имя от 2 символов", 
  "email": "Почта любой длинны, проходит валидацию",
  "password": "Пароль от 8 символов"
}
____
#### signin - тело запроса JSON формат, все поля являются обязательными.
##### Пример тела запроса по /signin
{
  "email": "Почта любой длинны, проходит валидацию",
  "password": "Пароль от 8 символов"
}
____

# Запросы к контроллеру Articles
