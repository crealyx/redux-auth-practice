import Header from './components/Header';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Shop from './pages/shop';
import Home from './pages/home';
import Login from './pages/login';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Switch>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/login">
            <Login></Login>
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
