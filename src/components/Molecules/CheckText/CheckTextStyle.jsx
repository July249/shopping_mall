import styled from "styled-components";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";
import { ImgEl } from "../../Atoms/_Img/ImgEl";
import { PEl } from "../../Atoms/_P/PEl";

export const CheckBoxButton = styled(ButtonEl)`
  margin-right: 1rem;
  background: none;
`;

export const CheckBoxImg = styled(ImgEl)`
  width: 1.6rem;
  height: 1.6rem;
`;

export const CheckInfoText = styled(PEl)`
  display: inline-block;
  font-size: 1.6rem;
  line-height: 2rem;
`;
