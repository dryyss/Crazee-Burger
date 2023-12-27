import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import { BsPersonCircle } from "react-icons/bs";

const FormDivStyled = styled.div`
  text-align: center;
  justify-content: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic Sc", cursive;
  hr {
    border: 1.5px solid ${theme.colors.red};
    margin-bottom: 40px;
  }
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }
  h2 {
    color: ${theme.colors.greyLight};
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }
`;
const InputCountainerStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px;
  .icons {
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.greySemiDark};
    margin-right: ${theme.spacing.xs};
  }
  input {
    width: 100%;
    border: none;
    font-size: ${theme.fonts.p0};
    color: ${theme.colors.dark};
  }
  &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyLight};
  }
`;
const ButtonFormStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  border-radius: 5px;
  padding: 18px 24px;
  font-size: ${theme.fonts.P0};
  margin: 18px;
  font-weight: ${theme.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  }
  &:disabled {
    // opacity: 0.6;
    // cursor: not-allowed;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Handle the form submission logic, e.g., validation, API call, etc.
    setUsername(""); // Reset the username if needed
  };

  return (
    <FormDivStyled>
      {" "}
      <h1>Bienvenue chez Dryyss Crazee Burger</h1>
      <hr />
      <h2>Connectez vous!</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <InputCountainerStyled>
          {" "}
          <BsPersonCircle className="icons" />
          <input
            required
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={handleChange}
          />
        </InputCountainerStyled>
        <Link to={`/order/${username}`}>
          <ButtonFormStyled username={username}>
            <span> Accéder à mon espace</span>{" "}
          </ButtonFormStyled>
        </Link>
      </form>
    </FormDivStyled>
  );
};

export default LoginForm;
