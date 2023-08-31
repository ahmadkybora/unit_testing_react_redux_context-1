import productReducer from "../store/reducers/productReducer"
import { GET_PRODUCTBYID, GET_PRODUCTS } from "../store/actions/actionType"

test("", () => {
    // تست ریدیوسر 
    const reducer = productReducer({}, { type: GET_PRODUCTS });
    // در صورتی میتوان از متغییر زیر استفاده کرد
    // که داده مورد نظر تغییر پذیر باشد
    expect(reducer).toStrictEqual({ success: true });
})

// describe("RecipeList", () => {
//     let wrapper;
//     let useEffect;
//     let store;
//     // const mockUseEffect = () => {
//     //   useEffect.mockImplementationOnce(f => f());
//     // };
//     // beforeEach(() => {
//       /* mocking store */
//     //   store = configureStore([thunk])({
//     //     recipes: fakeRecipes,
//     //     isLoading: false,
//     //     error: null
//     //   });
//       /* mocking useEffect */
//       useEffect = jest.spyOn(React, "useEffect");
//       const mockUseEffect = () => {
//         useEffect.mockImplementationOnce(f => f());
//       };
//       console.log(mockUseEffect);
//       mockUseEffect(); // 2 times
//       mockUseEffect(); //
//       /* mocking useSelector on our mock store */
//     //   jest
//     //      .spyOn(ReactReduxHooks, "useSelector")
//     //      .mockImplementation(state => store.getState());
//     /* mocking useDispatch on our mock store  */
//     // jest
//     //    .spyOn(ReactReduxHooks, "useDispatch")
//     //    .mockImplementation(() => store.dispatch);
//     // /* shallow rendering */
//     //    wrapper = shallow(<RecipeList store={store} />);
//     // });
//     // describe("on mount", () => {
//     //   it("dispatch search action to store", () => {
//     //     const actions = store.getActions();
//     //     expect(actions).toEqual([{ type: "SEARCH", query: "all" }, 
//     //     { type: "SEARCH_SUCCESS", recipes: fakeRecipes }]);
//     //   });
//     // });
//     // it("should render RecipeItem components if recipes.length > 0", 
//     //   () => {expect(wrapper.find(RecipeItem)).toHaveLength(3);
//     // });
//   });