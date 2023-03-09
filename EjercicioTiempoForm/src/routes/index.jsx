import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import getJSON from "../helpers/getJSON";

import Error from "../pages/Error";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      { index: true , element: <Home />},
      { path: "precioluz", element: <App />, loader: async () =>{return await getJSON()} },
      { path: "login", element: <Login /> }
    ],
  },
]);