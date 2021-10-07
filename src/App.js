import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//--componentes
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
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
  );
}

export default App;
