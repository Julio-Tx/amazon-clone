import React from 'react';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ReactImageMagnify from 'react-image-magnify';

import PrimeIcon from '../../images/prime-icon.png';
import { ProductList } from '../../productData';
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
          <a href="/#">
            <div className="nav-item">
              <p>MULHER</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>HOMEM</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MENINA</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MENINO</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>BEBE</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MALAS</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MARCAS</p>
            </div>
          </a>

          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON_FASHION/2021/PRIME_WARDROBE/REBRAND/pt_PT/TBYB_Right_Nav._CB639750099_.jpg"
            alt="prime"
          />
        </div>
      </AmazonFashion>
      <Container>
        <div className="div-main">
          <div className="div-left">
            <div className="image-zoom">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: product.imgSmall,
                  },
                  largeImage: {
                    src: product.imgLarge,
                    width: 1500,
                    height: 1433,
                  },
                  enlargedImageContainerDimensions: {
                    width: '157%',
                    height: '105%',
                  },
                }}
              />
            </div>
            <p className="hint">Passe o rato por cima da imagem para ampliar</p>
          </div>

          <div className="div-right">
            <div className="div-right-top">
              <a href="/#">
                Visite a Loja da {product.name.toUpperCase()} (em Espanhol)
              </a>
              <p className="description">{product.description}</p>

              <div className="rating">
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarHalfIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <span>|</span>
                <p>{product.rating} avaliações</p>
              </div>
            </div>
            <div className="div-right-bottom">
              <div className="price">
                <p className="price-big">{product.priceWhole}</p>
                <p className="price-low">{product.priceFraction} €</p>
              </div>
              <img className="prime-icon" src={PrimeIcon} alt="prime icon" />
              <p className="iva">
                Por favor verifique o preço final do produto durante o processo
                de compra, pois a taxa de IVA que corresponde à sua morada de
                entrega apenas será calculada nesse momento.
              </p>
            </div>
          </div>
          <div className="div-addToCart"></div>
        </div>
      </Container>
    </div>
  );
}
export default ProductPage;
