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
import estructurasSubprocesos from './pages/estructurasdecontrol/subprocesos';
import estructurasConceptos from './pages/estructurasdedatos/conceptos';
import estructurasDinamica from './pages/estructurasdedatos/dinamica';
import estructurasEstaticas from './pages/estructurasdedatos/estaticas';
import basesConceptos from './pages/basesdedatos/conceptos';
import basesNormalizacion from './pages/basesdedatos/normalizacion';
import energia from './pages/tecnologiasdeinformacion/energia';
import tecnologiaDigital from './pages/tecnologiasdeinformacion/tecnologiadigital';
import macrotecnologia from './pages/tecnologiasdeinformacion/macrotecnologia';
import optimizacionEnergia from './pages/tecnologiasdeinformacion/optimizacionenergia';
import conceptosBasicos from './pages/tecnologiasdeinformacion/conceptosbasicos';
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
        <Route path="/estructurasdecontrol/subprocesos" exact Component={estructurasSubprocesos} />
        <Route path="/estructurasdedatos/conceptos" exact Component={estructurasConceptos} />
        <Route path="/estructurasdedatos/dinamicas" exact Component={estructurasDinamica} />
        <Route path="/estructurasdedatos/estaticas" exact Component={estructurasEstaticas} />
        <Route path="/basesdedatos/conceptos" exact Component={basesConceptos} />
        <Route path="/basesdedatos/normalizacion" exact Component={basesNormalizacion} />
        <Route path="/ti/energia" exact Component={energia} />
        <Route path="/ti/tecnologiadigital" exact Component={tecnologiaDigital} />
        <Route path="/ti/macrotecnologia" exact Component={macrotecnologia} />
        <Route path="/ti/optimizacionenergia" exact Component={optimizacionEnergia} />
        <Route path="/ti/conceptosbasicos" exact Component={conceptosBasicos} />
      </Routes>
    </Router>
  );
}

export default App;
