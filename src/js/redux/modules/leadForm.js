import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// ------------------------------------
// Event Constants
// ------------------------------------
const GET_LEAD_FORM = 'app/leadForm/GET_LEAD_FORM';
const UPDATE_LEAD_FORM = 'app/leadForm/UPDATE_LEAD_FORM';
const SUBMIT_LEAD_FORM = 'app/leadForm/SUBMIT_LEAD_FORM';

export const constants = {
  GET_LEAD_FORM,
  UPDATE_LEAD_FORM,
  SUBMIT_LEAD_FORM
};


// ------------------------------------
// Actions
// ------------------------------------
export const getLeadForm = createAction(GET_LEAD_FORM, ()=>({}));
export const updateLeadForm = createAction(UPDATE_LEAD_FORM, (form : any) => ({form}));
export const submitLeadForm = createAction(SUBMIT_LEAD_FORM, (form : any) => ({form}));

export const actions = {
  getLeadForm,
  updateLeadForm,
  submitLeadForm
}

export const reducers = {
  [UPDATE_LEAD_FORM]: (state, { payload }) => state.merge({...payload})
}

export const initialState = () => Map({
  form: {
    schema: {},
    uiSchema: {},
    formData: {}
  }
});

export default handleActions(reducers, initialState());