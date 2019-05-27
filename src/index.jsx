import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import userManager from './configur/oidc';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import App from './UI/App';
import store from './config/store';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root')
)


