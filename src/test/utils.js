import { createStore, applyMiddleware } from 'redux'
import { middlewares } from '../store';
import rootReducer from '../store/reducers'

//  اینجا ما یک استور جدید ساختیم برای شبیه سازی کردن استور
// طبق جستجوها و تحقیقاتم بوسیله لایبرری ریداکس تانک میتوان به استور دسترسی داشت
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}