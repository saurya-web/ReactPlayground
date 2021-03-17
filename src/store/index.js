import { configureStore } from '@reduxjs/toolkit';
import reducer from './state-slices';
//import thunk from 'redux-thunk'
//import reducers from './reducers'

//const middleware = [thunk]

const store = configureStore({
  reducer: reducer,
  //middleware
});

//export const { dispatch } = store
export default store;
