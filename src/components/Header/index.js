import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import AzamonLogo from '../../images/azamon-logo.png';
import { Container } from './styled';

export default function Header() {
  return (
    <Container>
      <div className="logo">
        <img src={AzamonLogo} alt="logo" />
      </div>
      <div className="search-div">
        <input type="text" className="search-input" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="nav">
        <div className="nav-item">
          <span className="nav-item01">Hello Guest</span>
          <span className="nav-item02">Sign In</span>
        </div>
        <div className="nav-item">
          <span className="nav-item01">Your</span>
          <span className="nav-item02">Shop</span>
        </div>
        <div className="nav-item-cart">
          <ShoppingCartIcon />
          <span className="nav-item02 cart-count">0</span>
        </div>
      </div>
    </Container>
  );
}
