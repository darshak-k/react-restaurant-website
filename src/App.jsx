import React from "react";
import Home from "./assets/layouts/Home";
import './App.css';
import Nutri from "./assets/layouts/Nutri";
import Menu from "./assets/layouts/Menu";
import Offrons from "./assets/layouts/Offrons";
import ShowFood from "./assets/layouts/ShowFood";
import Contact from "./assets/layouts/Contact";
import Goodness from "./assets/layouts/Goodness";
import Footer from "./assets/layouts/Footer";


const App = () => {
  return (
    <div>
      <Home/>
      <Nutri/>
      <Menu/>
      <Offrons/>
      <ShowFood/>
      <Contact/>
      <Goodness/>
      <Footer/>
    </div>
  );
};

export default App;
