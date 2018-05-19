var React = require('react');
require('./article.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var CommonService = require('../../../commonServices');

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      article: props.article,
    };
  }

  static get propTypes() {
    return {
      article: React.PropTypes.object.isRequired
    };
  }

  getPublicDate(dateString) {
    var date = new Date(dateString);
    return date.toDateString();
  }

  getMediaUrl(url) {
    return CommonService.domain + url;
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <div className="article">
        <a href={this.state.article.web_url} target="_blank" rel="noopener noreferrer">
          <h3>
            {this.state.article.headline.main}
          </h3>
        </a>
        <p>{this.getPublicDate(this.state.article.pub_date)}</p>

        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Detail
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.article.headline.main}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.state.article.snippet}</h4>
            {
              this.state.article.multimedia.map((media, index) => {
                if (media.subtype === 'xlarge') {
                  return (
                    <div key={index}>
                      <img src={this.getMediaUrl(media.url)}/>
                    </div>
                  )
                }
              })
            }
            <i>{this.getPublicDate(this.state.article.pub_date)} - {this.state.article.source}</i>
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
