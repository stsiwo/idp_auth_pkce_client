import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Callback from './Callback';
import Topic from './Topic';
import SilentRenew from './SilentRenew';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/topic" component={ Topic } />
        <Route path="/callback" component={ Callback } />
        <Route path="/silent-renew" component={ SilentRenew } />
      </div>
    );
  }
}

export default App;
