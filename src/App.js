import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//--componentes
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
//--Context
import CartContext from './components/CartContext';

function App() {

  return (
    <CartContext>
    <Router>
      <div className="container">
        <header>
          <NavBar/>            
        </header>
        <body>
          <div className="row">
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemListContainer />
              </Route>
              <Route exact path="/item/:itemId">
                <ItemDetailContainer />
              </Route>
            </Switch>
          </div>
        </body>
      </div>
    </Router>
    </CartContext>
  );
}

export default App;
