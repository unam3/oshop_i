const React = require('react');

export const ShowMoreProducts = ({onShowMoreProducts}) => {
  require('./ShowMoreProducts.css');
  return (
    <a href="#" className="show-more"
        onClick={(e) => {e.preventDefault(); onShowMoreProducts();}}>
      Показать еще 6 товаров
    </a>
  );
};
