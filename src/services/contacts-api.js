import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = 'http://localhost:4000';

export async function fetchContactsAPI() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContactAPI(name, number) {
  const newContact = { name, number, id: uuidv4() };
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function delContactAPI(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}
