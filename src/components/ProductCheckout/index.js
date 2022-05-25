import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styled';
import PrimeIcon from '../../images/prime-icon.png';

function ProductCheckout({
  id,
  name,
  nameOfProduct,
  imgSmall,
  priceWhole,
  priceFraction,
  color,
}) {
  return (
    <div>
      <Container>
        <div className="img-product">
          <img src={imgSmall} alt={name} />
        </div>
        <div className="product-info">
          <Link to={`/product/${id}`}>
            <span className="name">{nameOfProduct}</span>
          </Link>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{priceWhole}</span>
            <span className="cent">{priceFraction}</span>
          </div>
          <span className="stock">Em stock</span>
          <div className="prime-icon">
            <img src={PrimeIcon} alt="prime icon" />
          </div>
          <div className="gift">
            <input type="checkbox" />
            <span>Isto é um presente</span>
          </div>
          <div className="product-color">
            <h4>Color: </h4>
            <span>{color}</span>
          </div>
          <div className="product-footer">
            <div className="select-wrap">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Qtd.:</label>
              <select name="qtd">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="delete">
              <div>
                <a href="/#">Apagar</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
ProductCheckout.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameOfProduct: PropTypes.string.isRequired,
  imgSmall: PropTypes.string.isRequired,
  priceWhole: PropTypes.string.isRequired,
  priceFraction: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default ProductCheckout;
