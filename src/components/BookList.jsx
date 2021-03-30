export function BookList() {
  return (
    <div className="container">
      <h1>Bookstore</h1>
      <div>
        <button className="btn">Add user</button>
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
          <tr>
            <td>Batman: Year One</td>
            <td>18.09</td>
            <td>Graphic Novel</td>
            <td>The story recounts Batmans first year as a crime-fighter</td>
            <td>
              <button>Delete</button>
              <button>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}