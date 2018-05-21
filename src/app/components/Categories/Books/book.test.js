var Book = require('./book');

var book = null;

/**
 * Book Component test
 */
describe('Book component', () => {
  beforeEach(() => {
    initFakeData();
  });

  /**
   * Expect the Book component to be
   * rendered once & match with snapshot
   */
  test('render the Book component', () => {
    const wrapper = shallow(<Book book={book}/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Book book={book}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/**
 * Test modal's methods
 */
describe('handle modal action', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Book book={book}/>);
  });

  /**
   * Expect handlClose method set `show` state to false
   */
  test('on close event', () => {
    wrapper.instance().handleClose();
    expect(wrapper.state().show).toBeFalsy();
  })

  /**
   * Expect handleShow method set `show` state to true
   */
  test('on show event', () => {
    wrapper.instance().handleShow();
    expect(wrapper.state().show).toBeTruthy();
  })
})

/**
 * Test method getPublishDate() of Article class
 */
describe('get publish date', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Book book={book}/>);
  });

  /**
   * Expect to return valid date format
   */
  test('should return correct date string in local format', () => {
    var dateString = faker.date.recent();
    var date = new Date(dateString);
    expect(wrapper.instance().getPublicDate(dateString)).toBe(date.toLocaleDateString());
  });

  /**
   * Expect to return invalid date
   */
  test('should return null when date string is not valid', () => {
    expect(wrapper.instance().getPublicDate(faker.lorem.words)).toBe('Invalid Date');
  });
});

/**
 * Test method handleShowDescription() of Book class
 */
describe('show description', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Book book={book}/>);
  });

  /**
   * Return a JSX element that contain information
   * when description is available
   */
  test('should return correct description', () => {
    expect(wrapper.instance().handleShowDescription()).toEqual(<h4>{book.description}</h4>);
  });

  /**
   * Return a JSX element to illustrate that
   * there's no description
   */
  test('should return No description', () => {
    book.description = null;
    expect(wrapper.instance().handleShowDescription()).toEqual(<h4><i>No description</i></h4>);
  });
});

/**
 * Create a fake data `book`
 * object to use in the whole test
 */
function initFakeData() {
  book = {
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id luctus neque.',
    contributor: 'Brave Pham',
    price: 60,
    publisher: 'Sony Entertainment'
  }
}