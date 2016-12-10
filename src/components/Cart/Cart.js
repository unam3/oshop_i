const React = require('react');
const { connect } = require('react-redux');

const Cart = ({cart}) => {
  require('./Cart.css');
  const productsCount = Object.keys(cart).length;
  return (
    <div className="cart blue-text">
      { productsCount ? (
        <a className="blue-text" href="#">
          {'В корзине ' + productsCount + ' товаров'}
        </a>) : 'Корзина пуста'
      }
    </div>
  );
};

//export const component ({cart}) {
export const ConnectedCart = connect(
  ({cart}) => ({cart})
)(Cart);
