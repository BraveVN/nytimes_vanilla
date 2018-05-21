var MovieReviews = require('./movieReviews');

/**
 * Test the MovieReviews component
 */
describe('MovieReviews component', () => {
  /**
   * Expect the MovieReviews component to be
   * rendered once & match with snapshot
   */
  test('render the MovieReviews component', () => {
    const wrapper = shallow(<MovieReviews/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<MovieReviews/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
