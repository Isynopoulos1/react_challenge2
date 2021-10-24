import React from "react";

// IMPORT STYLE
import { LoginMain, LoginWrapper, LoginForm, LoginLink } from "./Login.styles";
import "../../../styles/components/selector.css";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import Selector from "../../elements/Selector/Selector";

const Login = () => {
  const inputs = [
    { placeholder: "Correo electrónico o número de móvil", type: "email" },
    { placeholder: "Contraseña", type: "password" }
  ];

  return (
    <LoginMain>
      <LoginWrapper>
        <Logo />
        <LoginForm>
          {inputs.map((input, i) => (
            <Input key={i} placeholder={input.placeholder} type={input.type} />
          ))}
          <LoginLink href="https://www.paypal.com/authflow/password-recovery/?country.x=ES&locale.x=es_ES&redirectUri=%252Fsignin%252F">
            ¿Has olvidado la contraseña?
          </LoginLink>
          <Button label="Iniciar sesión" />
          <Button label="Crear cuenta" />
        </LoginForm>
        <Selector />
      </LoginWrapper>
    </LoginMain>
  );
};

export default Login;
