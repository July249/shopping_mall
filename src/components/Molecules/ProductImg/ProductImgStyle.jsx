import styled, { css } from "styled-components";
import { ImgEl } from "../../Atoms/_Img/ImgEl";

export const ProductImgStyle = styled(ImgEl)`
  ${(props) => {
    switch (props.size) {
      case "xlr":
        return css`
          width: 60rem;
          height: 60rem;
        `;
      case "lr":
        return css`
          width: 38rem;
          height: 38rem;
        `;
      case "md":
        return css`
          width: 16rem;
          height: 16rem;
        `;
      case "sm":
        return css`
          width: 10.4rem;
          height: 10.4rem;
        `;
      case "xs":
        return css`
          width: 7rem;
          height: 7rem;
        `;
      default:
        return css`
          width: 100%;
          height: 100%;
        `;
    }
  }}
`;
