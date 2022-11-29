import React from 'react';
import styled from 'styled-components';

const ContainerProductPrice = styled.div`
  display: flex;
  align-items: center;
`;

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
    <ContainerProductPrice>
      <StyledPriceMedium>
        {price}
        <StyledPriceUnit>원</StyledPriceUnit>
      </StyledPriceMedium>
    </ContainerProductPrice>
  );
}
