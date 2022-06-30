import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar ";
import Main from "./Main";
import Japanese from "./components/Japanese";
import French from "./components/French";
import Chinese from "./components/Chinese";
import Indian from "./components/Indian";
import Cocktails from "./components/Cocktails";
import "./App.css";
import CartContext from "./react-context";
import Favorites from "./components/Favorites";

const App = () => {
  const [favoriteItem, setFavoriteItem] = useState("renderlah");

  return (
    <div className="App">
      <NavBar />
      <CartContext.Provider value={{ favoriteItem, setFavoriteItem }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/french" element={<French />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/indian" element={<Indian />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
};

export default App;
