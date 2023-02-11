import styled from "styled-components";
import { DivEl } from "../../Atoms/_Div/DivEl";
import { LiEl } from "../../Atoms/_Li/LiEl";
import { SectionEl } from "../../Atoms/_Section/SectionEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";
import { StrongEl } from "../../Atoms/_Strong/StrongEl";
import Price from "../../Molecules/Price/Price";
import ProductImg from "../../Molecules/ProductImg/ProductImg";

export const ProductContentListForSeller = styled(LiEl)`
  width: 144rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1.6rem 3rem 1.7rem;
  border-bottom: 1px solid var(--sub-border-color);
`;
export const ProductInfoForSeller = styled(SectionEl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 26.7rem;
`;
export const ProductInfoImgForSeller = styled(ProductImg)`
  border-radius: 100px;
`;
export const ProductTextBoxForSeller = styled(SectionEl)`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  & :nth-child(1) {
    margin-top: 1rem;
  }
  & :nth-child(2) {
    margin-top: 1rem;
    margin-bottom: 0.8rem;
  }
`;
export const ProductTitleForSeller = styled(StrongEl)`
  min-width: 50rem;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: var(--txt-color);
`;
export const ProductStockQuantity = styled(SpanEl)`
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--sub-txt-color);
`;
export const ProductSalePriceForSeller = styled(Price)``;
export const ProductEditButtonContainer = styled(DivEl)`
  margin-left: 21.7rem;
  margin-right: 6rem;
`;
export const ProductDeleteButtonContainer = styled(DivEl)``;
