import styled from "styled-components";
import { ImgEl } from "../../Atoms/_Img/ImgEl";

export const LogoImg = styled(ImgEl)`
  width: ${(props) => {
    if (props.size === "xlr") {
      return "24.8rem";
    } else if (props.size === "lr") {
      return "12.4rem";
    } else if (props.size === "md") {
      return "8rem";
    }
  }};
  height: ${(props) => {
    if (props.size === "xlr") {
      return "7.4rem";
    } else if (props.size === "lr") {
      return "3.8rem";
    } else if (props.size === "md") {
      return "2.4rem";
    }
  }};
`;
