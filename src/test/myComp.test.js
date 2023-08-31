/**
 * ------------------------------------
 * 1/9/2020 9:0.AM ===> ahmad montazeri
 * ------------------------------------
 * در کدهای زیر ابتدا بوسیله ماک فانکشنهای کتابخانه
 * جست یک متد شبیه سازی کردیم و آن را به پراپ پاس دادیم
 * بعد از آن مقدار متغییر کونت را بوسیله دسترسی به عناصر دام به دست می اوریم
 * که راحتترین راه برای چک کردن هوک یوز استیت میباشد
 * ابتدا تست میکنیم آیا مقدار آن مساوی مقدار اولیه است
 * و سپس چک میکنیم بعد از رویدادی که شبیه سازی کردیم که اینجا آنکلیک میباشد
 * ایا تغییر انجام شده درست است بطور مثال بعد از هر کلیک مقدار متغییر کونت باید افزایش پیدا کند
 * 
 * در قسمت بعد هوک یوزافکت را تست میکنیم که بعد از هر تغییر چند بار صدا زده میشود 
 * پراپرتی مورد نظر داخل یوز افکت قرار دارد
 * و داخل آن استیت کونت قرار دارد
 * بوسیله شبیه سازی کردن رویداد میتوان فهمید که 
 * هوک یوزافکت چند بار صدا زده میشود
 * 
 */
import { mount } from "enzyme";
import MyComp from "../components/myComp";
import useCustomHook from "../components/useCustomHook";
import { act } from 'react-dom/test-utils';

// تست هوک یوزاستیت بوسیله دسترسی
// به دام وگرفتن مقدار ان بوسیله زیر
// و همچنین تست یوز افکت
describe("", () => {
    // اینجا از یک ماک فانکشن استفاده کریدم
    let onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<MyComp onCountChange={onCountChange}/>)
    });

    // قبل از اینکه کلیک شود
    // مقدار آن چک میشود
    test("قبل از کلیک شدن", () => {
        expect(wrapper.find('p').text()).toEqual('Count: 0');
    });
    // بعد از یکبار کلیک شدن
    // مقدار آن چک میشود
    test("بعد از یک کلیک", () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 1');
    });
    // بعد از چندبار کلیک شدن
    // مقدار آن چک میشود
    test("بعد از یک کلیک", () => {
        // کلیک اول
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 1');
        // کلیک دوم
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 2');
        // کلیک سوم
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 3');
    });

    test("بعد از هر کلیک", () => {
        // در این قسمت بوسیله متد زیر میتوان فهمید آیا تعداد
        // فراخوانده شدن یکی است
        expect(onCountChange).toBeCalledTimes(1);
        wrapper.find('button').simulate('click');
        expect(onCountChange).toBeCalledTimes(2);
    })
})

describe("useCustomHook", () => {
    let result;
    const renderHook = hook => {
        function HookWrapper() {
            result = useCustomHook();
            return null;
        }
        mount(<HookWrapper />);
        return result;
    }
    test("", () => {
        renderHook(useCustomHook);
        expect(result.count).toEqual(0);
        act(() => {
            result.increment();
        })
        expect(result.count).toEqual(1);
    })
})