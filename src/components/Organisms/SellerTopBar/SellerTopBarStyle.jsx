import styled from "styled-components";
import { HeadingOne } from "../../Atoms/_HeadingOne/HeadingOneEl";
import { SpanEl } from "../../Atoms/_Span/SpanEl";

export const SellerTopBarHeadingOne = styled(HeadingOne)`
  display: flex;
  align-items: center;
  margin-left: 10rem;
`;

export const SellerTopBarSpan = styled(SpanEl)`
  display: inline-block;
  margin-left: 1.6rem;
  padding: 2.6rem 0;
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.8rem;
`;
