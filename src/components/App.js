import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import TVShows from '../containers/TVShows';

const App = () => (
  <Router>
    <Switch>
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={TVShows} />
        <Route path="/TVShows" exact component={} />
        <Route path="/TVShows/:id" exact component={} />
      </div>
    </Switch>
  </Router>
);

export default App;
