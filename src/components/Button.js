import React from "react";

// IMPORT STYLE
import "../styles/components/button.css";

const Button = () => {
  return (
    <div className="btn-signup">
      <button type="submit">Iniciar sesión</button>
      <div class="signup-container">
        <div class="signup-wrapper">
          <span>o</span>
        </div>
      </div>
      <button type="#">Crear cuenta</button>
    </div>
  );
};

export default Button;
