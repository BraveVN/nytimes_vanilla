require('./articles.scss');
var React = require('react');
var Article = require('./article');
var articlesActions = require('../../../actions/articlesActions');
var articlesStore = require('../../../stores/articlesStore');

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    articlesStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    articlesActions.receiveArticles();
  }

  componentWillUnmount() {
    articlesStore.removeChangeListener(this.onChange);
  }

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
