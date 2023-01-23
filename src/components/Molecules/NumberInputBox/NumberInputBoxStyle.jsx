import styled from "styled-components";
import { InputEl } from "../../Atoms/_Input/InputEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const NumberInputArea = styled(InputEl)`
  min-width: 22rem;
  height: 5.4rem;
  padding: 1.7rem 1.6rem 1.7rem 1.6rem;
  outline: none;
  overflow: hidden;
  border: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 5px;
  background: none;
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--txt-color);
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const NumberUnit = styled(SpanEl)`
  display: inline-block;
  position: absolute;
  left: 17.3rem;
  padding: 1.7rem 2rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  background: #c4c4c4;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
`;
