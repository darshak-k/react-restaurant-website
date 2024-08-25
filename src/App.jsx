import React from "react";

import "./App.css";
import Header from './assets/layouts/Header'
import HomeAll from "./assets/layouts/Homeall";
import Schools from "./assets/school/Schools";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <HomeAll/> } />
        <Route path="/school" element={ <Schools/> } />
      </Routes>
    </div>
  );
};

export default App;
