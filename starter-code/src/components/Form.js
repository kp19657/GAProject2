import React from "react";
import "../App.css";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getQuery} className="search-form">
        <input
          className="search-bar"
          type="text"
          onChange={props.updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
