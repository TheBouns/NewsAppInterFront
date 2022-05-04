import React, { useState } from "react";

export const RegisterComponent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  return <div> RegisterComponent</div>;
};
