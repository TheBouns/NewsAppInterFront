import React from "react";
import "./App.css";
import { LoginComponent } from "./components/LoginComponent/login";
import { RegisterComponent } from "./components/RegisterComponent/register";
import { NavbarComponent } from "./components/NavbarComponent/navbar";
import { NewsComponent } from "./components/NewsComponent/news";
import { CreateArticle } from "./components/CreateArticle/Article";
import { ArchiveComponent } from "./components/ArchiveComponent/Archive";
import { SpinnerComponent } from "./components/SpinnerComponent/spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalComponent } from "./components/ModalComponent/modalcomponent";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavbarComponent />
        <div id="app-content-container">
          <Routes>
            <Route path="/" element={<NewsComponent />} />
            <Route path="/archived" element={<ArchiveComponent />} />
            <Route path="/addnew" element={<ModalComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
