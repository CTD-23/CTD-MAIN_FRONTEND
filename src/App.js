import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Events from "./pages/Events/Events";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OurTeam from "./pages/OurTeam/OurTeam";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/OurTeam" element={<OurTeam />} />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
