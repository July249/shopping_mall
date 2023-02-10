import styled from "styled-components";
import { LiEl } from "../../Atoms/_Li/LiEl";
import { SectionEl } from "../../Atoms/_Section/SectionEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";
import { StrongEl } from "../../Atoms/_Strong/StrongEl";
import Price from "../../Molecules/Price/Price";
import ProductImg from "../../Molecules/ProductImg/ProductImg";

export const ProductInfoList = styled(LiEl)`
  position: relative;
  width: 128rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0.8rem 7.7rem 1.8rem 0.8rem;
  border: 2px solid var(--sub-border-color);
  border-radius: 10px;
`;
export const ProductInfoBox = styled(SectionEl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 11.1rem;
`;
export const ProductInfoImg = styled(ProductImg)`
  border-radius: 10px;
`;
export const ProductTextBox = styled(SectionEl)`
  display: flex;
  flex-direction: column;
  padding-left: 3.6rem;
  & :nth-child(1) {
    margin-top: 1.2rem;
  }
  & :nth-child(2) {
    margin-top: 0.6rem;
    margin-bottom: 1rem;
  }
`;
export const ProductCompany = styled(SpanEl)`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--sub-txt-color);
`;
export const ProductTitle = styled(StrongEl)`
  min-width: 44.2rem;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: var(--txt-color);
`;
export const ProductPurchaseQuantity = styled(SpanEl)`
  margin-bottom: 1.8rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--sub-txt-color);
`;
export const ProductDiscountPrice = styled(Price)``;
export const ProductDeliveryOption = styled(SpanEl)`
  display: inline-block;
  margin: 4rem 15.9rem 4.1rem 19.3rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--sub-txt-color);
`;
export const ProductSalePrice = styled(Price)``;
