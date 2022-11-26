export const selectTasks = state => state.contacts.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectFilter = state => state.filters;
