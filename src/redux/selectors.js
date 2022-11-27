import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectFilter = state => state.filters;

export const selectVisibleTasks = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normolizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normolizedFilter)
    );
  }
);
