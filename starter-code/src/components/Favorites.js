import React, { useContext } from "react";
import CartContext from "../react-context";
import style from "./recipe.module.css";

const Favorites = (props) => {
  let reactCtx = useContext(CartContext);

  // const [list, setList] = useState(reactCtx.favoriteItem);

  const removeItem = (index) => {
    // reactCtx.favoriteItem = reactCtx.favoriteItem.filter((d, i) => i !== index);
    reactCtx.setFavoriteItem((prevState) => {
      return prevState.filter((d, i) => i !== index);
    });
  };

  // reactCtx.setFavoriteItem((prevState) => {
  //   return [...prevState, item];
  // });

  // const cartArr = cart.filter((d, i) => i !== index);
  //   setCart(cartArr);

  // console.log("this is the reactCtx.favoriteItem", reactCtx.favoriteItem);

  return (
    <div className="App">
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
