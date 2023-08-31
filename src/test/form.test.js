import { fireEvent, render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import React, { useContext } from "react";
import Form from "../components/form";
import { userContext } from "../contexts/userContext";

/**
 * This test is correct!
 */
// const mockSetCurrentGuess = jest.fn();
//   jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

// jest.mock('react', ()=>({
//     ...jest.requireActual('react'),
//     useState: jest.fn()
// }));

/**
 * This test is correct!
 */
describe("form test", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Form />);
    })
    test("تست اینکه اگر ورودی وجود دارد", () => {
        const myInput = wrapper.find(".myInput");
        expect(myInput.length).toBe(1);
    });
    test("تست اینکه اگر ورودی وجود دارد", () => {
        const myInput = wrapper.find("form");
        expect(myInput.text()).toBe("ss");
    });
})

/**
 * This test is correct!
 */
// در تست زیر چون متد آنچنج یک
// پراپرتی است میتوان براحتی به آن دسترسی داشت
describe("test onChange", () => {
    let wrapper;
    // beforeEach(() => {
        const testState = { width: 10, height: 20 };
        // اسم رویداد باید یکی باشد
        wrapper = shallow(<Form handleChange={(e) => {
                testState[e.target.name] = e.target.value;
          }}/>);
    // });
    // در مثال زیر متد at
    // یک عدد میگیرد که نشان دهند تعداد آن المنت است
    // بطور مثال داخل این کامپوننت ما دو المنت اینپوت داریم و اندیس یک نشان دهنده
    // اینپوت دومی است
    wrapper.find('input').at(1).simulate('change', { target: { name: 'width', value: 50 } });
    expect(testState.width).toEqual(50);
})

/**
 * This test is uncorrect !
 */
describe.skip("test onChange", () => {
    const setup = (props={}) => {
        return shallow(<Form {...props}/>);
    }
    // متد jest.fn
    // این متد یک ماک فانکشن است که باعث میشودشما حالت همان فانکشن را شبیه سازی کنید 
    let testOnChange = jest.fn();
    let wrapper = setup();
    // متد beforeach
    // برای زمانی است که شما کارهای اولیه پر تکرار را یک بار انجام میدهید
    beforeEach(() => {
        // React.useState = () => ["", testOnChange];
        wrapper = setup();
    })
    test('تست رویداد change', () => {
        const myInput = wrapper.find('.myInput'); 
        const targetValue = { target: { value: '1' } };

        myInput.simulate("change", targetValue);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('1');
    });

    // let wrapper;
    // beforeEach(() => {
    //     wrapper = shallow(<Form />);
    // })

    // test("1", () => {
    //     const testState = { width: 10, height: 20 };
    //     wrapper.find('input').at(0).simulate('change1', { target: { name: 'height', value: 70 } });
    //     expect(testState.width).toEqual(10);

    //     const testChange = { name: 'count', value: 30 }
    //     const myInput = wrapper.find('.myInput');
    //     myInput.simulate('change1', testChange);
    //     expect(testChange.name).toEqual('count')
    // })
});

/**
 * This test is correct !
 */
describe("onSubmit test", () => {
    let wrapper;
    const testOnSubmit = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<Form handleSubmit={testOnSubmit} />);
    });
    // در این قسمت تست میکنیم که رویداد مورد 
    // نظر چند بار انجام شده است
    test("تست تعداد رویداد", () => {
        wrapper.find('form').simulate('submit');
        expect(testOnSubmit.mock.calls.length).toEqual(1);
    });

    test("تست تعداد رویداد", () => {
        // بوسیله متد زیر میتوان به پراپ ها دسترسی داشت
        // wrapper.props()
        
        // بوسیله تست زیر میتوان استیت مورد نظر را چک کرد
        // تابع ماک زیر 2 ارگومان میگیرد اولی آبجکت
        // دومی متد مورد نظر
        // jest.spyOn(object, methodName)
        // const handleSubmit = jest.spyOn(React, "useState");
        // // تابع ماک زیر برای پیاده سازی استفاده میشود
        // handleSubmit.mockImplementation(me => [me, testOnSubmit]);
        // const mySubmit = wrapper.find("form");
        // mySubmit.simulate("submit");
        // expect(testOnSubmit).toBeTruthy();



        // const testOnSubmit = jest.fn();
        // const handleSubmit = jest.spyOn(React, 'useState');
    
        // handleSubmit.mockImplementation((init) => [init, testOnSubmit]);
        // const mySubmit = wrapper.find("form");
        // mySubmit.simulate('submit');
        // expect(testOnSubmit).toHaveBeenCalledWith(1);



        // wrapper.find('form').simulate('submit');
        // expect(testOnSubmit).toHaveBeenCalledWith(1);
    });
    // let wrapper;
    // let testOnChange = jest.fn();
    // React.useState = () => ["", testOnChange];
    // beforeEach(() => {
    //     wrapper = shallow(<Form />)
    // })
    // test("تست اینکه اگر ورودی وجود دارد", () => {

    //     const myForm = wrapper.find("form");
    //     const targetValue = { target: { value: '1' } };

    //     myForm.simulate('submit', targetValue);
    //     expect(testOnChange).toHaveBeenCalledWith('1');
    // });

});

/**
 * This test is correct !
 */
describe("onClick", () => {
    let wrapper;
    // بوسیله متد زیر یک فانکشن شبیه سازی کردیم
    // تا بتوانیم به رویدا آنکلیک دسترسی داشته باشیم
    let testOnClick = jest.fn();
    let user = {
        id: 11,
        first_name: 'ahmad',
        last_name: 'montazeri',
        age: 12
    }
    beforeEach(() => {
        // اسم رویداد باید یکی باشد
        wrapper = shallow(<Form user={user} handleClick={testOnClick}/>);
        // wrapper = render(<Form user={user} handleClick={testOnClick}/>);
    })
    // تست تعداد کلیک شدن رویداد آنکلیک
    test("تست تعداد کلیک", () => {
        // بوسیله متد زیر میتوان فهمید رویداد مورد نظر چند بار اجرا شده است
        wrapper.find('button').simulate('click');
        expect(testOnClick.mock.calls.length).toEqual(1);
    });
    // تست اینکه بعد از کلیک مقدار آن چقدر است
    // یا اینکه مقدار اولیه آن چقدر است
    test("مقدار", () => {
        wrapper.find('button').simulate('click');
        expect(testOnClick).toHaveBeenCalledWith(11);
    })
        // let checkState = jest.fn();
        // React.useState = ["", checkState];
        // expect(checkState).toBe(1)
        //wrapper.find('button').simulate('click');
        // const mockCallBack = jest.fn();

        // const button = shallow((<Form onClick={mockCallBack} />));
        // button.find('button').simulate('click');
        // expect(mockCallBack.mock.calls.length).toEqual(1);

        // const mySpy = new MySpy();
        // const mockCallBack = mySpy.fn();
      
        // const button = shallow((<Form onClick={mockCallBack}>Ok!</Form>));
      
        // button.find('button').simulate('click');
        // expect(mySpy.calls).toEqual(1);

        // const myBtn = wrapper.find('button');
        // myBtn.simulate('button');
        // const mockCallBack = jest.fn(myBtn);
        // expect(mockCallBack.mock.calls.length).toEqual(1);
        // // expect(myBtn.length).toBe(1);
})

describe("", () => {


    // let testOnClick = jest.fn();
    // let wrapper = setup();
    // // بوسیله تست زیر میتوان استیت مورد نظر را چک کرد
    // // تابع ماک زیر 2 ارگومان میگیرد اولی آبجکت
    // // دومی متد مورد نظر
    // // jest.spyOn(object, methodName)
    // const handleClick = jest.spyOn(React, "useState");
    // // تابع ماک زیر برای پیاده سازی استفاده میشود
    // handleClick.mockImplementation(me => [me, testOnClick]);

	// const contextValues = {name: 'Annie'};
	// jest.spyOn(React, 'useContext')
	// 		.mockImplementation(() => contextValues);
	// const wrapper = shallow(<Form/>);
	// expect(wrapper.find('h1').text()).toBe('Hello Annie');
})