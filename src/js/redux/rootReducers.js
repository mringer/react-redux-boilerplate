import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';
import routing from './modules/routing';
import example from './modules/example';
import form from './modules/form';
import callReasonsForm from './modules/callReasonsForm';
import dynamicForm from './modules/dynamicForm';
import leadForm from './modules/leadForm';

export default combineReducers({
  example,
  form,
  dynamicForm,
  callReasonsForm,
  leadForm,
  routing
});
