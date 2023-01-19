import styled from "styled-components";
import { DivEl } from "../../Atoms/_Div/DivEl";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";
import { ImgEl } from "../../Atoms/_Img/ImgEl";

export const AmountBox = styled(DivEl)`
  box-sizing: border-box;
  width: 15rem;
  height: 5rem;
  border: 1px solid var(--button-border);
  border-radius: 5px;
`;

export const PlusBtn = styled(ButtonEl)`
  padding: 1.5rem 1.4rem;
  background: none;
`;

export const MinusBtn = styled(ButtonEl)`
  box-sizing: content-box;
  position: relative;
  top: -1px;
  padding: 1.5rem 1.4rem;
  background: none;
`;

export const BtnImg = styled(ImgEl)`
  width: 2rem;
  height: 2rem;
  vertical-align: bottom;
`;

export const AmountCounter = styled(SpanEl)`
  display: inline-block;
  width: 5.2rem;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.3rem;
  padding: 1.3rem 0;
  border-left: 1px solid var(--button-border);
  border-right: 1px solid var(--button-border);
`;
