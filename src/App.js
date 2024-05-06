import './App.css';
// import Sidebar from './components/Sidebar';
import Sidebar from './components/Sidebar2';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import topic1 from './pages/topic1';
import operadoresConceptos from './pages/operadores/conceptos';
import operadoresAsignacion from './pages/operadores/asignacion';
import operadoresAritmeticos from './pages/operadores/aritmeticos';
import operadoresRelacionales from './pages/operadores/relacionales';
import operadoresLogicos from './pages/operadores/logicos';
import operadoresCombinacion from './pages/operadores/combinacion';
import estructurasDefinicion from './pages/estructurasdecontrol/definicion';
import estructurasSecuenciales from './pages/estructurasdecontrol/secuenciales';
import estructurasCondicionales from './pages/estructurasdecontrol/condicionales';
import estructurasRepetitivas from './pages/estructurasdecontrol/repetitivas';
import estructurasConceptos from './pages/estructurasdedatos/conceptos';
import estructurasDinamica from './pages/estructurasdedatos/dinamica';
import estructurasEstaticas from './pages/estructurasdedatos/estaticas';
// import home from './pages/home';

function App() {
  return (
    <Router> {/* Envuelve toda la app y le da la funcionalidad de navegacion */}
      <Sidebar/> {/*Llama al componente Sidebar*/}
      <Routes> {/* Declara las rutas de la app */}
        {/* <Route path="/home" exact Component={home} /> Route declara las rutas individualmente */}
        <Route path="/topic1" exact Component={topic1} /> {/* Route declara las rutas individualmente */}
        <Route path="/operadores/conceptos" exact Component={operadoresConceptos} /> {/* Route declara las rutas individualmente */}
        <Route path="/operadores/asignacion" exact Component={operadoresAsignacion} /> {/* Route declara las rutas individualmente */}
        <Route path="/operadores/aritmeticos" exact Component={operadoresAritmeticos} /> {/* Route declara las rutas individualmente */}
        <Route path="/operadores/relacionales" exact Component={operadoresRelacionales} /> {/* Route declara las rutas individualmente */}
        <Route path="/operadores/logicos" exact Component={operadoresLogicos} /> {/* Route declara las rutas individualmente */}
        <Route path="/operadores/combinacion" exact Component={operadoresCombinacion} /> {/* Route declara las rutas individualmente */}
        <Route path="/estructurasdecontrol/definicion" exact Component={estructurasDefinicion} /> {/* Route declara las rutas individualmente */}
        <Route path="/estructurasdecontrol/secuenciales" exact Component={estructurasSecuenciales} /> {/* Route declara las rutas individualmente */}
        <Route path="/estructurasdecontrol/condicionales" exact Component={estructurasCondicionales} /> {/* Route declara las rutas individualmente */}
        <Route path="/estructurasdecontrol/repetitivas" exact Component={estructurasRepetitivas} />
        <Route path="/estructurasdedatos/conceptos" exact Component={estructurasConceptos} />
        <Route path="/estructurasdedatos/dinamicas" exact Component={estructurasDinamica} />
        <Route path="/estructurasdedatos/estaticas" exact Component={estructurasEstaticas} />
      </Routes>
    </Router>
  );
}

export default App;
