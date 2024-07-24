import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Abibas, Adidas, Prices, Puma } from "../components/pages";
import { Model } from "./../components/pages/Model";
import { error } from "console";
import { Error404 } from "../components/pages/Error404";

export const PATH = {
  PAGE1: "/adidas",
  PAGE2: "/puma",
  PAGE3: "/abibas",
  PAGE4: "/prices",
  MODEL: ":model/:id",
  ERROR: "/error404",
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorPage: <Error404 />,
    children: [
      {
        path: PATH.PAGE1,
        element: <Adidas />,
      },
      {
        path: PATH.PAGE2,
        element: <Puma />,
      },
      {
        path: PATH.PAGE3,
        element: <Abibas />,
      },
      {
        path: PATH.PAGE4,
        element: <Prices />,
      },
    ],
  },
]);
