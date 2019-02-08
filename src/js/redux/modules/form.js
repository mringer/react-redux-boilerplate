import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
// import type { formType } from '../../common/types/form'
// import type { formType } from 'react-jsonschema-form/lib/types';

const GET_FORM = 'app/form/GET_FORM';
const GET_CALL_REASONS = 'app/form/GET_CALL_REASONS'
const UPDATE_FORM = 'app/form/UPDATE_FORM';
const UPDATE_CALL_REASONS = 'app/form/UPDATE_CALL_REASONS';
const SUBMIT_CALL_REASONS = 'app/form/SUBMIT_CALL_REASONS';

export const constants = {
  GET_FORM,
  GET_CALL_REASONS,
  UPDATE_FORM,
  UPDATE_CALL_REASONS,
  SUBMIT_CALL_REASONS
};

// ------------------------------------
// Actions
// ------------------------------------
// export const getAwesomeCode = createAction(GET_EXAMPLE, () => ({}));
// export const updateExample = createAction(UPDATE_EXAMPLE, (result : exampleType) => ({ result }));

export const getForm = createAction(GET_FORM, () => ({}));
export const getCallReasons = createAction(GET_CALL_REASONS, () => ({}));

export const updateForm = createAction(UPDATE_FORM, (form : any) => ({ form }));
export const updateCallReasons = createAction(UPDATE_CALL_REASONS, (form : any) => ({ form }));
export const submitCallReasons = createAction(SUBMIT_CALL_REASONS, (form : any) => ({ form }));

export const actions = {
  getForm,
  getCallReasons,
  updateForm,
  updateCallReasons,
  submitCallReasons
};

export const reducers = {
  [UPDATE_FORM]: (state, { payload }) => state.merge({ ...payload }),
  [UPDATE_CALL_REASONS]: (state, { payload }) => {
    // const { formData } = payload.form;
    // console.log(...state);
    return state;
    // return state.merge({...payload});
  }
}

export const initialState = () => Map({
  form: '',
});

export default handleActions(reducers, initialState());

