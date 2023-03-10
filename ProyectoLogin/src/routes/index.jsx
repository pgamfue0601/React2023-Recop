import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "/login", element: <Login />},
    ],
  },
]);