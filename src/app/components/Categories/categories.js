require('./categories.scss');
var React = require('react');
var Category = require('./category');
var axiosServices = require('../../axiosServices');

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.articlesList();
  }

  articlesList() {
    axiosServices.ArticlesSearch.all().then(res => {
      this.setState({categories: res.response.docs});
    });
  }

  render() {
    return (
      <div className="categories-container">
        <h2 className="title">
          Articles
        </h2>
        <div className="categories">
          {
            this.state.categories.map(function (category, i) {
              return <Category key={i} category={category}/>;
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = Categories;
