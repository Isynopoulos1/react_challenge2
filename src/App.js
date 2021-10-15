import React from "react";

// IMPORT STYLES
import "./styles/app.css";
import "./styles/components/login.css";
import "./styles/components/button.css";

// IMPORT COMPONENTS
import Logo from "./components/Logo";
import Login from "./components/Login";
import Button from "./components/Button";

const App = () => {
  return (
    <main className="container">
      <Login />
    </main>
  );
};

export default App;
