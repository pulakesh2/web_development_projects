import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Page from "./Components/Page/Page";
import ContextProvider from "./Store/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/page" element={<Page />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
