import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar ";
import Main from "./Main";
import Japanese from "./components/Japanese";
import French from "./components/French";
import Chinese from "./components/Chinese";
import Keto from "./components/Keto";
import Cocktails from "./components/Cocktails";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/french" element={<French />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/keto" element={<Keto />} />
        <Route path="/cocktails" element={<Cocktails />} />
      </Routes>
    </div>
  );
};

export default App;
