import styled from "styled-components";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const PriceText = styled(SpanEl)`
  font-weight: 700;
  font-size: ${(props) => {
    if (props.size === "lr") {
      return "3.6rem";
    } else if (props.size === "md") {
      return "2.4rem";
    } else if (props.size === "sm") {
      return "1.8rem";
    }
  }};
  line-height: ${(props) => {
    if (props.size === "lr") {
      return "4.5rem";
    } else if (props.size === "md") {
      return "3.0rem";
    } else if (props.size === "sm") {
      return "2.3rem";
    }
  }};
  ::after {
    content: "원";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
`;
