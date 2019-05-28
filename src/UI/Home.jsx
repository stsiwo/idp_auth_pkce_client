import * as React from 'react';
import userManager from '../config/oidc';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogin(e) {
    e.preventDefault();
    userManager.signinRedirect(); 
  }

  render() {
    return (
      <div>
        <button type="button" onClick={ this.handleLogin }>Login</button>
      </div>
    );
  }
}

export default Home;
