require('./articles.scss');
var React = require('react');
var Article = require('./article');
var articlesActions = require('../../../actions/articlesActions');
var articlesStore = require('../../../stores/articlesStore');

/**
 * A component that render a list of all Article
 */
class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Add an event listener with a callback
   * method before component is invoked
   */
  componentWillMount() {
    articlesStore.addChangeListener(this.onChange);
  }

  /**
   * Get Articles data from API when component is mounted
   */
  componentDidMount() {
    articlesActions.receiveArticles();
  }

  /**
   * Remove event listener after component is unmounted
   */
  componentWillUnmount() {
    articlesStore.removeChangeListener(this.onChange);
  }

  /**
   * Callback method to change articles' value
   */
  onChange() {
    this.setState({
      articles: articlesStore.getArticles()
    });
  }

  render() {
    return (
      <div className="category-container">
        <h2 className="title">
          Articles
        </h2>
        <div className="category-content">
          {
            this.state.articles.map(function (article, i) {
              return <Article key={i} article={article}/>;
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = Articles;
