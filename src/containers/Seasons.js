import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSeasons } from '../actions/index';

class Seasons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { show } = this.props.location.state;
    const { getSeasons } = this.props;
    getSeasons(show);
  }

  render() {
    const { seasons } = this.props;
    const { show } = this.props.location.state;
    return seasons.length === 0 ? <div className="">Please wait</div> : (
      <div>
        {seasons.map(season => (
          <Link
            key={season.id}
            to={{
              pathname: `/TVShows/${show}/episodes`,
              state: {
                show,
              },
            }}
            className=""
          >
            <div className="card text-white bg-primary mb-3" style={{ width: '18rem' }}>
              <div className="card-header">{show}</div>
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
                </ul>
              </div>
            </div>

          </Link>
        ))}
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
