import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import logo from "./ensure-logo.svg";
// import LogInButton from "./components/LogInButton";

//components

import InputForm from "./components/InputForm";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Claims from "./components/Claims";

function App() {
  return (
    <>
      {/* <div>
      <LogInButton />
    </div> */}
      <div className="container">
        <img className="logo-img" src={logo} alt="ensure logo" />
        <Routes>
          <Route exact path="/privacy-policy" element={<Privacy />}></Route>
          <Route exact path="/claims/:id" element={<Claims />}></Route>
          <Route exact path="/claims-form" element={<InputForm />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
