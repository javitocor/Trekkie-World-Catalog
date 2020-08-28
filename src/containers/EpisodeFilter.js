import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import episodeFilter from '../style/EpisodeFilter.module.css';

function EpisodeFilter(props) {
  const { handleFilterChange, seasons } = props;
  const seasonsLength = seasons.length;
  const NumSeasons = [...Array(seasonsLength)].map((_, i) => i + 1);
  const dropMenu = NumSeasons.map(
    number => (
      <option key={number} value={number}>
        Season
        {' '}
        {number}
      </option>
    ),
  );
  return (
    <div className={episodeFilter.form}>
      <label htmlFor="filter">Filter by Season</label>
      <select className="" name="filter" id="filter" onChange={event => handleFilterChange(event)}>
        <option value="All">All</option>
        {dropMenu}
      </select>
    </div>
  );
}

EpisodeFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  seasons: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  seasons: state.seasons,
});

export default connect(mapStateToProps)(EpisodeFilter);
