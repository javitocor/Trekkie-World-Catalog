import React from 'react';
import ShowsContainer from './ShowsContainer';

const shows = ['TOS', 'TNG', 'VOY', 'DS9', 'ENT', 'DIS'];

const TVShows = () => (
  <>
    <section className="jumbotron jumbotron-fluid text-center">
      <div className="container py-5">
        <h1 className="display-4">All Star Trek TV Shows</h1>
        <p className="lead text-muted">
          I’ve pulled together the most popular Star Trek TV Shows, Captain Kirk, Captain Picard
          and all your favourites characters available in one click.
        </p>
      </div>
    </section>
    <div className="py-5">
      <main className="container">
        <div className="row">
          {shows.map(show => (

            <ShowsContainer key={show} show={show} />

          ))}
        </div>
      </main>
    </div>
  </>
);

export default TVShows;
