import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartContext from "./react-context";
import Main from "./Main";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar ";
import French from "./components/French";
import Japanese from "./components/Japanese";
import Chinese from "./components/Chinese";
import Indian from "./components/Indian";

const App = () => {
  const [favoriteItem, setFavoriteItem] = useState([]);

  return (
    <>
      <NavBar />
      <CartContext.Provider value={{ favoriteItem, setFavoriteItem }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/french" element={<French />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/indian" element={<Indian />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
};
// fireUp={saveToCart}
export default App;
