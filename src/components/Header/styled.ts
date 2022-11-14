import styled from "styled-components";

import backgroundImage from "../../assets/Cover.svg";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 296px;

  background-image: url(${backgroundImage});
  background-size: cover;
`;
