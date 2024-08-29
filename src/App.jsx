import React from "react";

import "./App.css";
import Header from './assets/layouts/Header'
import HomeAll from "./assets/layouts/Homeall";
import Quotes from "./assets/school/Quotesy";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <HomeAll/> } />
        <Route path="/Quotes" element={ <Quotes/> } />
      </Routes>
    </div>
  );
};

export default App;
