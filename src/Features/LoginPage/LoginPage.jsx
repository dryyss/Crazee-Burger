import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import styled, { ThemeProvider } from "styled-components";
import Logo from "../../Components/Logo/Logo";
import { theme } from "../../theme";

const LoginPageStyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
