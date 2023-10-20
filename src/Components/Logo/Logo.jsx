import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  background: blue;
`;

const Logo = () => {
  return (
    <LogoStyled>
      logo
      <img src="./assets/logo-orange.png" alt="logo" />
    </LogoStyled>
  );
};

export default Logo;
