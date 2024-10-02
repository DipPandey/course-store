import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './Pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
