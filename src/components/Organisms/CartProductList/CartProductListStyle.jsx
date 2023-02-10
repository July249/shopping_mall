import styled from "styled-components";
import { LiEl } from "../../Atoms/_Li/LiEl";
import { SectionEl } from "../../Atoms/_Section/SectionEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";
import { StrongEl } from "../../Atoms/_Strong/StrongEl";
import Price from "../../Molecules/Price/Price";
import ProductImg from "../../Molecules/ProductImg/ProductImg";
import DeleteButton from "../../Molecules/DeleteButton/DeleteButton";

export const CartProductContentList = styled(LiEl)`
  position: relative;
  width: 128rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 2rem 10rem 2rem 3rem;
  border: 2px solid var(--sub-border-color);
  border-radius: 10px;
`;
export const CartProductContentBox = styled(SectionEl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4rem;
`;
export const CartProductImg = styled(ProductImg)`
  border-radius: 10px;
`;
export const CartProductInfoBox = styled(SectionEl)`
  display: flex;
  flex-direction: column;
  padding-left: 3.6rem;
`;
export const CartProductCompany = styled(SpanEl)`
  display: inline-block;
  margin-top: 0.6rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--sub-txt-color);
`;
export const CartProductTitle = styled(StrongEl)`
  min-width: 41.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: var(--txt-color);
`;
export const CartProductPrice = styled(Price)``;
export const CartProductDeliveryOption = styled(SpanEl)`
  display: inline-block;
  margin-top: 4rem;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--sub-txt-color);
`;
export const CartProductPurchaseQuantity = styled(SectionEl)`
  padding-left: 4.8rem;
  padding-right: 15.6rem;
`;
export const CartProductPurchaseBox = styled(SectionEl)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & :first-child {
    margin-top: 3.8rem;
    margin-bottom: 2.6rem;
  }
  & :last-child {
    margin-bottom: 1.4rem;
  }
`;
export const CartProductSalePrice = styled(Price)``;

export const CartProductDeleteBtn = styled(DeleteButton)``;
