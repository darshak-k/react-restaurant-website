import React from "react";
import Home from "./assets/layouts/Home";
import './App.css';
import Nutri from "./assets/layouts/Nutri";
import Menu from "./assets/layouts/Menu";
import Offrons from "./assets/layouts/Offrons";
import ShowFood from "./assets/layouts/ShowFood";
import Contact from "./assets/layouts/Contact";


const App = () => {
  return (
    <div>
      <Home/>
      <Nutri/>
      <Menu/>
      <Offrons/>
      <ShowFood/>
      <Contact/>
    </div>
  );
};

export default App;
