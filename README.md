# React Redux Universal Hot Oshop

  Часть условного интернет-магазина. Воображаемый крупный проект с множеством
разделов и непрерывным циклом разработкив котором постоянно будут происходить
изменения дизайна и логики работы.

  Именование css классов БЭМ / React / Redux / Webpack.

  Сверстаны две страницы по <a href="https://github.com/unam3/oshop_i/mockups">макетам</a> и написана js-обработка. Учтены рост и изменение проекта (переиспользование блоков html и js).

  Проект собирается webpack. Используются react-компоненты, redux-react для
управления состоянием, именование css-классов согласно методологии БЭМ.
  
  <a href="https://github.com/unam3/oshop">unam3/oshop</a> перенесен на сборку <a href="https://github.com/erikras/react-redux-universal-hot-example">
erikras/react-redux-universal-hot-example</a>

## Сверстанные страницы
###Список товаров
1. Подгрузка товаров на условном ajax (setTimeout)
2. Добавление в корзину и изменение количества товаров в блоке корзины без перезагрузки страницы.

###Оформление заказа (Корзина)
1. Обработка формы с вариацией полей (все поля обязательны). (setTimeout)
2. Удаление товаров без перезагрузки страницы.
3. Пересчет итоговой стоимости заказа без перезагрузки страницы.


##Сборка и запуск проекта

  Команды запускаем из директории проекта.


  Установка пакетов для сборки проекта:
```
npm install
```


  Сборка и запуск dev-сервера:
```
npm run dev
```

  Сборка и запуск:
```
npm run build && npm run start
```

##Примечания

- Для центрирования содержимого страницы раскомментировать у `body` правило
`margin: auto;` в `src/containers/App/App.css`
