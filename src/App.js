import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { useEffect } from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Social from './Pages/Social';
import Marketplace from './Pages/Marketplace';
import Create from './Pages/Create';
import Profile from './Pages/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/marketplace" element={<Marketplace/>}/>
        <Route path="/social" element={<Social/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
