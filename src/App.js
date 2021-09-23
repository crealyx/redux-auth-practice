import Header from './components/Header';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Shop from './pages/shop';
import Home from './pages/home';
import Login from './pages/login';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Signup from './pages/signup';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Switch>
          {isLoggedIn && (
            <Fragment>
              <Route path="/cart">
                <Cart></Cart>
              </Route>
              <Route path="/profile">
                <Profile></Profile>
              </Route>
              <Route path="/shop">
                <Shop></Shop>
              </Route>
            </Fragment>
          )}
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
