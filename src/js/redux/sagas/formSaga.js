import { put, fork, takeLatest } from 'redux-saga/effects';
import { constants as formConstants, actions as formActions } from '../modules/form';

import type { formType } from '../../common/types/form'

export function* fetchFormData() {
  // pretend there is an api call
  const result: formType = {
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
  };

  yield put(formActions.updateForm(result));
}


function* watchGetForm() {
  yield takeLatest(formConstants.GET_FORM, fetchFormData);
}

export const formSaga = [
  fork(watchGetForm),
];
