require('./articles.scss');
var React = require('react');
var Article = require('./article');
var ArticlesActions = require('../../../actions/ArticlesActions');
var ArticlesStore = require('../../../stores/ArticlesStore');

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    ArticlesStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    ArticlesActions.receiveArticles();
  }

  componentWillUnmount() {
    ArticlesStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      articles: ArticlesStore.getArticles()
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
