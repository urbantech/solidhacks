import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import AuthCallback from './components/AuthCallback';
import UserProfile from './components/UserProfile';
import Feed from './components/Feed';
import Settings from './components/Settings';
import Logout from './components/Logout';
import Login from './components/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login/auth-callback" element={<AuthCallback />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/profile" element={<UserProfile />} />
        {/* <Route path="/feed" element={<Feed />} /> */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
