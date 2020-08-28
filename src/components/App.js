import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import TVShows from './TVShows';
import Seasons from '../containers/Seasons';
import Episodes from '../containers/Episodes';

const App = () => (
  <Router>
    <Switch>
      <>
        <div className="">
          <Route path="/" component={Header} />
          <Route exact path="/" component={TVShows} />
          <Route path="/TVShows/:id" exact component={Seasons} />
          <Route path="/TVShows/:id/episodes" exact component={Episodes} />
        </div>
      </>
    </Switch>
  </Router>
);

export default App;
