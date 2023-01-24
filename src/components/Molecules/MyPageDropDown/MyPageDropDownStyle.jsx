import styled from "styled-components";
import { DivEl } from "../../Atoms/_Div/DivEl";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";

export const DropDownBox = styled(DivEl)`
  width: 13rem;
  height: 11.8rem;
  position: absolute;
  top: 64px;
  left: -34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 1rem;
  background: url("https://raw.githubusercontent.com/July249/shopping_mall/develop/src/assets/icons/mypage_dropdown.png");
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
`;

export const DropDownMenuBtn = styled(ButtonEl)`
  width: 11rem;
  box-sizing: border-box;
  background: none;
  margin-bottom: 0.8rem;
  border: 1px solid #fff;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  color: var(--sub-txt-color);
  :last-child {
    margin-bottom: 0;
  }
  :hover {
    border: 1px solid #767676;
    border-radius: 5px;
    color: var(--txt-color);
  }
`;
