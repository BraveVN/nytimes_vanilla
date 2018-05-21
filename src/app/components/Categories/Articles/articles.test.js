var Articles = require('./articles');

/**
 * Test the Articles component
 */
describe('Articles component', () => {
  /**
   * Expect the Articles component to be
   * rendered once & match with snapshot
   */
  test('render the Articles component', () => {
    const wrapper = shallow(<Articles/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Articles/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
