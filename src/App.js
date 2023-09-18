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
import ReadingRoomContextProvider from './Hooks/ReadingRoomContextProvider';
import NotesCreate from './Plugins/Pages/NotesCreate';
import PdfViewer from './Plugins/Components/Notes/PdfViewer';
import ImageGenerator from './Plugins/Pages/ImageGenerator';
import Paraphraser from './Plugins/Pages/Paraphraser';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import ProtectedRoute from './ProtectedRoute'
import { AuthContextProvider } from './Hooks/AuthContext';
import CreateAccount from './Pages/CreateAccount';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ReadingRoomContextProvider>
          <PluginContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/marketplace" element={<ProtectedRoute> <Marketplace /></ProtectedRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/plugins" element={<ProtectedRoute><Plugins /></ProtectedRoute>} />
              <Route path="/social" element={<ProtectedRoute><Social /></ProtectedRoute>} />
              <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
              <Route path="/notes-view" element={<ProtectedRoute><PdfViewer /></ProtectedRoute>} />
              <Route path="/notes-create" element={<ProtectedRoute><NotesCreate /></ProtectedRoute>} />
              <Route path="/notes-pdf" element={<ProtectedRoute><NotesCreate /></ProtectedRoute>} />
              <Route path="/imagegenerator" element={<ProtectedRoute><ImageGenerator /></ProtectedRoute>} />
              <Route path="/paraphraser" element={<ProtectedRoute><Paraphraser /></ProtectedRoute>} />
              <Route path="/videocall" element={<ProtectedRoute><VideoCall /></ProtectedRoute>} />
              <Route path="/videocall/create" element={<ProtectedRoute><VideoCallCreate /></ProtectedRoute>} />
              <Route path="/videocall/join" element={<ProtectedRoute><VideoCallJoin /></ProtectedRoute>} />
              <Route path="/videocall/join/:id/:name/:password" element={<ProtectedRoute><VideoCallRoom /></ProtectedRoute>} />
            </Routes>
          </PluginContextProvider>
        </ReadingRoomContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
