import * as React from 'react';
import { CallbackComponent } from 'redux-oidc';

class Callback extends React.Component {
  constructor(props) {
    super(props);
  }

  successCallback(user) {
    console.log(user);
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

export default Callback;


