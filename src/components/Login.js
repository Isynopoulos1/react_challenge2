import React from "react";

// IMPORT STYLE
import "../styles/app.css";
import "../styles/components/signupbtn.css";

//IMPORT COMPONENTS
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SignupBtn from "./SignupBtn";
import Selector from "./Selector";

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
        <LoginBtn />
        <SignupBtn />
        <Selector />
      </form>
    </div>
  );
};
export default Login;
