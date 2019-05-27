import * as React from 'react';
import { processSilentRenew } from 'redux-oidc';

// this component is just for executing 'processSilentRenew' method 
class SilentRenew extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    processSilentRenew();
    return (
      <p>renewing token...</p>
    );
  }
}

export default SilentRenew;


