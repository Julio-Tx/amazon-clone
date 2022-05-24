import React from 'react';

import { Container } from './styled';
import { ProductList } from '../../productData';
import ProductCheckout from '../../components/ProductCheckout';

function Checkout() {
  const id = '1';
  const product = ProductList.find((x) => x.id === id);

  return (
    <Container>
      <div className="div-left">
        <div className="header">
          <p>Carrinho de compras</p>
          <a href="/#">Desmarcar todos os produtos</a>
        </div>
        <ProductCheckout />
        <ProductCheckout />
        <div className="footer">
          <span>Subtotal (produtos):</span>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{product.priceWhole}</span>
            <span className="cent">{product.priceFraction}</span>
          </div>
        </div>
      </div>

      <div className="div-right">
        <div className="subtotal">
          <span>Subtotal (produtos):</span>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{product.priceWhole}</span>
            <span className="cent">{product.priceFraction}</span>
          </div>
        </div>
        <button type="button">Finalizar compra</button>
      </div>
    </Container>
  );
}

export default Checkout;
