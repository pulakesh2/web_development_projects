import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Details from "./Components/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
