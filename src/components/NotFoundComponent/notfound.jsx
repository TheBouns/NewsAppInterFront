import React from "react";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import "./notfound.css";

export const NoPageFound = () => {
  return (
    <div id="not-found-container">
      <BsFillEmojiFrownFill className="icon-size" />
      <h2 className="not-found-title">404</h2>
      <h3>Page not Found</h3>
      <p>
        The Page you are looking for doesn´t exist or another error ocurred...
      </p>
    </div>
  );
};
