import React from "react";

// IMPORT STYLE
import { InputStyle } from "./Input.styles";

const Input = ({ placeholder, type }) => {
  return <InputStyle placeholder={placeholder} type={type} />;
};

export default Input;
