import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Social from './Pages/Social';
import Marketplace from './Pages/Marketplace';
import Create from './Pages/Create';
import Profile from './Pages/Profile';
import Plugins from './Pages/Plugins';
import PluginContextProvider from './Hooks/PluginContextProvider';
import Notes from './Plugins/Pages/Notes';
import VideoCall from './Plugins/Pages/VideoCall';
import VideoCallCreate from './Plugins/Pages/VideoCallCreate';
import VideoCallJoin from './Plugins/Pages/VideocallJoin';
import VideoCallRoom from './Plugins/Pages/VideoCallRoom';

function App() {

  return (
    <BrowserRouter>
      <PluginContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/social" element={<Social />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/videocall/create" element={<VideoCallCreate />} />
          <Route path="/videocall/join" element={<VideoCallJoin />} />
          <Route path="/videocall/join/:id/:name/:password" element={<VideoCallRoom />} />
        </Routes>
      </PluginContextProvider>
    </BrowserRouter>
  );
}

export default App;
