var React = require('react');
require('./story.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var common = require('../../../services/common');

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      story: props.story,
    };
  }

  static get propTypes() {
    return {
      story: React.PropTypes.object.isRequired
    };
  }

  getDate(dateString) {
    var date = new Date(dateString);
    return date.toDateString();
  }

  getMediaUrl(url) {
    return common.domain + url;
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <div className="post">
        <a href={this.state.story.url} target="_blank" rel="noopener noreferrer">
          <h3>
            {this.state.story.title}
          </h3>
        </a>
        <p>{this.getDate(this.state.story.published_date)}</p>

        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Detail
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.story.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <i>{this.state.story.byline}</i>
            <p>{this.getDate(this.state.story.published_date)}</p>
            <p>{this.state.story.abstract}</p>
            {
              this.state.story.multimedia.map((media, index) => {
                if (media.format === 'superJumbo') {
                  return (
                    <div key={index}>
                      <img src={media.url}/>
                    </div>
                  )
                }
              })
            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = Story;
