import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Studio';
// Bring in my custom sass stylesheets
import '../assets/scss/custom.scss';

/**
 * Contains the routes for switching between pages
 * @return{React.Component}
 */
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route exact path="/studio" component={Container} />
    </Switch>
  </div>
);

export default App;
