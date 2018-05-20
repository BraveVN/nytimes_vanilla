var Articles = require('./articles');

describe('Articles component', () => {
  test('render the Articles component', () => {
    const wrapper = shallow(<Articles/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Articles/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
