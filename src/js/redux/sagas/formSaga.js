import { put, fork, takeLatest } from 'redux-saga/effects';
import form, { constants as formConstants, actions as formActions } from '../modules/form';
import type { formType } from '../../common/types/form'
// import type { fieldProps as formType } from 'react-jsonschema-form/lib/types';

export function* fetchFormData() {
  // pretend there is an api call
  const form: formType  = {
    schema: {
      title: "Todo",
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string", title: "Title", default: "A new task" },
        done: { type: "boolean", title: "Done?", default: false }
      },
    uiSchema: null,
    formData: null
    }
  };
  console.log('form', form);
  yield put(formActions.updateForm(form));
}

export function* fetchCallReasons() {
  // pretend there is an api call
  const form: formType  = {
    schema: {
      title: "Call Reasons",
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string", title: "Title", default: "A new task" },
        done: { type: "boolean", title: "Done?", default: false }
      },
    uiSchema: null,
    formData: null
    }
  };
  console.log('form', form);
  yield put(formActions.updateForm(form));
}

export function* updateCallReasons() {
  console.log('watchUpdateCallReasons');
}

function* watchGetForm() {
  yield takeLatest(formConstants.GET_FORM, fetchFormData);
}

function* watchGetCallReasons() {
  yield takeLatest(formConstants.GET_CALL_REASONS, fetchCallReasons)
}

function* watchUpdateCallReasons() {
  yield takeLatest(formConstants.UPDATE_CALL_REASONS, updateCallReasons)
}

export const formSaga = [
  fork(watchGetForm),
  fork(watchGetCallReasons),
  fork(watchUpdateCallReasons)
];
