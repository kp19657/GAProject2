import React, { useEffect, useState, useContext } from "react";
import Recipe from "./components/Recipe";
import Form from "./components/Form";
import Footer from "./components/Footer";
import CartContext from "./react-context";
import "./App.css";

function Main(props) {
  const APP_ID = "1c87b215";
  const APP_KEY = "8c44060bffd959fead1fb1b87a485671";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("trending");

  let reactCtx = useContext(CartContext);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    // console.log(search);
  };

  const getQuery = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const saveAsFav = (item) => {
    // reactCtx.setFavoriteItem(item) ;
    reactCtx.setFavoriteItem((prevState) => {
      return [...prevState, item];
    });
  };

  return (
    <div className="App">
      <Form getQuery={getQuery} updateSearch={updateSearch} />
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
}

export default Main;
