import React from "react";
import "./App.css";
import logo from "./ensure-logo.svg";

//components

import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      <div className="container">
        <img className="logo-img" src={logo} alt="ensure logo" />
        <InputForm />
      </div>
    </>
  );
}

export default App;
