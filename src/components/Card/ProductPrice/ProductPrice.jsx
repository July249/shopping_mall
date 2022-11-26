import React from 'react';
import styled from 'styled-components';
// import './productPrice.css';

const StyledPriceMedium = styled.strong`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const StyledPriceUnit = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-left: 2px;
`;

export default function ProductPrice({ price }) {
  return (
    <StyledPriceMedium>
      {price}
      <StyledPriceUnit>원</StyledPriceUnit>
    </StyledPriceMedium>
  );
}
