import React from "react";
import "./App.css";
import { LoginComponent } from "./components/LoginComponent/login";
import { RegisterComponent } from "./components/RegisterComponent/register";
import { NavbarComponent } from "./components/NavbarComponent/navbar";
import { NewsComponent } from "./components/NewsComponent/news";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        {/* <RegisterComponent />
      <LoginComponent /> */}
        <NewsComponent />
      </div>
    </>
  );
}

export default App;
