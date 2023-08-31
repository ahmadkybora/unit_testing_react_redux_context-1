import { shallow } from "enzyme";
import FuncLoop from "../components/funcLoop";

describe("", () => {
    let wrapper;
    // یک پراپرتی از نوع آرایه در کامپوننت ما وجود دارد
    const setup = (props={users: []}) => {
        return shallow(<FuncLoop {...props}/>);
    }
    test("loop test", () => {
        // برای تست صحت طول آرایه
        // یک مقدار را شبیه سازی میکنیم
        // و چک میکنیم که آیا برابر است
        let users = [
            { first_name: "John1", last_name: "Doe1" }, 
            { first_name: "John2", last_name: "Doe2" }, 
            { first_name: "John3", last_name: "Doe3" }, 
        ]
        wrapper = setup({users});
        const myUser = wrapper.find('.loop');
        expect(myUser.length).toBe(users.length);
    })
})