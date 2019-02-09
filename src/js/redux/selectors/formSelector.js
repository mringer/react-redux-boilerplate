import { createSelector } from 'reselect';

// Example Form

const formDataSelector = (state) => state.form;

const selector = createSelector(
  formDataSelector,
  (payload) => payload.get('form')
);

export const formSelector = (state) => ({
  form: selector(state),
});
