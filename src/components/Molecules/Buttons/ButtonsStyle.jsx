import styled, { css } from "styled-components";
import { ButtonEl } from "../../Atoms/_Button/ButtonEl";

export const LargeBtn = styled(ButtonEl)`
  min-width: 22rem;
  height: 6.8rem;
  padding: 1.9rem 8.8rem;
  background: ${(props) => {
    if (props.bgClr === "main") {
      return "var(--main-color)";
    } else if (props.bgClr === "disabled") {
      return "#c4c4c4";
    }
  }};
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #fff;
`;

export const MediumBtn = styled(ButtonEl)`
  min-width: 48rem;
  height: 6rem;
  padding: 1.9rem 22.3rem;
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
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #fff;
`;

export const SmallBtn = styled(ButtonEl)`
  min-width: 8rem;
  height: 4rem;
  padding: 1rem 2.5rem;
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
