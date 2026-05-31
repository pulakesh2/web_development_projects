import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./general.css";
import "./queries.css";
import App from "./App";
import PowerPage from "./templates/Powers/PowersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fear",
    element: <PowerPage />,
  },
  {
    path: "/edit",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
