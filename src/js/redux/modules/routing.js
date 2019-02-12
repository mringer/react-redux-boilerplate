/* Creating this reducer for react-router-redux and immutable.js working together */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  locationBeforeTransitions: null,
});

export default (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
      console.log(LOCATION_CHANGE, action.payload)
    return state.merge({
      locationBeforeTransitions: action.payload,
    });
  }

  return state;
};
