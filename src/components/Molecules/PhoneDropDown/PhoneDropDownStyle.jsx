import styled from "styled-components";
import { LiEl } from "../../Atoms/_Li/LiEl";
import { UlEl } from "../../Atoms/_Ul/UlEl";

export const PhoneDropDownBox = styled(UlEl)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.4rem;
  height: 15rem;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 18px;
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: #c4c4c4;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #f2f2f2;
  }
`;

export const PhoneDropDownList = styled(LiEl)`
  width: inherit;
  height: 4rem;
  text-align: center;
  padding: 1rem 0;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--txt-color);
`;
