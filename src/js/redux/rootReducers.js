import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import example from './modules/example';
import form from './modules/form';

export default combineReducers({
  example,
  form,
  routing,
});
