import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { bookAdded } from "./booksSlice";

export function AddBook() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const booksAmount = useSelector((state) => state.books.length);

  const handleClick = () => {
    if (name && price && category && description) {
      dispatch(
        bookAdded({
          id: booksAmount + 1,
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
        <h1>Add Book</h1>
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
        <button onClick={handleClick} className="btn">Add Book</button>
      </div>
    </div>
  );
}
