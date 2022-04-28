import { createSlice } from '@reduxjs/toolkit';
import { createContact } from 'utils/createContact';
import { v4 as uuidv4 } from 'uuid';

const INIT_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const contact = createContact(action.payload);
      if (contact) {
        state.push(contact);
      }
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
