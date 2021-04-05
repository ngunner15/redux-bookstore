import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";
import { EditBook } from "./components/EditBook";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-book">
            <AddBook />
          </Route>
          <Route path="/edit-book">
            <EditBook />
          </Route>
          <Route path="/">
            <BookList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
