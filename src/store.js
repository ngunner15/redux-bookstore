import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./components/booksSlice";

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
