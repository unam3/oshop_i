const React = require('react');
const { Ring } = require('../../components/Ring/Ring');
import { Filters } from '../../components/Filters/Filters';
import { ProductTable } from '../../components/ProductTable/ProductTable';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      products,
      productsLoadOffset,
      onShowMoreProducts,
    } = this.props;

    // Первое условие предотвращает server rendering.
    // Без него на сервере изменяется productsLoadOffset, products при этом
    // почему-то не изменяется и остается [].
    // __CLIENT__ устанавливается в конфигах вебпака, и в bin/server.js
    // устанавливается в false.
    if (__CLIENT__ && products.length === 0 && productsLoadOffset === 0) {
      onShowMoreProducts();
    }
  }

  render () {
    require('./RealProductList.css');

    const {
      cart,
      products,
      productsCategory,
      productsLoadOffset,
      onShowMoreProducts,
      onAddToCart
    } = this.props;
    return products && products.length ? (
      <div className="product-list main__product-list flex-row">
        <Filters products={products} />
        <ProductTable products={products}
          productsCategory={productsCategory}
          cart={cart}
          onAddToCart={onAddToCart}
          onShowMoreProducts={onShowMoreProducts}
          />
      </div>) : (<Ring />);
  }
}
