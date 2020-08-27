import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import TVShows from '../containers/TVShows';

const App = () => (
  <Router>
    <Switch>
      <div className="bg-dark">
        <Route path="/" component={Header} />
        <Route exact path="/" component={TVShows} />
        <Route path="/TVShows/:id" exact component={} />
        <Route path="/TVShows" exact component={} />
      </div>
    </Switch>
  </Router>
);

export default App;