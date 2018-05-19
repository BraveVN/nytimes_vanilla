require('./articles.scss');
var React = require('react');
var Article = require('./article');
var axiosServices = require('../../../axiosServices');

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.articlesList();
  }

  articlesList() {
    axiosServices.ArticlesSearch.all().then(res => {
      this.setState({articles: res.response.docs});
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
