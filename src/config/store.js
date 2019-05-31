import createRootReducer from '../reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { loadUser } from 'redux-oidc';
import userManager from './oidc';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default function configureStore( preloadedState = {} ) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history)
    
      )
    )
  );

  /**
   * Loads potentially existing user data into the redux store, 
   * thus eliminating a new authentication roundtrip to the authentication server 
   * when a tab is closed or a new tab is opened.
   **/
  loadUser(store, userManager);

  return store;

}

