import styled from "styled-components";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const CheckBoxIconHollowCircle = styled(ButtonEl)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--main-color);
  background: none;
  cursor: pointer;
`;

export const CheckBoxIconFilledCircle = styled(SpanEl)`
  display: ${(props) => {
    if (props.checked === "checked") {
      return "block";
    } else {
      return "none";
    }
  }};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--main-color);
`;
