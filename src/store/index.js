// ConfigureStore like createStore creates a store, but it makes merging multiple reducers into one reducer easier thereafter.
import { createSlice, configureStore } from "@reduxjs/toolkit";

const redux = require("redux");

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, // modern javascript value of initialState is { counter: 0, showCounter: true }
  // reducers is again, an object ('actions object'), a map you could say, of all the reducers this slice needs
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
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});



const initialAuthState = {
  isAuthenticated: false,
};



const authSlice = createSlice({ 
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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


// when you work with multiple slices, you still only have one Redux store, so you still only call configureStore once.
// so you still only call configureStore once. This does not change. And this store only has one root reducer here
const store = configureStore({
  // we can set up any keys of our choice, and the values of those properties would then be different reducer functions.
  // So we would create a map of reducers you could say, and this map is then set as a value for the main reducer
  // and behind the scenes configureStore will emerge all those reducers into one big reducer. So it will merge them for us.
  // reducer: { counter: counterSlice.reducer }

  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

// actions. match our keys in the reducers area in counterSlice
// And with that (toggleCounter and others) we don't access the reducer methods to find up there but instead we get methods created automatically by Redux Toolkit
// which when called will create action objects for us, toggleCounter and other methods are called action creators and they will create action objects for us where these objects already have a type property
// with a unique identifier per action. Automatically created behind the scenes. So we don't have to worry about action identifiers.
// We don't have to create those action objects on our own. We can tap into this actions key into this actions object on our createSlice
// and execute these action creator methods, which with their name match our reducer methods to dispatch actions, which will then ultimately trigger those different reducer methods.
// const counterActions = counterSlice.actions.toggleCounter
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

export default store;
