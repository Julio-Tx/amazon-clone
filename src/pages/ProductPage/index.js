import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ReactImageMagnify from 'react-image-magnify';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import PrimeIcon from '../../images/prime-icon.png';
import { ProductList } from '../../productData';
import { AmazonFashion, Container } from './styled';
import { useStateValue } from '../../StateProvider';

function ProductPage() {
  const { id } = useParams();
  const product = ProductList.find((x) => x.id === id);
  const [smallImage, setSmallImage] = useState(product.imgSmall[0]);
  const [largeImage, setLargeImage] = useState(product.imgLarge[0]);

  function setImage0() {
    setSmallImage(product.imgSmall[0]);
    setLargeImage(product.imgLarge[0]);
  }
  function setImage1() {
    setSmallImage(product.imgSmall[1]);
    setLargeImage(product.imgLarge[1]);
  }
  function setImage2() {
    setSmallImage(product.imgSmall[2]);
    setLargeImage(product.imgLarge[2]);
  }

  const [state, dispatch] = useStateValue();
  console.log(state);

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        image: product.imgSrc,
        price: `${product.priceWhole}.${product.priceFraction}`,
      },
    });
  };

  // get date of delivering
  const today = new Date();
  const afterTomorrow = new Date(today);
  afterTomorrow.setDate(afterTomorrow.getDate() + 2);
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const date = afterTomorrow.toLocaleDateString('pt-PT', options);

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
          <div className="mini-images">
            <img
              className={smallImage === product.imgSmall[0] && 'img-selected'}
              onMouseEnter={setImage0}
              src={product.imgSmall[0]}
              alt="mini"
            />
            <img
              className={smallImage === product.imgSmall[1] && 'img-selected'}
              onMouseEnter={setImage1}
              src={product.imgSmall[1]}
              alt="mini"
            />
            <img
              className={smallImage === product.imgSmall[2] && 'img-selected'}
              onMouseEnter={setImage2}
              src={product.imgSmall[2]}
              alt="mini"
            />
          </div>
          <div className="div-left">
            <div className="image-zoom">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    src: smallImage,
                    width: 590,
                    height: 570,
                  },
                  largeImage: {
                    src: largeImage,
                    width: 1500,
                    height: 1433,
                  },
                  enlargedImageContainerDimensions: {
                    width: '140%',
                    height: '105%',
                  },
                }}
              />
            </div>
            <p className="hint">Passe o rato por cima da imagem para ampliar</p>
          </div>

          <div className="div-middle">
            <div className="div-middle-top">
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
            <div className="div-middle-center">
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
            <div className="div-middle-bottom">
              <div className="specs-left">
                <p>Marca</p>
                <p>Cor</p>
                <p>Peso do produto</p>
                <p>Nome do modelo</p>
              </div>
              <div className="specs-right">
                <p>{product.brand}</p>
                <p>{product.color}</p>
                <p>{product.weight} Kilogramos</p>
                <p>{product.nameOfProduct}</p>
              </div>
            </div>
          </div>

          <div className="div-right">
            <div className="right-content">
              <div className="price">
                <p className="price-big">{product.priceWhole}</p>
                <p className="price-low">{product.priceFraction} €</p>
              </div>
              <img className="prime-icon" src={PrimeIcon} alt="prime icon" />
              <p>
                e <a href="/#">Devoluções GRÁTIS</a>
              </p>
              <p>
                Entrega GRÁTIS <span>{date}</span>.
              </p>
              <a href="/#" className="location">
                <LocationOnOutlinedIcon fontSize="25" /> Enviar a Portugal
              </a>
              <p className="stock">Em stock.</p>

              <form>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="cars">Quantidade:</label>
                <select name="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button type="button" onClick={addToCart}>
                  Adicionar ao carrinho
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default ProductPage;
