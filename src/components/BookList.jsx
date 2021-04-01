import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

export function BookList() {

  const books = useSelector((state) => state.books);

  let history = useHistory();

  const handleClick = () => {
    history.push("/add-book");
  }

  return (
    <div className="container">
      <h1>Bookstore</h1>
      <div>
        <button className="btn" onClick={handleClick}>Add user</button>
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
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>
                <button>Delete</button>
                <Link to={`/edit-book/${item.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
