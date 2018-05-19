var React = require('react');
var Category = require('./category');
var axiosServices = require('../../axiosServices');

var styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

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
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Articles
        </h2>
        <div style={styles.categories}>
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
