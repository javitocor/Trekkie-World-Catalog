import React from 'react';
import PropTypes from 'prop-types';
import ShowsObject from '../helpers/ShowsObject';

const ShowsContainer = props => {
  const { show } = props;
  const info = ShowsObject(show);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="..." alt="Show cover" />
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <p className="card-text">{info.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Premiered:
          {info.premiered}
        </li>
        <li className="list-group-item">
          Seasons:
          {info.seasons}
        </li>
        <li className="list-group-item">
          Episodes:
          {info.episodes}
        </li>
      </ul>
    </div>
  );
};

ShowsContainer.propTypes = {
  show: PropTypes.string.isRequired,
};

export default ShowsContainer;
