import React from "react";

// IMPORT STYLES
import "./styles/app.css";
import "./styles/components/login.css";
import "./styles/components/loginbtn.css";
import "./styles/components/signupbtn.css";
import "./styles/components/selector.css";
import "./styles/components/footer.css";

// IMPORT COMPONENTS
import Logo from "./components/Logo";
import Login from "./components/Login";
import Selector from "./components/Selector";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Login />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
