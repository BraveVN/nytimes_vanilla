var Review = require('./review');

var review = null

describe('Review component', () => {
  beforeEach(() => {
    initFakeData();
  });

  test('render the Review component', () => {
    const wrapper = shallow(<Review review={review}/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Review review={review}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('handle modal action', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Review review={review}/>);
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
    wrapper = shallow(<Review review={review}/>);
  });

  test('should return correct date string in local format', () => {
    var dateString = faker.date.recent();
    var date = new Date(dateString);
    expect(wrapper.instance().getDate(dateString)).toBe(date.toLocaleDateString());
  });

  test('should return null when date string is not valid', () => {
    expect(wrapper.instance().getDate(faker.lorem.words)).toBe('Invalid Date');
  });
});

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