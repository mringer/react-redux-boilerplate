import { put, fork, takeLatest } from 'redux-saga/effects';
import form, { constants as formConstants, actions as formActions } from '../modules/form';
import { formType } from '../../common/types/form'

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
      JSONSchema: {
        type: "object",
        required: ["callReason"],
        title: "Thank you for calling (Provider Name), this is Andrew. What services are you setting up today?",
        definitions: {
          "Reasons": {
            "title": "Call Reasons",
            "type": "string",
            "oneOf": [
              {
                "title": "Sales",
                "const": "sales",
              },
              {
                "title": "Customer Service",
                "const": "customer_service",
              },
              {
                "title": "Call Dropped/ Dead Air",
                "const": "customer_service",
              },
              {
                "title": "Other",
                "const": "other"
              },
            ]
          }
        },
        properties: {
          prompt: {
            type: "string"
          },
          callReason: { 
            "$ref": "#/definitions/Reasons",
          },
        },
      },
      UISchema: {
        "prompt": {
          "ui:widget": "PromptField",
          "ui:placeholder": "Thank you for calling (Provider Name), this is Andrew. What services are you setting up today?",
          "ui:options": {
            label: false
          }
        },
        "callReason": {
          "ui:widget": "radio",
          "ui:options": {
            label: false
          }
        }
      },
      FormData: { "prompt": "Thank you for calling (Provider Name), this is Andrew. What services are you setting up today?" }
    }
  };
  console.log('form', form);
  yield put(formActions.updateForm(form));
}

export function* updateCallReasons() {
  console.log('watchUpdateCallReasons');
}

export function* submitCallReasons(props) {
  console.log('submitCallReasons', props);
  console.log(props.payload.form.formData.callReason);
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

function* watchSubmitCallReasons() {
  yield takeLatest(formConstants.SUBMIT_CALL_REASONS, submitCallReasons)
}

export const formSaga = [
  fork(watchGetForm),
  fork(watchGetCallReasons),
  fork(watchUpdateCallReasons),
  fork(watchSubmitCallReasons),
];
