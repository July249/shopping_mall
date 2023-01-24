import styled from "styled-components";
import { NavEl } from "../../Atoms/_Nav/NavEl";
import { SectionEl } from "../../Atoms/_Section/SectionEl";
import { UlEl } from "../../Atoms/_Ul/UlEl";
import { LiEl } from "../../Atoms/_Li/LiEl";

export const TopBarContainer = styled(NavEl)`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 2rem 16.66%;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const TopBarSection = styled(SectionEl)`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  > img {
    margin-right: 3rem;
  }
`;

export const TopBarMenuUl = styled(UlEl)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TopBarMenuLi = styled(LiEl)`
  position: relative;
  flex-shrink: 0;
  margin-right: 2.6rem;
  :last-child {
    margin-right: 0;
  }
`;
