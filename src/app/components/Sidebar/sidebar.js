var React = require('react');
require('./sidebar.scss');

class Sidebar extends React.Component {
  render() {
    const categoriesTitle = [
      'Articles',
      'Books',
      'Most popular',
      'Movie reviews',
      'Top stories'
    ];
    return (
      <ul className="sidebar">
        {
          categoriesTitle.map((categoryName, index) => {
            return (
              <li key={index}>
                <a href="#">{categoryName}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

module.exports = Sidebar;
