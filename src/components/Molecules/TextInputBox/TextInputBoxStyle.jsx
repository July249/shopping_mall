import styled, { css } from "styled-components";
import { DivEl } from "../../Atoms/_Div/DivEl";
import { InputEl } from "../../Atoms/_Input/InputEl";
import { LabelEl } from "../../Atoms/_Label/LabelEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const InputBox = styled(DivEl)`
  position: relative;
`;

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

export const InputArea = styled(InputEl)`
  min-width: ${(props) => {
    if (props.id.includes("productName")) {
      return "82.6rem";
    } else {
      return "48rem";
    }
  }};
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
      return "1.7rem 1.6rem 1.7rem 1.6rem";
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
  border-radius: 5px;
  background: none;
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--txt-color);
  ::placeholder {
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--sub-txt-color);
  }
  :focus {
    border: ${(props) => {
      if (props.id.includes("login")) {
        return "none";
      } else {
        return "1px solid var(--main-color)";
      }
    }};
    border-bottom: ${(props) => {
      if (props.id.includes("login")) {
        return "1px solid var(--main-color)";
      } else {
        return "1px solid var(--main-color)";
      }
    }};
  }
`;

export const ValidationText = styled(SpanEl)`
  display: ${(props) => {
    if (props.id.includes("register")) {
      return "block";
    } else {
      return "none";
    }
  }};
  margin-top: 1rem;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${(props) => {
    if (props.validCheck) {
      return "var(--main-color)";
    } else {
      return "var(--warning-color)";
    }
  }};
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
  top: 5rem;
  left: 77.8rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #c4c4c4;
`;
