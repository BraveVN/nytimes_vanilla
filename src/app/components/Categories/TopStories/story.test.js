var Story = require('./story');

var story = null;

/**
 * Story Component test
 */
describe('Story component', () => {
  beforeEach(() => {
    initFakeData();
  });

  /**
   * Expect the Story component to be
   * rendered once & match with snapshot
   */
  test('render the Story component', () => {
    const wrapper = shallow(<Story story={story}/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Story story={story}/>).toJSON();
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
    wrapper = shallow(<Story story={story}/>);
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
 * Test method getPublishDate() of Story class
 */
describe('get publish date', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Story story={story}/>);
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
 * Test method getMediaUrl() of Story class
 */
describe('get media url', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Story story={story}/>);
  });

  /**
   * Expect to return an element that illustrate
   * that there's no media when input array is empty
   */
  test('should return no media when multimedia is empty', () => {
    story.multimedia = []
    expect(wrapper.instance().getMediaUrl()).toEqual(<i>No media</i>);
  });

  /**
   * Expect to return an element that illustrate
   * that there's no media when the conditon is not match
   */
  test('should return no media when format is invalid', () => {
    story.multimedia[0].format = 'lorem';
    expect(wrapper.instance().getMediaUrl()).toEqual(<i>No media</i>);
  });

  /**
   * Expect to return an element that illustrate the valid image
   */
  test('should return correct media element', () => {
    expect(wrapper.instance().getMediaUrl()).toEqual(<img src={story.multimedia[0].url}/>);
  })
});

/**
 * Create a fake data `story`
 * object to use in the whole test
 */
function initFakeData() {
  story = {
    title: 'Lorem ipsum dolor sit amet',
    published_date: '2018-05-20T14:20:50.202Z',
    byline: 'TOUSSAINT',
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id luctus neque.',
    url: 'https://www.google.com/',
    multimedia: [{
      format: 'superJumbo',
      url: 'https://www.example.com/example.jpg'
    }]
  };
}
