import React from 'react';
import { Link } from 'react-router';
import { GithubButton } from 'components';
import Helmet from 'react-helmet';

const styles = {};

export default function() {
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
управления состоянием, html собирается pug (jade), именование css-классов
согласно методологии БЭМ.
        </p>
        <GithubButton user="unam3"
                      repo="oshop_i"
                      type="star"
                      width={160}
                      height={30}
                      count large/>
        <GithubButton user="unam3"
                      repo="oshop_i"
                      type="fork"
                      width={160}
                      height={30}
                      count large/>

        <p className={styles.humility}>
          Forked and edited by <a href="https://github.com/unam3">unam3</a> from <a href="https://github.com/erikras/react-redux-universal-hot-example">
erikras/react-redux-universal-hot-example</a>
        </p>

        <h2>Сверстанные страницы</h2>
        <h3>
          <Link to="/product_list">
            Список товаров
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
            Оформление заказа (в оригинале задания "Корзина")
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
            Создаем файловую иерархию (если не создали ранее) и собираем шаблоны в html:
            <br/>
            <code>
              npm run pug
            </code>
          </p>
          <p>
          Сборка js:
            <br/>
            <code>
              npm run compile
            </code>
          </p>

        <h3>From the author</h3>

        <p>
          Набор взят для тестового задания.
        </p>
        <p>
          Непонятно почему eslint съедает невалидный json-конфиг. Некоторые
правила из него бы убрал.
        </p>
        <p>
          Для центрирования содержимого страницы раскомментировать у `body`
правило `margin: auto;` в `src/css/common.css`
        </p>
      </div>
    </div>
  );
}
