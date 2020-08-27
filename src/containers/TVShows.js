import React from 'react';
import { Link } from 'react-router-dom';

const shows = ['TOS', 'TNG', 'VOY', 'DS9', 'ENT', 'DIS'];

const TVShows = () => (
  <div>
    {shows.map(show => (
      <Link to={`/TVShows/${show}`} className="" />
    ))}
  </div>
);

export default TVShows;
