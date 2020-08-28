/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEpisodes, changeFilter } from '../actions/index';
import EpisodeFilter from './EpisodeFilter';
import episode from '../style/Episodes.module.css';
import FilterEpisodes from '../helpers/FilterEpisodes';
import stringToHtmlTag from '../helpers/stringToHtmlTag';
import checkImage from '../helpers/checkImage';
import notFound from '../assets/images/notfound.jpg';

class Episodes extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const { show } = location.state;
    const { getEpisodes } = this.props;
    getEpisodes(show);
  }

  handleFilterChange(event) {
    const { changeFilter } = this.props;
    const season = event.target.value;
    changeFilter(season);
  }

  render() {
    const { location } = this.props;
    const { number } = location.state;
    const { episodes, filter } = this.props;
    const filteredEpisodes = FilterEpisodes(filter, episodes);
    return episodes.length === 0 ? <div className={episode.wait}>...Loading...</div> : (
      <div className={episode.episodesContainer}>
        <div className={episode.filtering}>
          <Link to="/" className="btn btn-secondary mt-3">
            &#60;&#60; Back to Home
          </Link>
          <EpisodeFilter handleFilterChange={this.handleFilterChange} />
        </div>
        <div className={episode.episodes}>
          {filteredEpisodes.map(episode => (
            <div key={episode.id} className="card text-white bg-secondary mb-3" style={{ width: '25rem' }}>
              <img className="card-img-top" src={checkImage(episode)} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <p className="card-text">{stringToHtmlTag(episode.summary)}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item m-auto">
                  <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                    View Episode Info
                  </button>
                  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content  bg-secondary">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">{episode.name}</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body m-auto">
                          <div key={episode.id} className="card  bg-secondary" style={{ width: '23rem' }}>
                            <img className="card-img-top" src={checkImage(episode)} alt="Card cap" />
                            <div className="card-body">
                              <h5 className="card-title text-white">{episode.name}</h5>
                              <p className="card-text text-white">{stringToHtmlTag(episode.summary)}</p>
                            </div>
                            <ul className="list-group list-group-flush bg-secondary">
                              <li className="list-group-item  text-white">
                                Season:
                                {episode.season}
                              </li>
                              <li className="list-group-item  text-white">
                                Episode:
                                {episode.number}
                              </li>
                              <li className="list-group-item  text-white">
                                AirDate:
                                {episode.airdate}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

    );
  }
}

Episodes.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      show: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  }).isRequired,
  episodes: PropTypes.instanceOf(Object).isRequired,
  getEpisodes: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  episodes: state.episodes,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getEpisodes: show => {
    dispatch(getEpisodes(show));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
