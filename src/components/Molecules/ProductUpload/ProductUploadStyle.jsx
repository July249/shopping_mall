import styled from "styled-components";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";
import { ImgEl } from "../../Atoms/_Img/ImgEl";

export const ProductUploadBtn = styled(ButtonEl)`
  height: 5.4rem;
  display: flex;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 5px;
  padding: 0 2rem;
  font-size: 1.8rem;
  line-height: 2.3rem;
  color: #fff;
`;

export const ProductUploadImg = styled(ImgEl)`
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 0.8rem;
`;
