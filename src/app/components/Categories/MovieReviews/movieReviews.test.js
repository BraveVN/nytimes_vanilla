var MovieReviews = require('./movieReviews');

describe('MovieReviews component', () => {
  test('render the MovieReviews component', () => {
    const wrapper = shallow(<MovieReviews/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<MovieReviews/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
