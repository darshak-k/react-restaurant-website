import React from "react";
import Home from "./assets/layouts/Home";
import './App.css';
import Nutri from "./assets/layouts/Nutri";
import Menu from "./assets/layouts/Menu";

const App = () => {
  return (
    <div>
      <Home/>
      <Nutri/>
      <Menu/>
    </div>
  );
};

export default App;
