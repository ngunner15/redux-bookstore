import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { BookList } from "./components/BookList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <BookList />
          </Route>
          <Route path="/add-book">
            <h1>Add Book</h1>
          </Route>
          <Route path="/edit-book">
            <h1>Edit Book</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
