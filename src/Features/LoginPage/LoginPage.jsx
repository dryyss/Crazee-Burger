import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import styled, { ThemeProvider } from "styled-components";
import Logo from "../../Components/Logo/Logo";
import { theme } from "../../theme";

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::before {
    content: "avant";
    background: url("/assets/burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginPageStyled>
        <Logo />
        <LoginForm />
      </LoginPageStyled>
    </ThemeProvider>
  );
};

export default LoginPage;
