import styled, { css } from "styled-components";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";

export const CustomSizeButton = styled(ButtonEl)`
  min-width: ${(props) => {
    if (props.size === "lr") {
      return "22rem";
    } else if (props.size === "md") {
      return "48rem";
    } else if (props.size === "sm") {
      return "8rem";
    }
  }};
  height: ${(props) => {
    if (props.size === "lr") {
      return "6.8rem";
    } else if (props.size === "md") {
      return "6rem";
    } else if (props.size === "sm") {
      return "4rem";
    }
  }};
  padding: ${(props) => {
    if (props.size === "lr") {
      return "1.9rem 8.8rem";
    } else if (props.size === "md") {
      return "1.9rem 22.3rem";
    } else if (props.size === "sm") {
      return "1rem 2.5rem";
    }
  }};
  background: ${(props) => {
    if (props.bgClr === "main") {
      return "var(--main-color)";
    } else if (props.bgClr === "disabled") {
      return "#c4c4c4";
    } else if (props.bgClr === "dark") {
      return "#767676";
    } else if (props.bgClr === "white") {
      return "#fff";
    }
  }};
  border: ${(props) => {
    if (props.bgClr === "white") {
      return "1px solid var(--border-color)";
    } else {
      return "none";
    }
  }};
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: ${(props) => {
    if (props.size === "lr" || props.size === "md") {
      return "700";
    } else if (props.size === "sm") {
      return "500";
    }
  }};
  font-size: ${(props) => {
    if (props.size === "lr") {
      return "2.4rem";
    } else if (props.size === "md") {
      return "1.8rem";
    } else if (props.size === "sm") {
      return "1.6rem";
    }
  }};
  line-height: ${(props) => {
    if (props.size === "lr") {
      return "3rem";
    } else if (props.size === "md") {
      return "2.2rem";
    } else if (props.size === "sm") {
      return "2rem";
    }
  }};
  ${(props) => {
    if (props.size === "lr" || props.size === "md") {
      return css`
        color: #fff;
      `;
    } else if (props.size === "sm" || props.bgClr === "main") {
      return css`
        color: #fff;
      `;
    } else if (props.size === "sm" || props.bgClr === "white") {
      return css`
        color: #767676;
      `;
    }
  }}
  ${(props) => {
    if (props.size === "sm" || props.bgClr === "white") {
      return css`
        :hover {
          color: #000;
          border: #767676;
        }
      `;
    } else {
      return css`
        :hover {
          color: #fff;
        }
      `;
    }
  }}
`;

export const MSIconBtn = styled(ButtonEl)`
  min-width: 16.8rem;
  height: 5.4rem;
  padding: 1.1rem 2rem;
  background: var(--main-color);
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #fff;
  > img {
    margin-right: 0.8rem;
  }
`;

export const MSBtn = styled(ButtonEl)`
  min-width: 16.6rem;
  height: 5.4rem;
  padding: 1.7rem 6.8rem;
  background: ${(props) => {
    if (props.bgClr === "main") {
      return "var(--main-color)";
    } else if (props.bgClr === "white") {
      return "#fff";
    }
  }};
  border: ${(props) => {
    if (props.bgClr === "white") {
      return "1px solid var(--border-color)";
    } else {
      return "none";
    }
  }};
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${(props) => {
    if (props.bgClr === "main") {
      return "#fff";
    } else if (props.bgClr === "white") {
      return "#767676";
    }
  }};
  :hover {
    color: ${(props) => {
      if (props.bgClr === "white") {
        return "#000";
      } else {
        return "#fff";
      }
    }};
    border: ${(props) => {
      if (props.bgClr === "white") {
        return "#767676";
      }
    }};
  }
`;

export const TabBtn = styled(ButtonEl)`
  min-width: 32rem;
  height: 6rem;
  padding: 1.9rem 14.3rem 1.8rem;
  background: #fff;
  border-bottom: 6px solid
    ${(props) => {
      if (props.active) {
        return "var(--main-color)";
      } else {
        return "#e0e0e0";
      }
    }};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.3rem;
  color: ${(props) => {
    if (props.active) {
      return "var(--main-color)";
    } else {
      return "#767676";
    }
  }};
`;

export const TabMenuBtn = styled(ButtonEl)`
  min-width: 25rem;
  height: 5rem;
  padding: 1.5rem 2rem;
  background: ${(props) => {
    if (props.active) {
      return "var(--main-color)";
    } else {
      return "#fff";
    }
  }};
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${(props) => {
    if (props.active) {
      return "#fff";
    } else {
      return "var(--txt-color)";
    }
  }};
  > span {
    margin-left: 7.7rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #eb5757;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #fff;
  }
  :hover {
    background: #effff3;
  }
`;
