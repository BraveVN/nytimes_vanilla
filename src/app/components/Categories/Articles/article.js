var React = require('react');
require('./article.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppConstant = require('../../../constants/appConstants');

/**
 * Render a single element of Article in Articles list
 */
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
      /** Value of article prop will be used to render data in view */
      article: React.PropTypes.object.isRequired
    };
  }

  /**
   * Return a readable date from input
   *
   * @param {string} dateString
   *
   * Ex: 2018-05-21T13:28:41.003Z => 5/21/2018
   */
  getPublicDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  }

  /**
   * Return a JSX element that contain correct url to
   * media file if the type of media matchs the condition
   * or return a short desription to show that there's no
   * media.
   */
  getMediaUrl() {
    for (let i = 0; i < this.state.article.multimedia.length; i++) {
      const media = this.state.article.multimedia[i];
      if (media.subtype === 'xlarge') {
        return <img src={AppConstant.DOMAIN + media.url}/>;
      }
    }
    return <i>No media</i>;
  }

  /**
   * Handle Close action on modal.
   * Set `show` to false so it'll hide the modal
   */
  handleClose() {
    this.setState({show: false});
  }

  /**
   * Handle Show action on modal
   * Set `show` to true so it'll display the modal
   */
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
