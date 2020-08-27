import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEpisodes } from '../actions/index';
import episode from '../style/Episodes.module.css';

class Episodes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { show } = this.props.location.state;
    const { getEpisodes } = this.props;
    getEpisodes(show);
  }

  render() {
    const { episodes } = this.props;
    return episodes.length === 0 ? <div>Please wait</div> : (
      <div className="m-4">
        <div className={episode.episodes}>
          {episodes.map(episode => (
            <div key={episode.id} className="card text-white bg-secondary mb-3" style={{ width: '15rem' }}>
              <img className="card-img-top" src={episode.image.original} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <p className="card-text">{episode.summary}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Season:
                  {episode.season}
                </li>
                <li className="list-group-item">
                  Episode:
                  {episode.number}
                </li>
                <li className="list-group-item">
                  AirDate:
                  {episode.airdate}
                </li>
                <li className="list-group-item">
                  <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
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
                          <div key={episode.id} className="card  bg-secondary" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={episode.image.original} alt="Card cap" />
                            <div className="card-body">
                              <h5 className="card-title text-white">{episode.name}</h5>
                              <p className="card-text text-white">{episode.summary}</p>
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
    state: PropTypes.shape({ show: PropTypes.string.isRequired }),
  }).isRequired,
  episodes: PropTypes.instanceOf(Object).isRequired,
  getEpisodes: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  episodes: state.episodes,
});

const mapDispatchToProps = dispatch => ({
  getEpisodes: show => {
    dispatch(getEpisodes(show));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
