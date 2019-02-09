import { put, fork, takeLatest } from 'redux-saga/effects';
import form, { constants as formConstants, actions as formActions } from '../modules/form';
import callReasonsForm, { constants as callReasonsConstants, actions as callReasonsActions } from '../modules/callReasonsForm';
import { constants as leadFormConstants, actions as leadFormActions } from '../modules/leadForm';

import { formType } from '../../common/types/form';
import { push } from 'react-router-redux';
import jp from 'jsonpath';
import { stringify } from 'querystring';


export function* fetchFormData() {
  // pretend there is an api call
  const form: formType  = {
    form:{
      schema: {
        title: "Todo",
        type: "object",
        required: ["title"],
        properties: {
          title: { type: "string", title: "Title", default: "A new task" },
          done: { type: "boolean", title: "Done?", default: false }
        },
      },
      uiSchema: null,
      formData: null
    }
  };
  yield put(formActions.updateForm(form));
}

export function* fetchCallReasons() {
  // pretend there is an api call
  const form: formType  = {
    form: {
      schema: {
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
      uiSchema: {
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
      formData: { "prompt": "Thank you for calling (Provider Name), this is Andrew. What services are you setting up today?" }
    }
  };
  yield put(callReasonsActions.updateCallReasons(form));
}

export function* handleCallReasons(props) {
  switch(jp.query(props, '$.payload.form.formData.callReason').pop()) {
    case 'sales':
      // TODO: update API
      yield put(push('/LeadForm'));
      break;
    default:
      // TODO: update API
      yield put(push('/CustomerService'));
  }
}

export function* fetchLeadForm(props) {
  // API call goes here.

  // pretend there is an api call
  const form: formType  = {
    form:{
      schema: {
        type: "object",
        required: [ "firstName", "lastName", "primaryPhone", "permissionToCall", "emailScriptAttempted" ],
        title: "_",
        definitions: {
          "PhoneType": {
            "title": "Phone Type",
            "type": "string",
            "oneOf": [
              {
                "title": "Home",
                "const": "home",
              },
              {
                "title": "Mobile",
                "const": "mobile",
              },
              {
                "title": "Work",
                "const": "work",
              }
            ]
          },
          "PermissionToCall": {
            title: "Permission To Call",
            "type": "boolean",
            "oneOf": [
              {
                "title": "Yes",
                "const": true
              },
              {
                "title": "No",
                "const": false
              }
            ]
          },
          MovingToAddress: {
            title: "Are you moving into this address?",
            type: "string",
            oneOf: [
              { const: "Yes", title: "Yes, I am moving or have just moved into this address." },
              { const: "No", title: "No, I am not moving." }
            ]
          },
          PermissionToEmail: {
            title: "Can we send confirmations and future offers to your email address?",
            type: "string",
            oneOf: [
              { const: "Yes", title: "Yes" },
              { const: "No", title: "No" }
            ]
          }
        },
        properties: {
          prompt_1: {
            type: "string"
          },
          firstName: { type: "string" },
          lastName: { type: "string" },
          primaryPhone: { type: "string" },
          phoneType: { 
            "$ref": "#/definitions/PhoneType",
            "ui:options": { label: false }
          },
          prompt_2: { type: "string" },
          permissionToCall: {
            "$ref": "#/definitions/PermissionToCall",
          },
          address: { type: "string" },
          apartment: { type: "string" },
          zipCode: { type: "string" },
          verifyAddress: { type: "boolean" },
          prompt_3: { type: "string" },
          movingToAddress: { 
            "$ref": "#/definitions/MovingToAddress"
          },
          moving_date: { type: "string", format: "hidden", title: " " },
          permissionToEmail: { 
            "$ref": "#/definitions/PermissionToEmail"
           },
          email: { type: "string", format: "hidden", title: " " },
          emailScriptAttempted: { type: "boolean" }
        },
        "dependencies": {
          movingToAddress: {
            oneOf: [
              {
                properties: {
                  movingToAddress: {
                    const: "Yes"
                  },
                  moving_date: {
                    type: "string",
                    format: "date",
                    title: "Moving Date",
                  }
                }
              },
              {
                properties: {
                  movingToAddress: {
                    const: "No"
                  },
                  moving_date: {
                    type: "string",
                    format: "hidden",
                    title: " "
                  }
                }
              }
            ]
          },
          permissionToEmail: {
            oneOf: [
              {
                properties: {
                  permissionToEmail: {
                    const: "Yes"
                  },
                  email: {
                    type: "string",
                    format: "email",
                    title: "Email",
                  }
                }
              },
              {
                properties: {
                  permissionToEmail: {
                    const: "No"
                  },
                  email: {
                    type: "string",
                    format: "hidden",
                    title: " "
                  }
                }
              }
            ]
          }
        }
      },
      uiSchema: {
        "ui:order": [
          "prompt_1",
          "firstName",
          "lastName",
          "primaryPhone",
          "phoneType",
          "prompt_2",
          "permissionToCall",
          "prompt_3",
          "address",
          "apartment",
          "zipCode",
          "verifyAddress",
          "movingToAddress",
          "moving_date",
          "permissionToEmail",
          "email",
          "emailScriptAttempted",
        ],
        "prompt_1": {
          "ui:widget": "PromptField",
          "ui:placeholder": "May I have your name and telephone number in case we get disconnected?",
          "ui:options": { label: false }
        },
        "prompt_2": {
          "ui:widget": "PromptField",
          "ui:placeholder": "If we need to call about your order, does Provider have permission to call you at 000-000-0000?",
          "ui:options": { label: false }
        },
        "prompt_3": {
          "ui:widget": "PromptField",
          "ui:placeholder": "May I have your home address to check coverage in your area?",
          "ui:options": { label: false }
        },
        "phoneType": {
          "ui:widget": "radio",
          "ui:options": { label: false }
        },
        "movingToAddress": {
          "ui:widget": "radio",
        },
        "permissionToCall": {
          "ui:widget": "radio"
        },
        "permissionToEmail": {
          "ui:widget": "radio"
        },
        "verifyAddress": {
          "ui:widget": "checkbox"
        }
      },
      formData: {}
    }
  };
  yield put(leadFormActions.updateLeadForm(form));

}

function* watchGetLeadForm() {
  yield takeLatest(leadFormConstants.GET_LEAD_FORM, fetchLeadForm);
}

function* watchGetCallReasons() {
  yield takeLatest(callReasonsConstants.GET_CALL_REASONS, fetchCallReasons)
}

function* watchSubmitCallReasons() {
  yield takeLatest(callReasonsConstants.SUBMIT_CALL_REASONS, handleCallReasons)
}

export const buyFlowSaga = [
  fork(watchGetLeadForm),
  fork(watchGetCallReasons),
  fork(watchSubmitCallReasons),
];
