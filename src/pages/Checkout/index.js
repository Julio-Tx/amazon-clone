import React from 'react';

import { Container } from './styled';
import ProductCheckout from '../../components/ProductCheckout';
import { useStateValue } from '../../StateProvider';

function Checkout() {
  const [{ cart }] = useStateValue();
  let totalPrice = 0.0;

  function sumPrice() {
    for (let i = 0; i < cart.length; i += 1) {
      totalPrice += parseFloat(cart[i].price);
    }
  }
  sumPrice();
  const totalString = totalPrice.toFixed(2);
  const totalSplited = totalString.split('.');
  const priceWhole = totalSplited[0];
  const priceFraction = totalSplited[1];

  return (
    <Container>
      <div className="div-left">
        <div className="header">
          <p>Carrinho de compras</p>
          <a href="/#">Desmarcar todos os produtos</a>
        </div>
        {cart.map((item) => (
          <ProductCheckout
            id={item.id}
            name={item.name}
            imgSmall={item.image}
            nameOfProduct={item.nameOfProduct}
            priceWhole={item.priceWhole}
            priceFraction={item.priceFraction}
            color={item.color}
          />
        ))}
        <div className="footer">
          <span>Subtotal (produtos):</span>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{priceWhole}</span>
            <span className="cent">{priceFraction}</span>
          </div>
        </div>
      </div>

      <div className="div-right">
        <div className="subtotal">
          <span>Subtotal (produtos):</span>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{priceWhole}</span>
            <span className="cent">{priceFraction}</span>
          </div>
        </div>
        <button type="button">Finalizar compra</button>
      </div>
    </Container>
  );
}

export default Checkout;
