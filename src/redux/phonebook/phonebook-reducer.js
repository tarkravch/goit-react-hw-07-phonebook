import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import initialContacts from "../../components/contactArr.json";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filterByName,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./phonebook-actions";

const items = createReducer(initialContacts, {
  [fetchContactSuccess]: (state, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [filterByName]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  
});
