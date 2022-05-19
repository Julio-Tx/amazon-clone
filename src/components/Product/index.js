import React from 'react';
import PropTypes from 'prop-types';
import { Prod } from './styled';

export default function Product({
  title,
  info,
  imgSrc,
  priceWhole,
  priceFraction,
  linkTitle,
}) {
  return (
    <Prod>
      <h3>{title}</h3>

      <img src={imgSrc} alt="solar energy" />
      <div className="product-info">
        <div className="price">
          <p className="price-big">{priceWhole}</p>
          <p className="price-low">{priceFraction}</p>
        </div>
        <p className="product-title">{info}</p>
      </div>

      <a href="https://www.amazon.es/-/pt/gp/goldbox/?ie=UTF8&deals-widget=%257B%2522presetId%2522%3A%2522deals-collection-lightning-deals%2522%257D&pf_rd_p=85ca65a6-55e9-4ff5-aa22-13362ec0e6fb&pd_rd_wg=9cry0&pf_rd_r=ZJYMAMTGHQ9Y8REJTXTZ&pd_rd_w=vc8h4&pd_rd_r=34ded97b-3f7c-46ce-941d-363823e894e0&ref_=pd_gw_unk">
        {linkTitle}
      </a>
    </Prod>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  priceWhole: PropTypes.string.isRequired,
  priceFraction: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};
