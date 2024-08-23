import React from "react";
import Home from "../home/Home";
import Nutri from "../home/Nutri";
import Menu from "../home/Menu";
import Offrons from "../home/Offrons";
import ShowFood from "../home/ShowFood";
import ChooesTips from "../home/ChooesTips";
import FoodDish from "../home/FoodDish";
import Contact from "../home/Contact";
import Goodness from "../home/Goodness";
import Footer from "./Footer";


const HomeAll = () => {
  return (
    <div>
      <Home />
      <Nutri />
      <Menu />
      <Offrons />
      <ShowFood />
      <ChooesTips />
      <FoodDish />
      <Contact />
      <Goodness />
      <Footer />
    </div>
  );
};

export default HomeAll;
