import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import { storeFactory } from './test/utils';

test('renders learn react link', () => {
  // همانند کامپوونت اصلی اینجا هم دسترسی به 
  // استور را فراهم کردیم
  // توجه کنید بدون پروواید کردن و استیت کردن
  // نمیتوان به استور دسترسی داشت
  const store = storeFactory();
  mount(<Provider store={store}><App /></Provider>);
});
