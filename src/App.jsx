import React from "react";

import "./App.css";
import HomeAll from "./assets/layouts/Homeall";
import Quotes from "./assets/Quote/Quotes";
import { Route, Routes } from "react-router-dom";

import Viewmenu from "./assets/menu/Viewmenu";
import Stepthree from "./assets/Quote/Stepthree";
import Steptwo from "./assets/Quote/Steptwo";


const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={ <HomeAll/> } />
        <Route path="/Quotes" element={ <Quotes/> } />
        <Route path="/Quotstwostep" element={ <Steptwo/> } />
        <Route path="/Quotsthreestep" element={ <Stepthree/> } />
        <Route path="/Viewmenu" element={<Viewmenu/>}/>
      </Routes>
    </div>
  );
};

export default App;
