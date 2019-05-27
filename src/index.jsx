import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider, loadUser } from 'redux-oidc';
import { BrowserRouter as Router } from "react-router-dom";
import App from './UI/App';
import store from './config/store';
import userManager from './config/oidc';

loadUser(store, userManager);

ReactDOM.render(
  <Provider store={ store }>
    <OidcProvider store={ store } userManager={ userManager }>
      <Router>
        <App />
      </Router>
    </OidcProvider>
  </Provider>
  ,document.getElementById('root')
)


