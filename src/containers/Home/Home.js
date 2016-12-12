import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

const styles = {};

export default function() {
  require('./Home.css');
  return (
    <div className={styles.home}>
      <Helmet title="Oshop"/>
      <div className={styles.masthead}>
        <h1>Oshop</h1>
        <p>
Часть условного интернет-магазина. Воображаемый крупный проект с множеством
разделов и непрерывным циклом разработкив котором постоянно будут происходить
изменения дизайна и логики работы.
        </p>
        <p>
Именование css классов БЭМ / React / Redux / Webpack
        </p>
        <p>
Сверстаны две страницы по макетам и написана js-обработка. Учтены рост и
изменение проекта (переиспользование блоков html и js).
        </p>
        <p>
Проект собирается webpack. Используются react-компоненты, redux-react для
управления состоянием, именование css-классов согласно методологии БЭМ.
        </p>
        <p className={styles.humility}>
          <a href="https://github.com/unam3/oshop">unam3/oshop</a> перенесен на <a href="https://github.com/erikras/react-redux-universal-hot-example">
erikras/react-redux-universal-hot-example</a>
        </p>

        <h2>Сверстанные страницы</h2>
        <h3>
          <Link to="/product_list">
            Список товаров (кликабельно)
          </Link>
        </h3>
        <ol>
          <li>
            Подгрузка товаров на условном ajax (setTimeout).
          </li>
          <li>
            Добавление в корзину и изменение количества товаров в блоке корзины без перезагрузки страницы.
          </li>
        </ol>
        <h3>
          <Link to="/order">
            Оформление заказа (в оригинале задания "Корзина") (кликабельно)
          </Link>
        </h3>
        <ol>
          <li>
            Обработка формы с вариацией полей (все поля обязательны). (setTimeout)
          </li>
          <li>
            Удаление товаров без перезагрузки страницы.
          </li>
          <li>
            Пересчет итоговой стоимости заказа без перезагрузки страницы.
          </li>
        </ol>

        <h2>Сборка проекта</h2>

          <p>
            Команды запускаем из дирекктории проекта.
          </p>
          <p>
            Устанавливаем пакеты для сборки проекта:
            <br/>
            <code>
              npm install
            </code>
          </p>
          <p>
          Сборка и запуск:
            <br/>
            <code>
              npm run dev
            </code>
          </p>

        <h3>Примечания</h3>

        <p>
          В dev-сборке поломаны цвета ссылок бутстрапом. Если выставить в
переменных бутстрапа изначальный черный — изменится цвет текста в
redux dev-panel.

        </p>
        <p>
          Непонятно почему eslint съедает невалидный json-конфиг. Некоторые
правила из него бы убрал.
        </p>
        <p>
          Для центрирования содержимого страницы раскомментировать у
<code>body</code> правило <code>margin: auto;</code> в <code>src/containers/App/App.css</code>.
        </p>
      </div>
    </div>
  );
}
