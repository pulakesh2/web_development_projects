import Home from "./Page/Home";
import SignUp from "./Page/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./Page/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path="/interest" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
