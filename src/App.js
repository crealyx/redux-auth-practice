import Header from './components/Header';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Shop from './pages/shop';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Header></Header>
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
      </Switch>
    </div>
  );
}

export default App;
