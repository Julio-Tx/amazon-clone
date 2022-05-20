import React from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '../../products-list.json';
import { AmazonFashion, Container } from './styled';

function ProductPage() {
  const { id } = useParams();
  const product = ProductList.find((x) => x.id === id);

  return (
    <div>
      <AmazonFashion>
        <img
          className="fashion"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON-FASHION/SUBNAV/MEGASUB/AMAZON_FASHION_ES_LOGO_384x90._CB452866070_.jpg"
          alt="amazon fashion"
        />
        <div className="list">
          <div className="nav-item">
            <a href="/mulher">MULHER</a>
          </div>
          <div className="nav-item">
            <a href="/homem">HOMEM</a>
          </div>
          <div className="nav-item">
            <a href="/menina">MENINA</a>
          </div>
          <div className="nav-item">
            <a href="/menino">MENINO</a>
          </div>
          <div className="nav-item">
            <a href="/bebe">BEBE</a>
          </div>
          <div className="nav-item">
            <a href="/malas">MALAS</a>
          </div>
          <div className="nav-item">
            <a href="/marcas">MARCAS</a>
          </div>

          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON_FASHION/2021/PRIME_WARDROBE/REBRAND/pt_PT/TBYB_Right_Nav._CB639750099_.jpg"
            alt="prime"
          />
        </div>
      </AmazonFashion>
      <Container>PRODUCT {product.name} PAGE</Container>
    </div>
  );
}
export default ProductPage;
