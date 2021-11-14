import * as actions from './actions';
import {
  fetchContactsAPI,
  addContactAPI,
  delContactAPI,
} from '../services/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await fetchContactsAPI();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const contact = await addContactAPI(name, number);
    dispatch(actions.addContactSuccess(contact));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};
export const delContact = id => async dispatch => {
  dispatch(actions.delContactRequest());

  try {
    const contactId = await delContactAPI(id);
    dispatch(actions.delContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.delContactError(error));
  }
};
