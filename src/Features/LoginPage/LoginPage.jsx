import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>Bienvenue chez Dryyss Cheezy Burger</h1>
      <h2>Connectez vous!</h2>
      <form action="submit">
        <input type="text" placeholder="Entrer votre prénom" />
        <button>Connexion</button>
      </form>
    </div>
  );
};

export default LoginPage;
