import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';


import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LoginContextProvider } from "./contexts/LoginContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <RouterProvider router={router} />
  </LoginContextProvider>
);