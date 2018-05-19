require('./category.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var React = require('react');

module.exports = class extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      category: props.category,
      publicDate: this.getPublicDate
    };
  }

  static get propTypes() {
    return {
      category: React.PropTypes.object.isRequired
    };
  }

  getPublicDate(dateString) {
    var date = new Date(dateString);
    return date.toDateString();
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <div className="category">
        <a href={this.state.category.web_url} target="_blank" rel="noopener noreferrer">
          <h3>
            {this.state.category.headline.main}
          </h3>
        </a>
        <p>{this.state.publicDate(this.state.category.pub_date)}</p>

        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Detail
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.category.headline.main}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Snippet: {this.state.category.snippet}</h4>
            <h4>Public date: {this.state.publicDate(this.state.category.pub_date)}</h4>
            <h4>Source: {this.state.category.source}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
