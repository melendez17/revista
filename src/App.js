import './App.css';
// import Sidebar from './components/Sidebar';
import Sidebar from './components/Sidebar2';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import topic1 from './pages/topic1';
import operadoresConceptos from './pages/operadores/conceptos';
// import home from './pages/home';

function App() {
  return (
    <Router> {/* Envuelve toda la app y le da la funcionalidad de navegacion */}
      <Sidebar/> {/*Llama al componente Sidebar*/}
      <Routes> {/* Declara las rutas de la app */}
        {/* <Route path="/home" exact Component={home} /> Route declara las rutas individualmente */}
        <Route path="/topic1" exact Component={topic1} /> {/* Route declara las rutas individualmente */}
        <Route path="/operadores/conceptos" exact Component={operadoresConceptos} /> {/* Route declara las rutas individualmente */}
      </Routes>
    </Router>
  );
}

export default App;
