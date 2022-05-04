import React from "react";
import "./App.css";
import { LoginComponent } from "./components/LoginComponent/login";
import { RegisterComponent } from "./components/RegisterComponent/register";
import { NavbarComponent } from "./components/NavbarComponent/navbar";
import { NewsComponent } from "./components/NewsComponent/news";
import { CreateArticle } from "./components/CreateArticle/Article";
import { ArchiveComponent } from "./components/ArchiveComponent/Archive";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        {/* <RegisterComponent />
      <LoginComponent /> */}
        <NewsComponent />
        <CreateArticle />
        <h1>ARCHIVADOS</h1>
        <ArchiveComponent />
      </div>
    </>
  );
}

export default App;
