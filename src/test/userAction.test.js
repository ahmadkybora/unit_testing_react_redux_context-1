import { getUser } from "../store/actions/userAction";

// تست اکشن
describe("test userAction", () => {
    test("check userAction", () => {
        // ابتدا متد مورد نظر راایمپورت کرده و بعد از آن داخل 
        // یک متغییر میریزیم و سپس مقدار داخل آن را با مقدار داخل کامپوننت چک 
        // میکنیم
        const store = getUser();
        const type = store.type;
        const payload = store.payload;

        expect(store).toEqual({ 
            type, 
            payload,
            
            // type: "GET_USER", 
            // payload: 2 
        });
    })
})