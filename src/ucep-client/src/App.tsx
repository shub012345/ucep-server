import "./App.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto-serif/400.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/poppins/500.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Application from "./pages/Application";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import MyInformation from "./pages/MyInformation";
import Services from "./pages/Services";
import Verification from "./pages/Verification";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/root" element={<Root />} />
        <Route path="/ucep_form_loader" element={<UcepFormLoader />} /> */}
        {/* <Route path="/success" element={<Success />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/application" element={<Application />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/myInformation" element={<MyInformation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
