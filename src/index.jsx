import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { BrowserRouter as Router } from "react-router-dom";
import App from './UI/App';
import configureStore, { history } from './config/store'
import userManager from './config/oidc';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <OidcProvider store={ store } userManager={ userManager }>
      <ConnectedRouter history={ history }>
        <App />
      </ConnectedRouter>
    </OidcProvider>
  </Provider>
  ,document.getElementById('root')
)


