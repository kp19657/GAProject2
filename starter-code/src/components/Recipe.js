import React, { useContext, useEffect } from "react";
import CartContext from "../react-context";
import style from "./recipe.module.css";

const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{props.title}</h1>
      <img src={props.image} alt="" className={style.image} />
      <p>
        {props.yield} serving(s) - {Math.round(props.calories)} calories total
      </p>
      <ul>
        {props.ingredients.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
      <br />
      <a target="blank" href={props.url}>
        Click HERE For The Original Recipe
      </a>
      <h3 onClick={() => props.saveAsFav(props.itm)}>
        Click HERE to Save Recipe
      </h3>
      <br />

      <br />
    </div>
  );
};

export default Recipe;
