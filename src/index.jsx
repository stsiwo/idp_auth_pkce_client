import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { loadUser, reducer } from 'redux-oidc';
//import userManager from './configur/oidc';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer);

//loadUser(store, userManager);

const App = ( props ) => <div>hey</div>;

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App/>
    </Router>
  </Provider>
  ,document.getElementById('root')
)


