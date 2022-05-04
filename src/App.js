import React from "react";
import "./App.css";
import { NavbarComponent } from "./components/NavbarComponent/navbar";
import { RegisterComponent } from "./components/RegisterComponent/register";

function App() {
  return (
    <div className="container">
      <NavbarComponent />
      <RegisterComponent />
    </div>
  );
}

export default App;
