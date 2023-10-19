import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Features/ErrorPage/ErrorPage";
import LoginPage from "./Features/LoginPage/LoginPage";
import OrderPage from "./Features/OrderPage/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        // element: <Contact />,
      },
    ],
  },
  {
    path: "order/:username",
    element: <OrderPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>,
);
