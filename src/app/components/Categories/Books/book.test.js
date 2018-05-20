var Book = require('./book');

var book = null;

describe('Book component', () => {
  beforeEach(() => {
    initFakeData();
  });

  test('render the Book component', () => {
    const wrapper = shallow(<Book book={book}/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Book book={book}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('handle modal action', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Book book={book}/>);
  });

  test('on close event', () => {
    wrapper.instance().handleClose();
    expect(wrapper.state().show).toBeFalsy();
  })

  test('on show event', () => {
    wrapper.instance().handleShow();
    expect(wrapper.state().show).toBeTruthy();
  })
})

describe('get publish date', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Book book={book}/>);
  });

  test('should return correct date string in local format', () => {
    var dateString = faker.date.recent();
    var date = new Date(dateString);
    expect(wrapper.instance().getPublicDate(dateString)).toBe(date.toLocaleDateString());
  });

  test('should return null when date string is not valid', () => {
    expect(wrapper.instance().getPublicDate(faker.lorem.words)).toBe('Invalid Date');
  });
});

describe('show description', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Book book={book}/>);
  });

  test('should return correct description', () => {
    expect(wrapper.instance().handleShowDescription()).toEqual(<h4>{book.description}</h4>);
  });

  test('should return No description', () => {
    book.description = null;
    expect(wrapper.instance().handleShowDescription()).toEqual(<h4><i>No description</i></h4>);
  });
});

function initFakeData() {
  book = {
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id luctus neque.',
    contributor: 'Brave Pham',
    price: 60,
    publisher: 'Sony Entertainment'
  }
}