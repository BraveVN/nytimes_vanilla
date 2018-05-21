require('./topStories.scss');
var React = require('react');
var Story = require('./story');
var topStoriesActions = require('../../../actions/topStoriesActions');
var topStoriesStore = require('../../../stores/topStoriesStore');

/**
 * A component that render a list of all Story
 */
class TopStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: []
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Add an event listener with a callback
   * method before component is invoked
   */
  componentWillMount() {
    topStoriesStore.addChangeListener(this.onChange);
  }

  /**
   * Get Stories data from API when component is mounted
   */
  componentDidMount() {
    topStoriesActions.receiveStories();
  }

  /**
   * Remove event listener after component is unmounted
   */
  componentWillUnmount() {
    topStoriesStore.removeChangeListener(this.onChange);
  }

  /**
   * Callback method to change topStories' value
   */
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
