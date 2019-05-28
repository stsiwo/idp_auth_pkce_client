import * as React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

/**
 * callback component to handle token response (callback) from idp
 *  - after successful login, idp redirect user to this callback component
 *  - you have to set this path in config of userManager
 *  - once users are redirected here, you can re-redirect user to another component (e.g., home component)
 **/
class Callback extends React.Component {
  constructor(props) {
    super(props);
  }

  successCallback(user) {
    // after user successfully log in, redirect to /home component
    props.push('/home');
  };

  errorCallback(error) {
    console.error(error);
  };

  render() {
    return (
      <CallbackComponent 
        successCallback={ successCallback } 
        errorCallback={ errorCallback }
      >
        <p>Redirecting....Hanging there...</p>
      </CallbackComponent>
    );
  }
}

export default connect(null, { push })(Callback);


