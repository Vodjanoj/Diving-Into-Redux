// Component is for class-based component
// import { Component } from "react";
// useSelector allows us to automatically select a part of our state managed by the store.
// connect is a function that helps you connect class-based components to Redux.
// import { connect } from "react-redux";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  // now dispatch is a function
  const dispatch = useDispatch();

  // we should pass a function to useSelector, a function which we'll receive the state managed
  // by Redux and then we return the part of the state which you wanna extract.
  // The great thing is that when you use use selector, React Redux will automatically set up a subscription to the Redux store for this component.
  // So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store
  // If you ever would unmount this component, if it would be removed from the DOM for whatever reason, React Redux would also automatically clear
  //  React Redux would also automatically clear. So it manages that subscription for you behind the scenes.
  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); 
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );

//   }
// }

// // the same as useSelector above
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// }

// // we call connect and now connect when executed, will actually return a new function as a value, which we then execute again,
// // and then we pass our component to that returned function as our argument.
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
