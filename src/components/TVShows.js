import React from 'react';
import { Link } from 'react-router-dom';
import ShowsContainer from './ShowsContainer';

const shows = ['TOS', 'TNG', 'VOY', 'DS9', 'ENT', 'DIS'];

const TVShows = () => (
  <div className="container mt-5 border-dark">
    <div className="card-deck d-flex justify-content-between">
      {shows.map(show => (
        <Link
          key={show}
          to={{
            pathname: `/TVShows/${show}`,
            state: {
              show,
            },
          }}
          className=""
        >
          <ShowsContainer show={show} />

        </Link>
      ))}
    </div>
  </div>
);

export default TVShows;
