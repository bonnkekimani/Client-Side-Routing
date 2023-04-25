import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
return (
  <BrowserRouter>
    <NavBar />
  <Routes>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<ContactUs />}></Route>


  </Routes>
  </BrowserRouter>
	
);
}

export default App;
