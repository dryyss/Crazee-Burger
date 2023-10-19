import React from "react";
import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
  const { username } = useParams();
  return (
    <div>
      Bonjour {username}
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
};

export default OrderPage;
