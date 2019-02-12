import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { formType } from '../../common/types/form';

const GET_FORM = 'app/dynamicForm/GET_FORM'
const UPDATE_FORM = 'app/dynamicForm/UPDATE_FORM';
const SUBMIT_FORM = 'app/dynamicForm/SUBMIT_FORM';

export const constants = {
  GET_FORM,
  UPDATE_FORM,
  SUBMIT_FORM
};

// ------------------------------------
// Actions
// ------------------------------------
export const getForm = createAction(GET_FORM, (key: string) => ({ key }));
export const updateForm = createAction(UPDATE_FORM, (form : any) => ({ ...form }));
export const submitForm = createAction(SUBMIT_FORM, (form : any) => ({ ...form }));

export const actions = {
  getForm,
  updateForm,
  submitForm
};

export const reducers = {
  [UPDATE_FORM]: (state, { key, payload }) => {
    // console.log('state:', state )
    // console.log('UPDATE_FORM action dynamicForm', key, payload);
    // return state.merge({ ...payload });
    return state ? state.merge({ ...payload }) : state.set(payload);
  },
  [SUBMIT_FORM]: (state, { key, payload }) => { 
    console.log('SUBMIT_FORM action dynamicForm', key, payload);
    return state.merge({ ...payload });
  },
  [GET_FORM]: (state, { key, payload }) => {
    //console.log('GET_FORM action dynamicForm', state, key, payload);
    const formState = state.get(key);
    return formState ? formState : state.set(key);
  }
}

export const initialState = () => Map({ default: null
    // form: {
    //   schema: {},
    //   uiSchema: {},
    //   formData: {}
    // }
  });
//   key: '',
//   nextButton: null,
//   backButton: null,
//   schema: {},
//   uiSchema: {},
//   formData: {}
// });

export default handleActions(reducers, initialState());

