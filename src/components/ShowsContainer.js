import React from 'react';
import PropTypes from 'prop-types';
import ShowsObject from '../helpers/ShowsObject';
import showsContainer from '../style/ShowsContainer.module.css';
import stringToHtmlTag from '../helpers/stringToHtmlTag';

const ShowsContainer = props => {
  const { show } = props;
  const info = ShowsObject(show);
  return (
    <div className="card text-white bg-secondary mb-3" style={{ width: '35rem' }}>
      <img className="card-img-top" src={info.image} alt="Show cover" />
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <p className="card-text">{stringToHtmlTag(info.description)}</p>
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
      <div className="card-footer">
        <small className="text-black-50">Space: the final frontier</small>
      </div>
    </div>
  );
};

ShowsContainer.propTypes = {
  show: PropTypes.string.isRequired,
};

export default ShowsContainer;
