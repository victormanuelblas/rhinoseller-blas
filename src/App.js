
import './App.css';
//--componentes
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div className="container">
        <header>
            <NavBar/>
        </header>
        <body>
          <div className="row">
            <ItemListContainer/>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
