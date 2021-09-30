import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import "./addForm.css";
function AddForm() {
  const cat = categories;

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState();


  const handleSubmit = () => {

  }

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);

    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(e.target.value);
  };

  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title</label>
        <input
          className="title-input"
          type="text"
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        ></input>
      </div>
      <div className="form-item">
        <label>Amount $</label>
        <input
          className="amount-input"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        ></input>
      </div>
      <div className="category-container-pa">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => {
              setCategoryOpen(!categoryOpen);
            }}
          >
            <label>{category? category.title : "Category"}</label>
            <i className="fas fa-caret-down"></i>
          </div>
          { categoryOpen && (
            <div className="category-container">
              {cat.map((category) => 
                <div
                  className="category-item"
                  style={{
                    borderRight: `0.25rem solid ${category.color}`,
                  }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon.default} alt={category.title} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit()}>
          <label>Add</label>
          <i className="fas fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
}

// const isRendering = (openOrClose) => {
//   console.log("Category is open " + openOrClose);
//   console.log("Is it rendering? ");
//   return true;
// };

export default AddForm;
