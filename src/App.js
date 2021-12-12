import './App.css';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';
//Switch is now Routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/nueva-cuenta" element={<NuevaCuenta/>} />
          <Route exact path="/proyectos" element={<Proyectos/>} />
        </Routes>
      </Router>
    </ProyectoState>
  );
}

export default App;
