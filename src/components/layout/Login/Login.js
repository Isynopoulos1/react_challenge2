import React from "react";

// IMPORT STYLE
import "../../../styles/components/login.css";
import "../../../styles/components/signupbtn.css";
import "../../../styles/components/selector.css";

//IMPORT COMPONENTS
import Logo from "../../Logo";
import LoginBtn from "../../LoginBtn";
import SignupBtn from "../../SignupBtn";
import Selector from "../../Selector";

const Login = () => {
  return (
    <main>
      <div className="container">
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
      </div>
    </main>
  );
};
export default Login;
