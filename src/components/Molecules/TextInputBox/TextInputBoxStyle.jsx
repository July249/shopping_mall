import styled, { css } from "styled-components";
import { InputEl } from "../../Atoms/_Input/InputEl";
import { LabelEl } from "../../Atoms/_Label/LabelEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const InputLabel = styled(LabelEl)`
  ${(props) => {
    if (props.htmlFor.includes("login")) {
      return css`
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
    } else {
      return css`
        display: block;
        margin-bottom: 1rem;
        font-size: 1.6rem;
        line-height: 2rem;
        color: var(--sub-txt-color);
      `;
    }
  }}
`;

export const InputBox = styled(InputEl)`
  min-width: 48rem;
  height: ${(props) => {
    if (props.id.includes("login")) {
      return "6rem";
    } else {
      return "5.4rem";
    }
  }};
  padding: ${(props) => {
    if (props.id.includes("login")) {
      return "2rem 0";
    } else {
      return "1.7rem 0 1.7rem 1.6rem";
    }
  }};
  outline: none;
  border: ${(props) => {
    if (props.id.includes("login")) {
      return "none";
    } else {
      return "1px solid #c4c4c4";
    }
  }};
  border-bottom: ${(props) => {
    if (props.id.includes("login")) {
      return "1px solid #c4c4c4";
    } else {
      return "1px solid #c4c4c4";
    }
  }};
  background: none;
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--txt-color);
  ::placeholder {
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--sub-txt-color);
  }
`;

export const TextLimitCounter = styled(SpanEl)`
  display: ${(props) => {
    if (props.id.includes("productName")) {
      return "inline";
    } else {
      return "none";
    }
  }};
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #c4c4c4;
`;
