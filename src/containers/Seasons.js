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
    const { seasons } = this.props;
    return (
      <div>
        {seasons.map(season => (
          <Link
            key={season.id}
            to={{
              pathname: `/TVShows/${state.show}`,
              state: {
                show,
              },
            }}
            className=""
          >
            aaaaaa

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
