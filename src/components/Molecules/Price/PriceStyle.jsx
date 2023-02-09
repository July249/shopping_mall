import styled from "styled-components";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const PriceText = styled(SpanEl)`
  display: block;
  font-weight: 700;
  font-size: ${(props) => {
    if (props.size === "lr") {
      return "3.6rem";
    } else if (props.size === "md") {
      return "2.4rem";
    } else if (props.size === "sm") {
      return "1.8rem";
    } else if (props.size === "xs") {
      return "1.6rem";
    }
  }};
  line-height: ${(props) => {
    if (props.size === "lr") {
      return "4.5rem";
    } else if (props.size === "md") {
      return "3.0rem";
    } else if (props.size === "sm") {
      return "2.3rem";
    } else if (props.size === "xs") {
      return "2rem";
    }
  }};
  color: ${(props) => {
    if (props.isEmphasized) {
      return "var(--emphasized-txt-color)";
    } else {
      return "var(--txt-color)";
    }
  }};
  ::after {
    content: "원";
    font-weight: 400;
    font-size: ${(props) => {
      if (props.size === "lr") {
        return "1.8rem";
      } else if (props.size === "md") {
        return "1.6rem";
      } else if (props.size === "sm") {
        return "1.4rem";
      } else if (props.size === "xs") {
        return "1.6rem";
      }
    }};
    line-height: ${(props) => {
      if (props.size === "lr") {
        return "2.3rem";
      } else if (props.size === "md") {
        return "2rem";
      } else if (props.size === "sm") {
        return "1.8rem";
      } else if (props.size === "xs") {
        return "2rem";
      }
    }};
  }
`;
