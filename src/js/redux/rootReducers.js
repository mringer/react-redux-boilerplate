import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import example from './modules/example';
import form from './modules/form';
import callReasonsForm from './modules/callReasonsForm';
import leadForm from './modules/leadForm';

export default combineReducers({
  example,
  form,
  callReasonsForm,
  leadForm,
  routing,
});
