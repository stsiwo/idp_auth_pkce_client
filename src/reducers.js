import { combineReducers } from 'redux';
import { reducer } from 'redux-oidc';
import { connectRouter } from 'connected-react-router';

const handleState1 = ( state1 = "state1", action ) => {
  return state1;
}

const createRootReducer = ( history ) => combineReducers({
  oidc: reducer,
  router: connectRouter(history),
  state1: handleState1
});

export default createRootReducer;
