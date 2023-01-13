import styled from "styled-components";
import { InputEl } from "../../Atoms/_Input/InputEl";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";
import { ImgEl } from "../../Atoms/_Img/ImgEl";
import { DivEl } from "../../Atoms/_Div/DivEl";

export const SearchBox = styled(DivEl)`
  display: flex;
  position: relative;
  flex-basis: 100%;
`;

export const SearchInput = styled(InputEl)`
  box-sizing: border-box;
  display: flex;
  width: 40rem;
  padding: 13px 22px;
  border: 2px solid var(--main-color);
  border-radius: 50px;
  font-size: 1.6rem;
  line-height: 2rem;
  outline: var(--main-color);
  color: var(--sub-txt-color);
`;

export const SearchBtn = styled(ButtonEl)`
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  top: 0.9rem;
  right: 2.2rem;
  background: none;
`;

export const SearchImg = styled(ImgEl)`
  width: 100%;
  height: 100%;
`;
