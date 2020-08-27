import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import TVShows from '../containers/TVShows';
import Seasons from '../containers/Seasons';
import Episodes from '../containers/Episodes';

const App = () => (
  <Router>
    <Switch>
      <div className="bg-dark">
        <Route path="/" component={Header} />
        <Route exact path="/" component={TVShows} />
        <Route path="/TVShows/:id" exact component={Seasons} />
        <Route path="/TVShows/:id/episodes" exact component={Episodes} />
      </div>
    </Switch>
  </Router>
);

export default App;
