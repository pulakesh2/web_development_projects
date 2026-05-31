import { BrowserRouter, Routes, Route } from "react-router-dom";

// import  Home from './pages/Home';
import Cse from "./inBranch/Cse";
import "./App.css";
import Home1 from "./pages/Home1";
import navBar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={navBar}>
            <Route path="/" element={<Home1 />} />
            <Route path="/Cse" element={<Cse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
