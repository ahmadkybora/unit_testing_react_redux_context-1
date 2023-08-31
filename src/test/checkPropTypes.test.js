import { shallow } from "enzyme";
import checkPropTypes from 'check-prop-types';
import CheckProp from "../components/checkProp";


// این تست برای تست کردن پراپرتی هاست
describe("property test", () => {
    let wrapper;
    // اینجا شما میتوانید یک پراپرتی پاس دهید
    // در این قسمت یک آرایه و یک عدد و یک رسته ارسال شده است
    const setup = (props={ success: 1, user: "1", users: [] }) => {
         return shallow(<CheckProp {...props}/>);
    }

    wrapper = setup();  

    test("test prop number", () => {
        let p;
        // متد زیر برای تست کردن اعتبار سنجی پراپرتی است
        const myProp = checkPropTypes(CheckProp.propTypes, 'prop', p, CheckProp.name);
        // این متد تست میکند که آیا نوع داده ای عدد است
        expect.assertions(myProp);
    });

    test("test prop string", () => {
        let p;
        // متد زیر برای تست کردن اعتبار سنجی پراپرتی است
        const myUser = checkPropTypes(CheckProp.propTypes, 'prop', p, CheckProp.name);
        // این متد تست میکند که آیا نوع داده ای رشته است
        expect.stringContaining(myUser);
    });

    // در متد زیر چون یک آرایه پاس دادیم بعنوان پراپرتی
    // طول اندیس ارایه را تست میکنیم
    // تا ببینیم آیا مقدار اینجا با کامپوننت یکی است
    // توجه کنید اگر تعداد ارایه با ارای یکی نباشد خطا میدهد
    // و اگر غیر از ارایه پاس دهیم خطا میدهد
    test.skip("test loop", () => {
        let wrapper;
        const users = [
            { first_name: 'a', last_name: 'a1'}, 
            { first_name: 'b', last_name: 'b1'}, 
            { first_name: 'c', last_name: 'c1'}, 
        ];
        wrapper = setup({ success: 1, user: "1", users })
        const myUser = wrapper.find(".myUser");
        expect(myUser.length).toBe(users.length);
    });

    test("", () => {
        let wrapper;
        const users = [
            {first_name: "a1", last_name: "a2"}, 
            {first_name: "a1", last_name: "a2"}, 
            {first_name: "a1", last_name: "a2"}, 
        ]
        wrapper = setup({ success: 1, user: "", users });
        const myUser = wrapper.find(".myUser");
        expect(myUser.length).toBe(users.length);
    })
});

