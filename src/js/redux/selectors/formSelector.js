import { createSelector } from 'reselect';

const formDataSelector = (state) => state.form;

const selector = createSelector(
  formDataSelector,
  (payload) => payload.get('form')
);

export const formSelector = (state) => ({
  form: selector(state),
});
