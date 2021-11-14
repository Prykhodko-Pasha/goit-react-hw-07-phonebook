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
