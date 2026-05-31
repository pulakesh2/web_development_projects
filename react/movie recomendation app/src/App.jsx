import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main";
// import AuthProvider from "./Context/useAuth";
import Private from "./Router/Private";
import Public from "./Router/Public";

function App() {
  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <Public>
            <SignUp />
          </Public>
        }
      />
      <Route
        path="/"
        element={
          <Private>
            <Main />
          </Private>
        }
      />
    </Routes>
  );
}

export default App;
