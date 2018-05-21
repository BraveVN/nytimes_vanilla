
var Books = require('./books');

/**
 * Test the Books component
 */
describe('Books component', () => {
  /**
   * Expect the Books component to be
   * rendered once & match with snapshot
   */
  test('render the Books component', () => {
    const wrapper = shallow(<Books/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Books/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
