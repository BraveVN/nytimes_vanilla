var TopStories = require('./topStories');

describe('TopStories component', () => {
  test('render the TopStories component', () => {
    const wrapper = shallow(<TopStories/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<TopStories/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
