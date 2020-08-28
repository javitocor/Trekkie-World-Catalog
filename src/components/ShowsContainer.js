/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShowsObject from '../helpers/ShowsObject';
import showsContainer from '../style/ShowsContainer.module.css';

const ShowsContainer = props => {
  const { show } = props;
  const info = ShowsObject(show);
  return (
    <div className="col-md-12 mb-4">
      <div className="row">
        <div className="col-md-4">
          <img className="card-img-top" src={info.image} alt="Show cover" />
        </div>
        <div className="col-md-8 px-3">

          <div className="card-block px-3">
            <h5 className="card-title">{info.name}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{ __html: info.description }} />
          </div>
          <ul className="list-group list-group-flush list-group-horizontal w-75 m-auto">
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
            <li className="list-group-item">
              <Link
                key={show}
                to={{
                  pathname: `/TVShows/${show}`,
                  state: {
                    show,
                  },
                }}
                className="btn btn-secondary"
              >
                Go to Show
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

ShowsContainer.propTypes = {
  show: PropTypes.string.isRequired,
};

export default ShowsContainer;
