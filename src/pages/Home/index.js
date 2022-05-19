import React from 'react';

import { Container, Row, Rows, LogBox } from './styled';
import ImageSlider from '../../components/ImageSlider';
import Product from '../../components/Product';
import Stand from '../../components/Stand';

export default function Home() {
  return (
    <Container>
      <ImageSlider />
      <Rows>
        <Row>
          <Product
            title="Ofertas Flash"
            imgSrc="https://m.media-amazon.com/images/I/41zll3jUC4L._SY500__AC_SY230_.jpg"
            info="Poupe em SAGUARO e mais"
            priceWhole="27"
            priceFraction="99"
            linkTitle="Ver mais"
          />
          <Product
            title="Oferta top"
            info="Poupe em Phillips e mais"
            imgSrc="https://m.media-amazon.com/images/I/91IHLwWcfGL._AC_SY230_.png"
            linkTitle="Descubra todas as  ofertas"
          />
          <Stand
            title="Descubra o Amazon Outlet"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/ES_Outlet_OD_DSC_379x304_Dec_2020._SY304_CB413249589_.jpg"
            linkTitle="Ver mais"
          />
          <LogBox>
            <h3>Inicie sessão para obter a melhor experiência</h3>
            <button type="button">Inicie sessão com segurança</button>
          </LogBox>
        </Row>
        <Row>
          <Stand
            title="O Amazon Prime está aqui"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/Tagus/GW/Prime_Cards/Desktop/ephesus_gw_dt_dashboard_379x304_twitch._SY304_CB669915101_.jpg"
            linkTitle="Descubra mais"
          />
          <Stand
            title="A nossa seleção de Beleza"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/x-Site/2021/February/FujiDashBeauty1x._SY304_CB659988640_.jpg"
            linkTitle="Ver mais"
          />
          <Stand
            title="Informática e acessórios"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/x-Site/2021/February/FujiDashPC1x._SY304_CB659988641_.jpg"
            linkTitle="Ver mais"
          />
          <Stand
            title="As últimas tendências"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/Tagus/Categories/Softlines_379x304._SY304_CB411420869_.jpg"
            linkTitle="Descubra mais"
          />
        </Row>
      </Rows>
    </Container>
  );
}
