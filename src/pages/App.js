import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Studio';
// Bring in common stylesheets, that contain stylesheets for the entire app.
import '../assets/scss/common.scss';

/**
 * Contains the routes for switching between pages
 * @return{React.Component}
 */
const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route exact path="/studio" component={Container} />
    </Switch>
  </Fragment>
);

export default App;
