import React from 'react';
import styled from 'styled-components';

const StyledProductName = styled.strong`
  font-size: 18px;
  line-height: 22px;
  width: 338px;
  margin: 20px 0 10px;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function ProductName({ productName }) {
  return <StyledProductName>{productName}</StyledProductName>;
}
