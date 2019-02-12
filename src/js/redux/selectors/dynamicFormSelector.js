import { createSelector } from 'reselect';

const selector = createSelector(
  (state) => {
    console.log('dynamicFormSelector: state', state);
    return state.dynamicForm }, 
  (payload) => {
    console.log('dynamicFormSelector: payload', payload);
    // return payload.get('form')
    return payload.toJS();
  }
);

export const formSelector = (state) => ({
  ...selector(state),
});