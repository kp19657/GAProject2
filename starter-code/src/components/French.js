import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const French = () => {
  const APP_ID = "1c87b215";
  const APP_KEY = "8c44060bffd959fead1fb1b87a485671";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getFrenchRecipes();
  }, []);

  const getFrenchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=french&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="recipes">
      {recipes.map((item) => (
        <Recipe
          key={Math.random()}
          title={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
          ingredients={item.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default French;
