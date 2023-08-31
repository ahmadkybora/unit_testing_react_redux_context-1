import { shallow } from 'enzyme';
import TestState from '../components/classComponents/testState';

describe("test state", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TestState />);
    });

    test("", () => {
        expect(wrapper.state("user")).toBe(0);
    })
})