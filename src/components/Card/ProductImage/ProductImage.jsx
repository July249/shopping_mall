import React from 'react';
import styled from 'styled-components';

const StyledProductImg = styled.img`
  position: relative;
  width: 380px;
  height: 380px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
`;

export default function ProductImage({ thumbnailImg, productName }) {
  const url = 'https://test.api.weniv.co.kr/' + thumbnailImg;
  return <StyledProductImg src={url} alt={productName} />;
}
