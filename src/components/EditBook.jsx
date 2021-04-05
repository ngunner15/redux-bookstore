import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { bookUpdated } from "./booksSlice";

import "../styles/App.css";

export function EditBook() {
  const { pathname } = useLocation();
  const bookId = pathname.replace("/edit-book/", "");
  const book = useSelector((state) => state.books[bookId]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleClick = () => {
    if (name && price && category && description) {
      dispatch(
        bookUpdated({
          id: bookId,
          name,
          price,
          category,
          description,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Edit Book</h1>
      </div>
      <div className="content-book">
        <div className="content-form">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="priceInput">Price</label>
          <input
            type="text"
            id="priceInput"
            onChange={handlePrice}
            value={price}
          />
          <label htmlFor="categoryInput">Category</label>
          <input
            type="text"
            id="categoryInput"
            onChange={handleCategory}
            value={category}
          />
          <label htmlFor="descriptionInput">Description</label>
          <textarea
            type="text"
            id="descriptionInput"
            rows="2"
            onChange={handleDescription}
            value={description}
          />
        </div>
        <div className="content-btn">
          {error && error}
          <button onClick={handleClick} className="btn btn-edit">
            Save
        </button>
        </div>
      </div>
    </div>
  );
}
