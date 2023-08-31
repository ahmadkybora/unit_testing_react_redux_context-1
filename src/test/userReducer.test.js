import { GET_USER } from "../store/actions/actionType";
import userReducer from "../store/reducers/userReducer"
import { storeFactory } from "./utils";

// تست ریدیوسر
describe("userReducer", () => {
    test("GET_USER", () => {
        // تست تایپ مورد نظر در صورتی که یک آبجکت
        // خالی برگرداند
        const reducer = userReducer({}, { type: GET_USER });
        // بدلیل تغییر پذیر بودن آبجکت و همچنین آرایه
        // باید از این متد برای چک کردن استفاده کرد
        // obj and arr is mutable تغییر پذیر
        // and other is immutable تغییر ناپذیر
        expect(reducer).toStrictEqual({});
    });
    // تست در حالت دیفالت ریدیوسر
    // مقدار نال را برمیگرداند 
    // و پارامتر دوم هم بدلیل 
    // وجود نداشتن تایپ
    // یک آرایه خالی میگذاریم
    test("default", () => {
        const reducer = userReducer("null", {});
        expect(reducer).toBe("null")
    });
});

// دسترسی به استور بوسیله زیر
describe(("store test"), () => {
    test("", () => {
        // بوسیله متد زیر شما میتوانید با ذکر نام استیت مورد نظرتان
        // مقادیر آنرا تغییر دهید وتست کنید 
        // اگر استیت مورد نظر در استور اصلی نباشد
        // قطعا به شما خطا خواهد داد
        // بطور مثال
        const store = storeFactory({
            // بطور مثال میتوان مقادیر اولیه یک استیت 
            // را از استور اصلی در اینجا تغییر داد

            // userReducer: [
            //     { success: null }, 
            //     { user: [] },
            //     [],
            //     { ali: 2}
            // ]
        });
        // توجه داشته باشید متد زیر یکی از متدهای ریداکس تانک میباشد
        // که بوسیله متد زیر میتوان به همه ریدیوسرها دسترسی داشت
        // const state = store.getState();

        // البته شما میتوانید مستقیما به ریدیوسر مورد
        // نظر دسترسی داشته باشید
        // بوسیله مثال زیر
        // userReducer
        // یک ریدیوسر است
        const state = store.getState().userReducer;
        
        const m = [
            {first_name: "abcd"},
        ];

        // طبق مستندات بدلیل تغییر پذیر بودن
        // ـرتیه باید از متد زیر استفاده کرد
        expect(state).toStrictEqual(m);
    })
})

describe("", () => {
    let store;
    beforeEach(() => {
        store = storeFactory();
    })
    test("", () => {
        // const state = store.getState();
        // console.log(state);
    })
})

describe("تست مخزن", () => {
    // ابتدا تنظیمات اولیه را اینجا انجام میدهیم 
    let store;
    beforeEach(() => {
        // اگر در استور اصلی ریدیوسری وجود دارد میتوان از این قسمت
        // به ان مقدار داد بطور مثال
        //store = storeFactory({userReducer: [{ first_name: "John", last_name: "Doe" }]});
        store = storeFactory();
    });

    test("تست استیت", () => {
        // بوسیله متد زیر میتوانبم به مخزن دسترسی داشته باشیم
        const state = store.getState();
        // در این قسمت چک میکنیم که آیا مقدار استیت مورد نظر صحیح است
        const userReducer = [{first_name: "abcd"}];
        expect(state.userReducer).toStrictEqual(userReducer);
    })
})