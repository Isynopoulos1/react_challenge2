import React from "react";

// IMPORT STYLES
import "./styles/app.css";
import "./styles/components/login.css";
import "./styles/components/loginbtn.css";
import "./styles/components/signupbtn.css";

// IMPORT COMPONENTS
import Logo from "./components/Logo";
import Login from "./components/Login";

const App = () => {
  return (
    <main className="container">
      <Login />
    </main>
  );
};

export default App;
