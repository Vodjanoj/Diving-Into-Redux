import { useSelector } from 'react-redux'; // useSelector allows us to automatically select a part of our state managed by the store.
import classes from './Counter.module.css';

const Counter = () => {
  // we should pass a function to useSelector, a function which we'll receive the state managed
  // by Redux and then we return the part of the state which you wanna extract.
  // The great thing is that when you use use selector, React Redux will automatically set up a subscription to the Redux store for this component.
  // So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store
  // If you ever would unmount this component, if it would be removed from the DOM for whatever reason, React Redux would also automatically clear
  //  React Redux would also automatically clear. So it manages that subscription for you behind the scenes.
  const counter = useSelector(state => state.counter ); 

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
