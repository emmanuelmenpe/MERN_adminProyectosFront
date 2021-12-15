import './App.css';
//importar componentes
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

//importar estados de app
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';

//Switch is now Routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <ProyectoState>{/**los componentes dentro de ProyectoState podran acceder al estado de la app */}
      <TareaState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/nueva-cuenta" element={<NuevaCuenta/>} />
            <Route exact path="/proyectos" element={<Proyectos/>} />
          </Routes>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
