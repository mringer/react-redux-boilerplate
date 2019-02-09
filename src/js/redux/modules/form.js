import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
// import type { formType } from '../../common/types/form'
// import type { formType } from 'react-jsonschema-form/lib/types';

const GET_FORM = 'app/form/GET_FORM';
const UPDATE_FORM = 'app/form/UPDATE_FORM';

// const GET_CALL_REASONS = 'app/form/GET_CALL_REASONS'
// const UPDATE_CALL_REASONS = 'app/form/UPDATE_CALL_REASONS';
// const SUBMIT_CALL_REASONS = 'app/form/SUBMIT_CALL_REASONS';

export const constants = {
  GET_FORM,
  UPDATE_FORM,

  // GET_CALL_REASONS,
  // UPDATE_CALL_REASONS,
  // SUBMIT_CALL_REASONS
};

// ------------------------------------
// Actions
// ------------------------------------

export const getForm = createAction(GET_FORM, () => ({}));
export const updateForm = createAction(UPDATE_FORM, (form : any) => ({ form }));

// export const getCallReasons = createAction(GET_CALL_REASONS, () => ({}));
// export const updateCallReasons = createAction(UPDATE_CALL_REASONS, (callReasonsForm : any) => ({ callReasonsForm }));
// export const submitCallReasons = createAction(SUBMIT_CALL_REASONS, (callReasonsForm : any) => ({ callReasonsForm }));

export const actions = {
  getForm,
  updateForm,
//   getCallReasons,
//   updateCallReasons,
//   submitCallReasons
};

export const reducers = {
  [UPDATE_FORM]: (state, { payload }) => state.merge({ ...payload }), //'form', 
  // [UPDATE_CALL_REASONS]: (state, { payload }) => state.merge({ ...payload }) //'callReasonsForm',
  // { return state; } 
  // state.set("routing", {locationBeforeTransitions: payload}) 
}

export const initialState = () => Map({
  form: '',
  // callReasonsForm: '',
});

export default handleActions(reducers, initialState());

