import React from "react";

// IMPORT STYLE
import "../styles/components/loginbtn.css";

const LoginBtn = () => {
  return (
    <div className="btn-login">
      <button type="submit">Iniciar sesión</button>
      <div class="signup-container">
        <div class="signup-wrapper">
          <span>o</span>
        </div>
      </div>
    </div>
  );
};

export default LoginBtn;
