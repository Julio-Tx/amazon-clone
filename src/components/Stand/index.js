import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Stand({ title, imgSrc, linkTitle }) {
  return (
    <Container>
      <h3>{title}</h3>
      <img src={imgSrc} alt="solar energy" />
      <a href="/#">{linkTitle}</a>
    </Container>
  );
}

Stand.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};
