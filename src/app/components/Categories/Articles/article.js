var React = require('react');
require('./article.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var common = require('../../../services/common');

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      article: props.article
    };
  }

  static get propTypes() {
    return {
      article: React.PropTypes.object.isRequired
    };
  }

  getPublicDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  }

  getMediaUrl() {
    for (let i = 0; i < this.state.article.multimedia.length; i++) {
      const media = this.state.article.multimedia[i];
      if (media.subtype === 'xlarge') {
        return <img src={common.domain + media.url}/>;
      }
    }
    return <i>No media</i>;
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <div className="post" onClick={this.handleShow}>
        <h4>
          {this.state.article.headline.main}
        </h4>
        <p className="date">Published: {this.getPublicDate(this.state.article.pub_date)}</p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              {this.state.article.headline.main}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="italic-text">
              {this.getPublicDate(this.state.article.pub_date)}
            </p>
            <h4>
              {this.state.article.snippet}
            </h4>
            <p className="italic-text">
              Read it on <a href={this.state.article.web_url} target="_blank" rel="noopener noreferrer">{this.state.article.source}</a>
            </p>
            <div className="media">{this.getMediaUrl()}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = Article;
