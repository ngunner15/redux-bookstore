import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: 'Inverting The Pyramid', price: '16.99', category: 'sports', description: 'A pioneering soccer book that chronicles the evolution of soccer tactics' },
  { id: 1, name: 'Batman: Year One', price: '18.09', category: 'graphic novel', description: 'The story recounts Batmans first year as a crime-fighter' },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
    bookUpdated(state, action) {
      const { id, name, price, category, description } = action.payload;
      const existingBook = state[id];
      if (existingBook) {
        existingBook.name = name;
        existingBook.price = price;
        existingBook.category = category;
        existingBook.description = description;
      }
    },
    bookDeleted(state, action) {
      const { id } = action.payload;
      const existingBook = state[id];
      if (existingBook) {
        state = state.splice(state.indexOf(state[id]), 1);
      }
    },
  },
});

export const { bookAdded, bookUpdated, bookDeleted } = booksSlice.actions;

export default booksSlice.reducer;
