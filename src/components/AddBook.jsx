import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { bookAdded } from "./booksSlice";

import "../styles/App.css";

export function AddBook() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState(null);
  const initialInputState = {name: '', price: '' , category: '', description: ''};
  const [item, setItem] = useState(initialInputState);

  const handleInputChange = (event) => {
    const { name, value } = event.target; // Takes name and value from the input field

    setItem({ ...item, [name]: value });  // ... makes shallow copy so setItem only changes the targeted name and value
  }

  const booksAmount = useSelector((state) => state.books.length); //useSelector makes state available from store

  const handleClick = () => {
    if (item.name && item.price && item.category && item.description) {
      dispatch(
        bookAdded({
          id: booksAmount,
          name: item.name,
          price: item.price,
          category: item.category,
          description: item.description,
        })
      );

      setError(null);
      history.push("/");  // Redirects to the home page i.e. localhost:3000/
    } else {
      setError("Fill in all fields");
    }

    setItem(initialInputState); // cleans up input fields when adding next book
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Add Book</h1>
      </div>
      <div className="content-book">
        <div className="content-form">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            onChange={handleInputChange}
            value={item.name}
          />
          <label htmlFor="priceInput">Price</label>
          <input
            type="text"
            id="priceInput"
            name="price"
            onChange={handleInputChange}
            value={item.price}
          />
          <label htmlFor="categoryInput">Category</label>
          <input
            type="text"
            id="categoryInput"
            name="category"
            onChange={handleInputChange}
            value={item.category}
          />
          <label htmlFor="descriptionInput">Description</label>
          <textarea
            type="text"
            id="descriptionInput"
            name="description"
            rows="2"
            onChange={handleInputChange}
            value={item.description}
          />
        </div>
        <div className="content-btn">
          {error && error}
          <button onClick={handleClick} className="btn btn-add">&#43;</button>
        </div>
      </div>
    </div>
  );
}
