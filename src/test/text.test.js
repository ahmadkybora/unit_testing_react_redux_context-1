import { shallow } from "enzyme"
import Text from '../components/text';

// چک میکند در صورتی که مقدار
// پاراگراف مورد نظر یکی باشد
test("pragraph", () => {
    let wrapper = shallow(<Text />);
    const p = wrapper.find('p');
    expect(p.text()).toContain("Hello World");
})