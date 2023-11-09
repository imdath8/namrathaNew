import { Route, Routes } from 'react-router-dom';
import './fonts/fonts.css';
import Home from './pages/Home';
import Navbar from './pages/navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
