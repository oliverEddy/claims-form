import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./client-img/ensure-logo.svg";


//components

import InputForm from "./components/InputForm";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Homepage from "./components/Homepage";
import Claims from "./components/Claims";
import Claim from "./components/Claim";
import { NavBarButtons } from "./components/nav-bar-buttons";
import { AuthenticationGuard } from "./components/authentication-guard";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <NavBarButtons />
          <img className="logo-img" src={logo} alt="ensure logo" />
        </div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route exact path="/privacy-policy" element={<Privacy />}></Route>

          <Route path="/claims" element={<AuthenticationGuard component={Claims} /> } />
          
          <Route path="/claims/:id" element={<AuthenticationGuard component={Claim} /> } />

          <Route path="/claims-form" element={<AuthenticationGuard component={InputForm} />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
