export const getEntities = state => state.contacts.entities;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;
export const getVisibleContacts = state => {
  const items = getEntities(state);
  const filter = getFilter(state);
  return items.filter(item => item.name.toLowerCase().includes(filter));
};
