import React from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../../assets/images/icon-shopping-cart-white.svg';
import styled from 'styled-components';

const StyleCartLink = styled(Link)`
  background: var(--main-color) url(${cartImg}) no-repeat center / 40px 40px;
  position: sticky;
  top: 60px;
  right: 60px;
  width: 80px;
  height: 80px;
  background-color: var(--main-color);
  border-radius: 50%;
`;

export default function Cart() {
  return <StyleCartLink to="/payment"></StyleCartLink>;
}
