
import './App.css';
//--componentes
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <div className="container">
        <header>
            <NavBar/>
        </header>
        <body>
          <div className="row">
            {/*<ItemListContainer/>*/}
            <ItemDetailContainer />
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
