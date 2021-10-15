import React from "react";

// IMPORT STYLE
import "../styles/app.css";

//IMPORT COMPONENTS
import Logo from "./Logo";
import Button from "./Button";

const Login = () => {
  return (
    <div className="wrapper">
      <Logo />
      <form className="login" autocomplete>
        <input
          placeholder="Correo electrónico o número de móvil"
          type="email"
        />
        <input placeholder="Contraseña" type="password" />
        <p>¿Has olvidado la contraseña?</p>
        <Button />
      </form>
    </div>
  );
};
export default Login;
