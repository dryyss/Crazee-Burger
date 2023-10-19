import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
  };

  return (
    <form action="submit" onClick={handleSubmit}>
      <input
        type="text"
        placeholder="Entrer votre prénom"
        value={username}
        onChange={handleChange}
        required
      />
      <button username={username}>
        <Link to={`/order/${username}`}>Connexion</Link>
      </button>{" "}
    </form>
  );
};

export default LoginForm;
