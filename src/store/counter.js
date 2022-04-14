import { createSlice } from "@reduxjs/toolkit";

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

// actions. match our keys in the reducers area in counterSlice
// And with that (toggleCounter and others) we don't access the reducer methods to find up there but instead we get methods created automatically by Redux Toolkit
// which when called will create action objects for us, toggleCounter and other methods are called action creators and they will create action objects for us where these objects already have a type property
// with a unique identifier per action. Automatically created behind the scenes. So we don't have to worry about action identifiers.
// We don't have to create those action objects on our own. We can tap into this actions key into this actions object on our createSlice
// and execute these action creator methods, which with their name match our reducer methods to dispatch actions, which will then ultimately trigger those different reducer methods.
// const counterActions = counterSlice.actions.toggleCounter


export const counterActions = counterSlice.actions;
// we need here only .reducer part not the entire counterSlice
export default counterSlice.reducer;