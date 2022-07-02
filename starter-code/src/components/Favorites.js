import React, { useContext } from "react";
import CartContext from "../react-context";
import style from "./recipe.module.css";
import "../App.css";

const Favorites = (props) => {
  let reactCtx = useContext(CartContext);

  const removeItem = (index) => {
    reactCtx.setFavoriteItem((prevState) => {
      return prevState.filter((d, i) => i !== index);
    });
  };

  return (
    <div className="App">
      {/* map from react useContext */}
      {reactCtx.favoriteItem.map((item, index) => {
        return (
          <div className="recipes">
            <div className={style.recipe}>
              <h1 className={style.title}>{item.recipe.label}</h1>
              <img src={item.recipe.image} alt="" className={style.image} />
              <p>
                {item.recipe.yield} serving(s) -{" "}
                {Math.round(item.recipe.calories)} calories total
              </p>
              <ul>
                {item.recipe.ingredients.map((item) => (
                  <li>{item.text}</li>
                ))}
              </ul>
              <br />
              <h3
                onClick={() => {
                  removeItem(index);
                }}
              >
                Click HERE to Remove Item
              </h3>
              <br />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
