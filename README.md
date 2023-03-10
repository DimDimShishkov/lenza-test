# Тестовое задание для компании Lenza OS

![image](https://raw.githubusercontent.com/DimDimShishkov/lenza-test/main/src/images/screenshot.png)

### Обзор

- Описание
- Структура проекта
- Инструкция по копированию

# Описание:

**О Lenza Чаты:** Мессенджер для деловой переписки. Заменяет использование почты и личных мессенджеров для делового общения в команде. Имеет конфиденциальность корпоративного уровня и приватность персонального мессенджера. Идеальный способ создать закрытую обстановку для общения команды, которая позволит организовать процессы и обеспечить безопасность данных. Встроенная функция быстрого звонка пользователю прямо из чата, с возможностью добавления в звонок новых участников. Lenza Chats имеет встроенные мини-приложения для продуктивной совместной работы

**Описание задания:**

1. Отверстать 6 базовых компонентов из которых состоит интерфейс, прописать необходимые пропсы и состояния:

- Chat item list (чат из левой панели)
- Message (сообщение из тела чата)
- Input (Поле ввода)
- Header (хедер)
- Time (Дата в теле чата)
- New message (полоса что есть новые сообщения)

2. При уменьшении экрана правая часть с сообщениями должна уменьшаться. Верстка до разрешения экрана 700 пикселей. Если размер экрана в ширину меньше 700 пикселей, выводим заглушку “ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ”.
3. Input (Поле ввода) для текста в правой части сообщений сделать НЕ input и НЕ textarea, но с возможностью писать в этом поле аналогично как в textarea. Должно быть видно три строки, если текста более трёх строк, то должна появиться прокрутка.
4. Список методов для работы с бэк-ендом вы найдете в сваггере по ссылке: https://api.lenzaos.com/documentation/ Используйте данные методы для вывода списка чатов и списка сообщений по каждому из них.
5. Левая панель, список чатов: В названиях чата, если название слишком длинное и не умещается в одну строку, обрезать название через троеточие(…)
   Если текст сообщения (вторая строка) слишком большой, оставить две строки, остальное обрезать и сделать троеточие (…)
6. При нажатии на чат слева в правой части должны динамически подгружаться сообщения, относящиеся к этому чату.

- [Ссылка на проект](http://azcxydddqxga.test.lenzaos.com/)
- [Ссылка на проект на gh-pages](https://dimdimshishkov.github.io/lenza-test/)
- [Макет в Figma и описание тех. задания](https://www.figma.com/file/HfbQz3vlNdNYbVJuta9AuT/TEST10?node-id=201%3A2180&t=h3U8LZVmdrH54hvI-0)
- [Ссылка на репозиторий](https://gitlab.lenzaos.com/lenza/web-test)

## Структура проекта

- api - пример метода работы с бекэндом, для примера реализован список чатов
- components - хранение компонентов, для примера реализован компонент Avatar
- constants - любые константы используемые в проекте, для примера список URL
- interface - общие интерфейсы, для примера интерфейс объекта Page
- pages - список страниц проекта
- utils - общие функции, для примера работа с бекендом

## Инструкция по копированию

```
скопировать проект
git clone git@github.com:DimDimShishkov/lenza-test.git

установить зависимости
npm i

запустить проект
npm run start
```
