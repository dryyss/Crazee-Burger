import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  // transform: scale(2.5);
`;

const H1Styled = styled.h1`
  display: inline;
  text-align: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.P4};
  line-height: 1em;
  font-weight: ${theme.weights.bold};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: "Amatic Sc", cursive;
`;
const ImgStyled = styled.img`
  object-fit: contain;
  object-position: center;
  height: 200px;
  width: 80px;
  margin: 0 5px;
`;

const Logo = () => {
  return (
    <LogoStyled>
      <H1Styled>Crazee</H1Styled>
      <ImgStyled src="./assets/logo-orange.png" alt="logo" />
      <H1Styled>Burger</H1Styled>
    </LogoStyled>
  );
};

export default Logo;
