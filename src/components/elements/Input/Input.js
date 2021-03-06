import React from "react";
import PropTypes from "prop-types";

// IMPORT STYLE
import { InputStyle } from "./Input.styles";

const Input = ({ placeholder, type }) => {
  return <InputStyle placeholder={placeholder} type={type} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  placeholder: "i am a placeholder",
  type: "text"
};

export default Input;
