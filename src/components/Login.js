import React from "react";

// IMPORT STYLE
import "../styles/app.css";

const Login = () => {
  return (
    <main>
      <form className="login" autocomplete>
        <input
          placeholder="Correo electrónico o número de móvil"
          type="email"
        />
        <input placeholder="Contraseña" type="password" />
        <p>¿Has olvidado la contraseña?</p>
        <button type="submit">Iniciar sesión</button>
        <div class="signup-container">
          <div class="signup-wrapper">
            <span>o</span>
          </div>
        </div>
        <button type="#">Crear cuenta</button>
      </form>
    </main>
  );
};
export default Login;
