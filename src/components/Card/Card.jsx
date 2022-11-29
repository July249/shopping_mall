import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductImage from './ProductImage/ProductImage';
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';
import heartOn from '../../assets/images/icon-heart-on.svg';
import heartOff from '../../assets/images/icon-heart.svg';

const StyledProductItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const StyledLikeBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 40px;
  width: 22px;
  height: 22px;
  border: none;
  background: url(${heartOff}) no-repeat center / contain;

  &.on {
    background: url(${heartOn}) no-repeat center / contain;
  }
`;

export default function Card({ id, productName, price, thumbnailImg }) {
  //https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
  // console.log(thumbnailImg)
  const likeBtn = useRef();

  function handleLikeBtn(e) {
    console.log(e);
    console.log(e.currentTarget.classList);
    e.currentTarget.classList.toggle('on');
  }

  return (
    <StyledProductItem>
      <Link to={`/${id}`}>
        <ProductImage {...{ thumbnailImg, productName }} />
      </Link>

      <ProductName {...{ productName }} />
      <StyledLikeBtn ref={likeBtn} onClick={handleLikeBtn}></StyledLikeBtn>

      <ProductPrice {...{ price }} />
    </StyledProductItem>
  );
}
