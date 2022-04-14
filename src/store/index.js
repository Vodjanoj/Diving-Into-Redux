// ConfigureStore like createStore creates a store, but it makes merging multiple reducers into one reducer easier thereafter.
import {  configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';

const redux = require("redux");


// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // always return a brand new state snapshot, the old snapshot is not merged with a new one
//     // for example if you return only a part of state that has been changed, rest part of unchanged state will be missed
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };


// when you work with multiple slices, you still only have one Redux store
// so you still only call configureStore once. This does not change. And this store only has one root reducer here
const store = configureStore({
  // we can set up any keys of our choice, and the values of those properties would then be different reducer functions.
  // So we would create a map of reducers you could say, and this map is then set as a value for the main reducer
  // and behind the scenes configureStore will emerge all those reducers into one big reducer. So it will merge them for us.
  // reducer: { counter: counterSlice.reducer }

  reducer: { counter: counterReducer, auth: authReducer }
});





// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

export default store;
