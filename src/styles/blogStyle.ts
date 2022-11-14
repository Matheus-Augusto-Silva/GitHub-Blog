import styled from "styled-components";

export const BlogStyleContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: max-height;
  padding-bottom: 3rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.baseBackground};
`;

export const BlogContentContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`;
