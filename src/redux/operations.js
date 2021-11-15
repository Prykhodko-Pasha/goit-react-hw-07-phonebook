import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './actions';
import {
  fetchContactsAPI,
  addContactAPI,
  delContactAPI,
} from '../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  actions.fetchContactsRequest,
  async () => {
    const contacts = await fetchContactsAPI();
    return contacts;
  },
);
export const addContact = createAsyncThunk(
  actions.addContactSuccess,
  async data => {
    const { name, phone } = data;
    console.log(name);
    console.log(phone);
    const contact = await addContactAPI(name, phone);
    console.log(contact);
    return contact;
  },
);
// export const addContact = createAsyncThunk(
//   actions.addContactRequest,
//   async (name, phone) => {
//     try {
//       const contact = await addContactAPI(name, phone);
//       console.log(contact);
//       return contact; // dispatch(actions.addContactSuccess(contact));
//     } catch (error) {
//       return actions.addContactError(error);
//     }

//     // const contact = await addContactAPI(name, phone);
//     // return contact;
//   },
// );

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const contacts = await fetchContactsAPI();
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

// export const addContact = (name, phone) => async dispatch => {
//   dispatch(actions.addContactRequest());

//   try {
//     const contact = await addContactAPI(name, phone);
//     dispatch(actions.addContactSuccess(contact));
//   } catch (error) {
//     dispatch(actions.addContactError(error));
//   }
// };

export const delContact = id => async dispatch => {
  dispatch(actions.delContactRequest());

  try {
    const contactId = await delContactAPI(id);
    dispatch(actions.delContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.delContactError(error));
  }
};
