import saguaroSmall from './images/saguaro1.jpg';
import saguaroLarge from './images/saguaro2.jpg';
import phillipsSmall from './images/phillips1.jpg';
import phillipsLarge from './images/phillips2.jpg';

export const ProductList = [
  {
    id: '1',
    name: 'saguaro',
    title: 'Ofertas Flash',
    description:
      'SAGUARO Barefoot Sapatilhas de trail running para homem, mulher, minimalistas, sapatilhas de desportos aquáticos, sapatos de água para praia, praia, surf, ioga',
    imgSrc:
      'https://m.media-amazon.com/images/I/41zll3jUC4L._SY500__AC_SY230_.jpg',
    info: 'Poupe em SAGUARO e mais',
    priceWhole: '36',
    priceFraction: '99',
    linkTitle: 'Ver mais',
    imgSmall: saguaroSmall,
    imgLarge: saguaroLarge,
    rating: 10.101,
  },
  {
    id: '2',
    name: 'phillips',
    title: 'Oferta top',
    description:
      'Philips OneBlade Pro Cara Corpo QP6650/30 Aparador de barba recarregável com pente guia para o corpo, pente de precisão de 14 comprimentos, base de carregamento e capa de viagem, cor cromada',
    info: 'Poupe em Phillips e mais',
    priceWhole: '93',
    priceFraction: '95',
    imgSrc:
      'https://m.media-amazon.com/images/I/71szVWxXw-L._AC_UL480_FMwebp_QL65_.jpg',
    linkTitle: 'Descubra todas as  ofertas',
    imgSmall: phillipsSmall,
    imgLarge: phillipsLarge,
    rating: 1.914,
  },
];
