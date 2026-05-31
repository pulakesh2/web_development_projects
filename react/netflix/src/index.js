import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import Product from "./templates/Product";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
