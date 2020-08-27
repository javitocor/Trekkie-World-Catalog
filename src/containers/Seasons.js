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
    const { state } = this.props;
    getSeasons(state.show);
  }

  render() {
    const { seasons, state } = this.props;
    return (
      <div>
        {seasons.map(season => (
          <Link
            key={season.id}
            to={{
              pathname: `/TVShows/${state.show}/episodes`,
              state: {
                show: state.show,
              },
            }}
            className=""
          >
            <div className="card text-white bg-primary mb-3" style={{ width: '18rem' }}>
              <div className="card-header">{state.show}</div>
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
  state: PropTypes.string.isRequired,
  seasons: PropTypes.instanceOf(Object).isRequired,
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
