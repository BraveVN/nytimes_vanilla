var Review = require('./review');

var review = null

/**
 * Review Component test
 */
describe('Review component', () => {
  beforeEach(() => {
    initFakeData();
  });

  /**
   * Expect the Review component to be
   * rendered once & match with snapshot
   */
  test('render the Review component', () => {
    const wrapper = shallow(<Review review={review}/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Review review={review}/>).toJSON();
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
    wrapper = shallow(<Review review={review}/>);
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
 * Test method getPublishDate() of Review class
 */
describe('get publish date', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Review review={review}/>);
  });

  /**
   * Expect to return valid date format
   */
  test('should return correct date string in local format', () => {
    var dateString = faker.date.recent();
    var date = new Date(dateString);
    expect(wrapper.instance().getDate(dateString)).toBe(date.toLocaleDateString());
  });

  /**
   * Expect to return invalid date
   */
  test('should return null when date string is not valid', () => {
    expect(wrapper.instance().getDate(faker.lorem.words)).toBe('Invalid Date');
  });
});

/**
 * Create a fake data `Review`
 * object to use in the whole test
 */
function initFakeData() {
  review = {
    headline: 'Lorem ipsum dolor sit amet',
    publication_date: '2018-05-20T14:20:50.202Z',
    byline: 'CORVO BIANCO',
    summary_short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id luctus neque.',
    link: {
      url: 'https://www.google.com/'
    },
    multimedia: {
      src: 'https://www.example.com/example.jpg'
    }
  };
}