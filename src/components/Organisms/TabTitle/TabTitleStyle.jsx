import styled from "styled-components";
import { LiEl } from "../../Atoms/_Li/LiEl";
import { PEl } from "../../Atoms/_P/PEl";
import { UlEl } from "../../Atoms/_Ul/UlEl";

export const TabTitleUl = styled(UlEl)`
  width: 128rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background: #f2f2f2;
  margin: 0 auto;
  padding-left: 3rem;
  padding-right: 13.1rem;
`;

export const TabTitleLi = styled(LiEl)`
  display: flex;
  padding: 1.9rem 0;
  :nth-child(1) {
    margin-right: 31.4rem;
  }
  :nth-child(2) {
    margin-right: 37.9rem;
  }
  :nth-child(3) {
    margin-right: 23.8rem;
  }
`;

export const TabTitleParagraph = styled(PEl)`
  flex-shrink: 0;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.3rem;
  color: var(--txt-color);
`;
