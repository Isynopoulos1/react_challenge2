import React from "react";

// IMPORT STYLES
import "./styles/app.css";

// IMPORT COMPONENTS
import Logo from "./components/Logo";
import Login from "./components/Login";

const App = () => {
  return (
    <main className="main">
      <Logo />
      <Login />
    </main>
  );
};

export default App;
