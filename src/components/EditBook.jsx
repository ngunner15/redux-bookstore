import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { bookUpdated } from "./booksSlice";

export function EditBook() {
  const { pathname } = useLocation();
  const bookId = pathname.replace("/edit-book/", "");
  console.log(bookId);
  const book = useSelector((state) => state.books[bookId]);
  // const book = books[bookId];
  console.log(book);

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
      <div>
        <h1>Edit Book</h1>
      </div>
      <div>
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
        <input
          type="text"
          id="descriptionInput"
          onChange={handleDescription}
          value={description}
        />
        {error && error}
        <button onClick={handleClick} className="btn">
          Save Book
        </button>
      </div>
    </div>
  );
}
