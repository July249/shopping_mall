import React from 'react';
import styled from 'styled-components';

export default function ProductImage({ thumbnailImg, productName }) {
  const ImgProduct = styled.img`
    position: relative;
    width: 380px;
    height: 380px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
  `;

  const url = 'https://test.api.weniv.co.kr/' + thumbnailImg;
  return <ImgProduct src={url} alt={productName} />;
}
