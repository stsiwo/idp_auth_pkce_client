import { combineReducers } from 'redux';
import { reducer } from 'redux-oidc';

const handleState1 = ( state1 = "state1", action ) => {
  return state1;
}

const rootReducer = combineReducers({
  oidc: reducer,
  state1: handleState1
});

export default rootReducer;
