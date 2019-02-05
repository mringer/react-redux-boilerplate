import { createSelector } from 'reselect';

const formDataSelector = (state) => state.form;

const resultSelector = createSelector(
  formDataSelector,
  (payload) => payload.get('result')
);

export const formSelector = (state) => ({
  result: resultSelector(state),
});
