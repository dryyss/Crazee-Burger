import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button``;
const FormDivStyled = styled.div`
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <h1>Bienvenue chez Dryyss Cheezy Burger</h1>
      <h2>Connectez vous!</h2>
      <br />
      <form action="submit" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={handleChange}
        />
        <Link to={`/order/${username}`}>
          <Button disabled={username === ""} username={username}>
            Accéder à mon espace
          </Button>
        </Link>
      </form>
    </FormDivStyled>
  );
};

export default LoginForm;
