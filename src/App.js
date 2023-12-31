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
import NoteViewer from './Plugins/Pages/NoteViewer';
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
import Post from './Pages/Post';
import UserContextProvider, { IDContextProvider, UserIDContext } from './Hooks/userContext';
import Portfolio from './Pages/Portfoilo';
import NotesView from './Plugins/Pages/NotesView';
import NotesPDF from './Plugins/Pages/NotesPDF';
import MyOrders from './Pages/MyOrders';
import ChatCE from './Plugins/Pages/ChatCE';
import ChatCSE from './Plugins/Pages/ChatCSE';
import ChatEEE from './Plugins/Pages/ChatEEE';
import MapPage from './Plugins/Pages/MapPage';
import Drone from './Plugins/Pages/Drone';

function App() {

  return (
    <BrowserRouter>
    <IDContextProvider>
      <AuthContextProvider>
        <ReadingRoomContextProvider>
          <PluginContextProvider>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/marketplace" element={<MyOrders />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/plugins" element={<ProtectedRoute><Plugins /></ProtectedRoute>} />
              <Route path="/social" element={<Social />} />
              <Route path="/post/:id" element={<Post />}/>
              <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/portfolio/:id" element={<Portfolio />} />
              <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
              <Route path="/mynotes" element={<ProtectedRoute><NotesView /></ProtectedRoute>} />
              <Route path="/note-viewer/:id" element={<ProtectedRoute><NoteViewer /></ProtectedRoute>} />
              <Route path="/notes-create" element={<ProtectedRoute><NotesCreate /></ProtectedRoute>} />
              <Route path="/notes-pdf" element={<ProtectedRoute><NotesPDF /></ProtectedRoute>} />
              <Route path="/imagegenerator" element={<ProtectedRoute><ImageGenerator /></ProtectedRoute>} />
              <Route path="/paraphraser" element={<ProtectedRoute><Paraphraser /></ProtectedRoute>} />
              <Route path="/chatce" element={<ProtectedRoute><ChatCE /></ProtectedRoute>} />
              <Route path="/chatcse" element={<ProtectedRoute><ChatCSE /></ProtectedRoute>} />
              <Route path="/chateee" element={<ProtectedRoute><ChatEEE /></ProtectedRoute>} />
              <Route path="/videocall" element={<ProtectedRoute><VideoCall /></ProtectedRoute>} />
              <Route path="/videocall/create" element={<ProtectedRoute><VideoCallCreate /></ProtectedRoute>} />
              <Route path="/videocall/join" element={<ProtectedRoute><VideoCallJoin /></ProtectedRoute>} />
              <Route path="/videocall/join/:id/:name/:password" element={<ProtectedRoute><VideoCallRoom /></ProtectedRoute>} />
              <Route path="/map" element={<ProtectedRoute><MapPage /></ProtectedRoute>} />
              <Route path="/drone" element={<ProtectedRoute><Drone /></ProtectedRoute>} />
            </Routes>
          </PluginContextProvider>
        </ReadingRoomContextProvider>
      </AuthContextProvider>
      </IDContextProvider>
    </BrowserRouter>
  );
}

export default App;
