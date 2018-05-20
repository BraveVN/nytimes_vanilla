var Article = require('./article');

var article = null;

describe('Article component', () => {
  beforeEach(() => {
    initFakeData();
  });

  test('render the Article component', () => {
    var wrapper = shallow(<Article article={article}/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Article article={article}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('get publish date', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Article article={article}/>);
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

describe('get media url', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Article article={article}/>);
  });

  test('should return no media when multimedia is empty', () => {
    article.multimedia = []
    expect(wrapper.instance().getMediaUrl()).toEqual(<i>No media</i>);
  });

  test('should return no media when subtype is invalid', () => {
    article.multimedia[0].subtype = faker.lorem.word();
    expect(wrapper.instance().getMediaUrl()).toEqual(<i>No media</i>);
  });

  test('should return correct media element', () => {
    expect(wrapper.instance().getMediaUrl()).toEqual(<img src={common.domain + article.multimedia[0].url}/>);
  })
});

describe('handle modal action', () => {
  var wrapper;
  beforeEach(() => {
    initFakeData();
    wrapper = shallow(<Article article={article}/>);
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

function initFakeData() {
  article = {
    web_url: 'https://www.google.com/',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id luctus neque.',
    source: 'Vivamus Cursus',
    multimedia: [{
      subtype: 'xlarge',
      url: 'image/example.jpg',
    }],
    headline: {
      main: 'Nulla magna massa, porttitor in lacinia eget, imperdiet nec neque.',
    },
    pub_date: '2018-05-20T14:20:50.202Z',
  }
}