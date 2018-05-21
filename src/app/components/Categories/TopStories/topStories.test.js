var TopStories = require('./topStories');

/**
 * Test the TopStories component
 */
describe('TopStories component', () => {
  /**
   * Expect the TopStories component to be
   * rendered once & match with snapshot
   */
  test('render the TopStories component', () => {
    const wrapper = shallow(<TopStories/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<TopStories/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
