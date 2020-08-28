import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSeasons } from '../actions/index';
import season from '../style/Seasons.module.css';
import showName from '../helpers/showName';

class Seasons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { location } = this.props;
    const { show } = location.state;
    const { getSeasons } = this.props;
    getSeasons(show);
  }

  render() {
    const { seasons } = this.props;
    const { location } = this.props;
    const { show } = location.state;
    return seasons.length === 0 ? <div className={season.wait}>...Loading...</div> : (
      <div className="container">
        <div>
          <Link to="/" className="btn btn-link mt-3">
            Back to Home
          </Link>
        </div>
        <div className="card-deck d-flex justify-content-between mt-4">
          {seasons.map((season, index) => (

            <div key={index + 10} className="">
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
    );
  }
}

Seasons.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ show: PropTypes.string.isRequired }),
  }).isRequired,
  seasons: PropTypes.instanceOf(Object).isRequired,
  getSeasons: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  seasons: state.seasons,
});

const mapDispatchToProps = dispatch => ({
  getSeasons: show => {
    dispatch(getSeasons(show));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
