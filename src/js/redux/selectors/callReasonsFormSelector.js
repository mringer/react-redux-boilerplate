import { createSelector } from 'reselect';

const selector = createSelector((state) => state.callReasonsForm, (payload) => payload.get('form'));

export const callReasonsFormSelector = (state) => ({
  form: selector(state),
});
