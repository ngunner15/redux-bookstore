import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { bookDeleted } from "./booksSlice";

import "../styles/App.css";

export function BookList() {

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.push("/add-book");
  }

  const handleDelete = (id) => {
    dispatch(bookDeleted({ id }));
  };

  const handleEdit = (id) => {
    history.push(`/edit-book/${id}`);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Bookstore</h1>
      </div>
      <div className="content">
        <div className="content-btn">
          <button className="btn btn-add" onClick={handleClick}>&#43;</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr key={item.id}>
                <td className="book-name" onClick={() => handleEdit(item.id)}>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td className="content-action">
                  <button className="btn btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                  <button className="btn btn-edit" onClick={() => handleEdit(item.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
