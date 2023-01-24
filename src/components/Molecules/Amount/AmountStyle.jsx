import styled from "styled-components";
import { DivEl } from "../../Atoms/_Div/DivEl";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";
import { ImgEl } from "../../Atoms/_Img/ImgEl";

export const AmountBox = styled(DivEl)`
  box-sizing: border-box;
  width: 150px;
  height: 50px;
  overflow: hidden;
  border: 1px solid var(--button-border);
  border-radius: 5px;
`;

export const PlusBtn = styled(ButtonEl)`
  width: 20px;
  box-sizing: content-box;
  padding: 1.5rem 1.4rem;
  position: relative;
  top: -1px;
  background: ${(props) => {
    if (!props.soldOut) {
      return "none";
    } else {
      return "#e0e0e0";
    }
  }};
`;

export const MinusBtn = styled(ButtonEl)`
  width: 20px;
  box-sizing: content-box;
  position: relative;
  top: -1px;
  padding: 1.5rem 1.4rem;
  background: none;
`;

export const BtnImg = styled(ImgEl)`
  width: 20px;
  height: 20px;
  vertical-align: bottom;
`;

export const AmountCounter = styled(SpanEl)`
  display: inline-block;
  width: 52px;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.3rem;
  padding: 1.3rem 0;
  border-left: 1px solid var(--button-border);
  border-right: 1px solid var(--button-border);
`;
