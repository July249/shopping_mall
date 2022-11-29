import React from 'react';
import styled from 'styled-components';

const ContainerCartAndPayment = styled.div`
  margin: 160px 330px 100px;
`;

const StyledHeadingOne = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
`;

const StyledHeadingTwo = styled.h2`
  font-size: 24px;
  line-height: 30px;
`;

const ContainerCoupon = styled.section`
  margin-top: 60px;
  margin-bottom: 40px;
`;

const ContainerCart = styled.section`
  margin-bottom: 100px;
`;

export default function CartAndPayment() {
  return (
    <ContainerCartAndPayment>
      <StyledHeadingOne>장바구니/결제</StyledHeadingOne>
      <ContainerCoupon>
        <StyledHeadingTwo>쿠폰 사용</StyledHeadingTwo>
      </ContainerCoupon>
      <ContainerCart>
        <StyledHeadingTwo>주문 상품</StyledHeadingTwo>
      </ContainerCart>
    </ContainerCartAndPayment>
  );
}
