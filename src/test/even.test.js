import { shallow } from "enzyme";
import Even from "../components/even";
import { renderHook } from '@testing-library/react-hooks'
import useCounter from "../components/form";

/**
 * test is correct 
 */
describe("click test", () => {
    let wrapper;
    // یک فانکشن شبیه سازی میکند
    let testClick = jest.fn();
    let user = {
        id: 12
    }
    // کارهای اولیه پر تکرار را اینجا بنویسید
    beforeEach(() => {
        wrapper = shallow(<Even user={user} handleClick={testClick}/>);
    })
    test("تست تعداد کلیک شدن", () => {
        // یک رویداد شبیه سازی میکند
        wrapper.find('button').simulate('click');
        // تعداد کلیک شدن محاسبه میشود
        expect(testClick.mock.calls.length).toBe(1)
    })
    test("تست مقدار", () => {
        wrapper.find('button').simulate('click');
        // مقدار مورد نظر چک میشود
        expect(testClick).toBeCalledWith(12);
    })
});

/**
 * test is incorrect 
 */
describe.skip("", () => {
    let wrapper;
    // یک فانکشن شبیه سازی میکند
    let testClick = jest.fn();
    let user = {
        id: 12
    }
    // کارهای اولیه پر تکرار را اینجا بنویسید
    beforeEach(() => {
        wrapper = shallow(<Even user={user} handleClick={testClick}/>);
    })
    test('should use counter', () => {
        expect(wrapper.text()).toContain("1");
    })
})

describe("", () => {
    let wrapper;
    // یک فانکشن شبیه سازی میکند
    let testClick = jest.fn();
    let user = {
        id: 12
    }
    // کارهای اولیه پر تکرار را اینجا بنویسید
    beforeEach(() => {
        wrapper = shallow(<Even user={user} handleChange={e=>e.target.value} handleClick={testClick}/>);
    })
    test('should use counter', () => {
        wrapper.find('form').simulate('change');

        // expect(wrapper.text()).toContain("1");
    })
})

