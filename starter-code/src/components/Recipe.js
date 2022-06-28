import React from "react";
import style from "./recipe.module.css";

const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{props.title}</h1>
      <img src={props.image} alt="" className={style.image} />
      <p>{Math.round(props.calories)} calories</p>
      <ul>
        {props.ingredients.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>

      <br />
      <br />
    </div>
  );
};

export default Recipe;
