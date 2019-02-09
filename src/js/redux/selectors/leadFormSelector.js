import { createSelector } from 'reselect';

const selector = createSelector((state) => state.leadForm, (payload) => payload.get('form'));

export const leadFormSelector = (state) => ({
  form: selector(state),
});
