import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // const authLogInHandler = () => {
  //   dispatch(authActions.login());
  // };

  // const authLogOutHandler = () => {
  //   dispatch(authActions.logout());
  // };

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
