
var Books = require('./books');

describe('Books component', () => {
  test('render the Books component', () => {
    const wrapper = shallow(<Books/>);
    expect(wrapper.length).toBe(1);

    var tree = renderer.create(<Books/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
