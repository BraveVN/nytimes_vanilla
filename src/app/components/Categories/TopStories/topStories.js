require('./topStories.scss');
var React = require('react');
var Story = require('./story');
var axios = require('../../../services/axios');

class TopStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: []
    };
  }

  componentDidMount() {
    this.topStoriesArtsList();
  }

  topStoriesArtsList() {
    axios.TopStories.arts().then(res => {
      this.setState({topStories: res.results});
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
