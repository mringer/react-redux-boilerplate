import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import type { formType } from '../../common/types/form'

const GET_FORM = 'app/form/GET_FORM';
const UPDATE_FORM = 'app/form/UPDATE_FORM';

export const constants = {
  GET_FORM,
  UPDATE_FORM,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getForm = createAction(GET_FORM, () => ({}));
export const updateForm = createAction(UPDATE_FORM, (result : any) => ({ ...result }));

export const actions = {
  getForm,
  updateForm,
};

export const reducers = {
  [UPDATE_FORM]: (state, { payload }) => {
    console.log(UPDATE_FORM)
    console.log('state', state, 'payload', payload);
    return state; // .merge({ ...payload });
  },
  [GET_FORM]: (state, { payload }) => {
    console.log(GET_FORM);
    console.log('state', state, 'payload', payload);
    return state;
  }
}

export const initialState = () => Map({
  result: {
    id: 1,
    schema: {
      title: "Todo",
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string", title: "Title", default: "A new task" },
        done: { type: "boolean", title: "Done?", default: false }
      },
    UISchema: null,
    formData: null
    }
  }
});

export default handleActions(reducers, initialState());
