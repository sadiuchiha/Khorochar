import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topfold.css";

function TopFold() {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fas fa-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            ></input>
          </div>
          <Link to="/addExpense">
            <div className="btn">
              <i className="far fa-plus-square"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="btn">
              <i className="fas fa-arrow-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="btn">
              <i className="far fa-times-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TopFold;
