require('./topStories.scss');
var React = require('react');
var Story = require('./story');
var topStoriesActions = require('../../../actions/topStoriesActions');
var topStoriesStore = require('../../../stores/topStoriesStore');

class TopStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    topStoriesStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    topStoriesActions.receiveStories();
  }

  componentWillUnmount() {
    topStoriesStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      topStories: topStoriesStore.getStories()
    });
  }

  render() {
    return (
      <div className="category-container">
        <h2 className="title">
          Top Stories
        </h2>
        <div className="category-content">
          {
            this.state.topStories.map(function (story, i) {
              return <Story key={i} story={story}/>;
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = TopStories;
