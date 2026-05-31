import { createBrowserRouter, RouterProvider } from "react-router";
import CreateAccount, {
  action as accountAction,
} from "./feature/account/CreateAccount";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Models, { loader as modelLoader } from "./Pages/Models";
import Account from "./Pages/Account";
import Contactus from "./Pages/Contactus";
import ModelView, {
  loader as modelViewLoader,
} from "./feature/models/ModelView";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createaccount",
        element: <CreateAccount />,
      },
      {
        path: "/models",
        element: <Models />,
        loader: modelLoader,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/models/:modelId",
        element: <ModelView />,
        loader: modelViewLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
