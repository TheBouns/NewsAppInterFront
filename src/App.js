import React from "react";
import "./App.css";
import { LoginComponent } from "./components/LoginComponent/login";
import { NavbarComponent } from "./components/NavbarComponent/navbar";
import { RegisterComponent } from "./components/RegisterComponent/register";

function App() {
  return (
    <div className="container">
      <NavbarComponent />
      <RegisterComponent />
      <LoginComponent />
    </div>
  );
}

export default App;
