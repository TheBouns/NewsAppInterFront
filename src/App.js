import React from "react";
import { NavbarComponent } from "./components/NavbarComponent/navbar";
import { NewsComponent } from "./components/NewsComponent/news";
import { ArchiveComponent } from "./components/ArchiveComponent/Archive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalComponent } from "./components/ModalComponent/modalcomponent";
import { SearchComponent } from "./components/SearchComponent/Search";
import { NoPageFound } from "./components/NotFoundComponent/notfound";
import { ToTopComponent } from "./components/ToTopComponent/toTop";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavbarComponent />
        <div id="app-content-container">
          <Routes>
            <Route path="/archived" element={<ArchiveComponent />} />
            <Route path="/addnew" element={<ModalComponent />} />
            <Route path="/search/:title" element={<SearchComponent />} />
            <Route path="*" element={<NoPageFound />} />
            <Route path="/" element={<NewsComponent />} />
          </Routes>
        </div>
        <ToTopComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
