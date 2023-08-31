import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import HocRedux from '../components/classComponents/HocRedux';
import { storeFactory } from './utils';

// تست یک کلاس کامپوننت 
// برای دسترسی به استور
// و همچنین تست
// hoc
describe("", () => {
    let wrapper;
    let store;
    beforeEach(() => {
        // همانند فانکشنال کامپوننت
        // اینجا هم به استور دسترسی داریم
        // بوسیله زیر
        store = storeFactory();
        wrapper = mount(<Provider store={store}><HocRedux /></Provider>)
    })
    test("", () => {
        const state = store.getState();
        // console.log(state);
    })
})