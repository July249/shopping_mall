import styled from "styled-components";
import { DivEl } from "../../Atoms/_Div/DivEl";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";

export const DropDownBox = styled(DivEl)`
  width: 13rem;
  height: 11.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url();
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
`;

export const DropDownMenuBtn = styled(ButtonEl)`
  width: 11rem;
  box-sizing: border-box;
  background: none;
  border: 1px solid #767676;
  border-radius: 5px;
  margin-bottom: 0.8rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
`;
