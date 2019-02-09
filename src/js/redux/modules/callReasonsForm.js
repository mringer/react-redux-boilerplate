import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const GET_CALL_REASONS = 'app/callReasonsForm/GET_CALL_REASONS'
const UPDATE_CALL_REASONS = 'app/callReasonsForm/UPDATE_CALL_REASONS';
const SUBMIT_CALL_REASONS = 'app/callReasonsForm/SUBMIT_CALL_REASONS';

export const constants = {
  GET_CALL_REASONS,
  UPDATE_CALL_REASONS,
  SUBMIT_CALL_REASONS
};

// ------------------------------------
// Actions
// ------------------------------------
export const getCallReasons = createAction(GET_CALL_REASONS, () => ({}));
export const updateCallReasons = createAction(UPDATE_CALL_REASONS, (form : any) => ({ form }));
export const submitCallReasons = createAction(SUBMIT_CALL_REASONS, (form : any) => ({ form }));

export const actions = {
  getCallReasons,
  updateCallReasons,
  submitCallReasons
};

export const reducers = {
  [UPDATE_CALL_REASONS]: (state, { payload }) => state.merge({ ...payload }) 
  // state.set("routing", {locationBeforeTransitions: payload}) 
}

export const initialState = () => Map({
  form: {
    schema: {},
    uiSchema: {},
    formData: {}
  },
});

export default handleActions(reducers, initialState());

