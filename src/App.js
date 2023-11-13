
import './App.css';
import Login from './modules/Login';
import Register from './modules/Reg'; 
import Dashboard from './modules/Dashboard'; 
import Mess1 from './modules/mess/Mess1'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbars from "./modules/Navbars";






function App() {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/reg" element={<Register/>} />
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/home/mess" element={<Mess1/>}/>
      </Routes>

    </Router>
  );
}

export default App;
