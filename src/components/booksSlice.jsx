import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: 'Inverting The Pyramid', price: '16.99', category: 'sports', description: 'A pioneering soccer book that chronicles the evolution of soccer tactics' },
  { id: 2, name: 'Batman: Year One', price: '18.09', category: 'graphic novel', description: 'The story recounts Batmans first year as a crime-fighter' }
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
