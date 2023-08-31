import { GET_PRODUCTBYID, GET_PRODUCTS } from "../store/actions/actionType";
import { getAllProducts, getProductById } from "../store/actions/prodcutAction"

describe("test action", () => {
    test("", () => {
        const state = getAllProducts();
        // مقادیر مورد نظر چک میشود
        expect(state).toStrictEqual({ type: GET_PRODUCTS, payload: null })
    })
    test("", () => {
        const state = getProductById();
        expect(state).toStrictEqual({ type: GET_PRODUCTBYID, payload: 1 });
    })
})