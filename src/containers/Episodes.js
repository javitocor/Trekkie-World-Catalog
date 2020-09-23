/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { bindActionCreators } from 'redux';
import { changeFilter } from '../actions/index';
import EpisodeFilter from './EpisodeFilter';
import episode from '../style/Episodes.module.css';
import FilterEpisodes from '../helpers/FilterEpisodes';
import stringToHtmlTag from '../helpers/stringToHtmlTag';
import checkImage from '../helpers/checkImage';
import notFound from '../assets/images/notfound.jpg';
import callAPI from '../helpers/API';

class Episodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const { show } = location.state;
    const { getEpisodes } = this.props;
    getEpisodes(show);
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleFilterChange(event) {
    const { changeFilter } = this.props;
    const season = event.target.value;
    changeFilter(season);
  }

  render() {
    const { episodes, filter } = this.props;
    const filteredEpisodes = FilterEpisodes(filter, episodes.data);
    return episodes.data.length === 0 ? <div className={episode.wait}>...Loading...</div> : (
      <div className={episode.episodesContainer}>
        <div className={episode.filtering}>
          <Link to="/" className="btn btn-secondary mt-3">
            &#60;&#60; Back to Home
          </Link>
          <EpisodeFilter handleFilterChange={this.handleFilterChange} />
        </div>
        <div className="text-center bg.primary text-white-50 mb-5 w-50 mx-auto border-bottom border-secondary">
          <h2>
            Season
            {' '}
            {filter}
          </h2>
        </div>
        <div className={episode.episodes}>
          {filteredEpisodes.map(episode => (
            <div key={episode.id} className="card text-white bg-secondary mb-3" style={{ width: '23rem' }}>
              <img className="card-img-top" src={checkImage(episode)} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item m-auto">
                  <Button variant="secondary" onClick={() => this.handleShow()}>
                    View Episode Info
                  </Button>
                  <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header onClick={this.handleClose}>
                      <Modal.Title id="contained-modal-title-vcenter">
                        {episode.name}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={checkImage(episode)} />
                        <Card.Body>
                          <Card.Title>{episode.name}</Card.Title>
                          <Card.Text>
                            {stringToHtmlTag(episode.summary)}
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>
                            Season:
                            {episode.season}
                          </ListGroupItem>
                          <ListGroupItem>
                            Episode:
                            {episode.number}
                          </ListGroupItem>
                          <ListGroupItem>
                            AirDate:
                            {episode.airdate}
                          </ListGroupItem>
                        </ListGroup>
                      </Card>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
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
  episodes: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getEpisodes: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  episodes: {
    error: state.episodes.error,
    data: state.episodes.data,
    pending: state.episodes.pending,
  },
  filter: state.filter,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEpisodes: callAPI,
  changeFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
