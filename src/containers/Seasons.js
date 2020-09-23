import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import season from '../style/Seasons.module.css';
import showName from '../helpers/showName';
import callAPI from '../helpers/API';

const Seasons = ({ seasons, getSeasons, location }) => {
  const { error, pending, data = [] } = seasons;
  const { id } = useParams();
  const { show } = location.state;

  useEffect(() => {
    getSeasons(id, 0);
  }, []);

  if (error) {
    return (
      <div>{error}</div>
    );
  }
  if (pending) {
    return (
      <div className={season.wait}>...Loading...</div>
    );
  }

  return (
    <div className="container">
      <div className={season.shadow}>
        <div className={season.link}>
          <Link to="/" className="btn btn-secondary mt-3">
            &#60;&#60; Back to Home
          </Link>
        </div>
        <div className="card-deck d-flex justify-content-around mt-4">
          {data.map(season => (

            <div key={season.premiereDate} className="">
              <div className="card text-white bg-secondary mb-3" style={{ width: '20rem' }}>
                <div className="card-header">{showName(show)}</div>
                <div className="card-body">
                  <h5 className="card-title">
                    Season:
                    {season.number}
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Number of Episodes:
                      {season.episodeOrder}
                    </li>
                    <li className="list-group-item">
                      Premiere:
                      {season.premiereDate}
                    </li>
                    <li className="list-group-item">
                      End Date:
                      {season.endDate}
                    </li>
                    <li className="list-group-item text-center">
                      <Link
                        key={season.id}
                        to={{
                          pathname: `/TVShows/${show}/episodes`,
                          state: {
                            show,
                            number: season.number,
                          },
                        }}
                        className="btn btn-dark"
                      >
                        Go to Episodes
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

    </div>
  );
};

Seasons.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ show: PropTypes.string.isRequired }),
  }).isRequired,
  seasons: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getSeasons: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  seasons: {
    error: state.seasons.error,
    data: state.seasons.data,
    pending: state.seasons.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSeasons: callAPI,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
