import React, { useEffect, useState, useContext } from "react";
import Recipe from "../components/Recipe";
import Footer from "../components/Footer";
import CartContext from "../react-context";
import "../App.css";

const Japanese = (props) => {
  const APP_ID = "1c87b215";
  const APP_KEY = "8c44060bffd959fead1fb1b87a485671";

  const [recipes, setRecipes] = useState([]);

  let reactCtx = useContext(CartContext);

  useEffect(() => {
    getJapaneseRecipes();
  }, []);

  const getJapaneseRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=japanese&cuisineType=japanese&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const saveAsFav = (item) => {
    // reactCtx.setFavoriteItem(item) ;
    reactCtx.setFavoriteItem((prevState) => {
      return [...prevState, item];
    });
  };

  return (
    <div className="App">
      <div className="recipes">
        {recipes.map((item, index) => (
          <Recipe
            key={Math.random()}
            title={item.recipe.label}
            calories={item.recipe.calories}
            yield={item.recipe.yield}
            image={item.recipe.image}
            ingredients={item.recipe.ingredients}
            url={item.recipe.url}
            idx={index}
            itm={item}
            saveAsFav={saveAsFav}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Japanese;
