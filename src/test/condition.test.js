import { shallow } from "enzyme"
import Condition from "../components/condition"

// چک کردن یک شرط بوسیله چک
// کردن مقدار یک متغییر از نوع بولین
test("condition test", () => {
    const setup = () => {
        return shallow(<Condition />);
    }
    let success = true;
    let wrapper = setup();

    expect(wrapper.state('success')).toBe(success);
})