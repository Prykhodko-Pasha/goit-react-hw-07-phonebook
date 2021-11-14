import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const entities = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.delContactSuccess]: (state, { payload }) => {
    console.log(payload);
    return state.filter(({ id }) => id !== payload);
  },
});

const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.delContactRequest]: () => true,
  [actions.delContactSuccess]: () => false,
  [actions.delContactError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
  [actions.fetchContactsRequest]: () => null,
  [actions.addContactError]: (_, action) => action.payload,
  [actions.addContactRequest]: () => null,
  [actions.delContactError]: (_, action) => action.payload,
  [actions.delContactRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  filter,
  error,
});
// const initialState = {
//   items: [],
//   isLoading: false,
//   filter: '',
// };

// const reducers = createReducer(initialState, {
//   [actions.addContact]: (state, { payload }) => {
//     return { ...state, items: [...state.items, payload] };
//   },
//   [actions.delContact]: (state, { payload }) => {
//     const newContactsArr = state.items.filter(item => item.id !== payload);
//     return { ...state, items: newContactsArr };
//   },
//   [actions.searchContact]: (state, { payload }) => ({
//     ...state,
//     filter: payload,
//   }),
// });

// export default reducers;
