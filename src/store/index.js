// ConfigureStore like createStore creates a store, but it makes merging multiple reducers into one reducer easier thereafter.
import { createSlice, configureStore } from "@reduxjs/toolkit";

const redux = require("redux");

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState, // modern javascript value if initialState is { counter: 0, showCounter: true }
  // reducers is again, an object, a map you could say, of all the reducers this slice needs
  reducers: {
    increment(state) {
      // we can mutate state here, we still must not manipulate the existing state, but the good thing is when using Redux toolkit
      // but the good thing is when using Redux toolkit and its functions like create slice, we can't accidentally manipulate the existing state.
      // Because Redux toolkit internally uses another package called 'immer', which will detect code like this and which will automatically clone the existing state,
      // create a new state object, keep all the state which we're not editing, and override the state which we are editing in an immutable way.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

const store = configureStore({
  // we can set up any keys of our choice, and the values of those properties would then be different reducer functions.
  // So we would create a map of reducers you could say, and this map is then set as a value for the main reducer and behind the scenes configureStore
  // and behind the scenes configureStore will emerge all those reducers into one big reducer. So it will merge them for us.
  // reducer: { counter: counterSlice.reducer }

  reducer: counterSlice.reducer,
});

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

export default store;
