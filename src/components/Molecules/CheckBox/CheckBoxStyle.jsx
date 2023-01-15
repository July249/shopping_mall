import styled from "styled-components";
import { InputEl } from "../../Atoms/_Input/InputEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const CheckBoxInput = styled(InputEl)``;

export const CheckBoxIcon = styled(SpanEl)`
  position: relative;

  ::before {
    content: "";
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid var(--main-color);
  }

  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--main-color);
  }
`;
