import { shallow } from "enzyme";
import Loop from "../components/classComponents/loop";

// اینجا یک کامپوننت کلاس را تست میکنیم
// و یک پراپرتی پاس دادم دارای 3 مقدار
// که مانند فانکشنال چک میشود // ایا طول ان یکی است
describe("", () => {
    let wrapper;
    const users = [
        {first_name: "ahmad1", last_name: "montazeri1"},
        {first_name: "ahmad2", last_name: "montazeri2"},
        {first_name: "ahmad3", last_name: "montazeri3"},
    ];
    beforeEach(() => {
        wrapper = shallow(<Loop users={users}/>);
    })
    test("", () => {
        const loop = wrapper.find(".loop");
        expect(loop.length).toBe(users.length)
    })
})