import { combineReducers } from 'redux';


const handleState1 = ( state1 = "state1", action ) => {
  return state1;
}

const rootReducer = combineReducers({
  state1: handleState1
});

export default rootReducer;
