// UserProfile.js
import React, { useEffect } from 'react';
import { checkAuthentication, login, logout } from './authService';

function UserProfile() {
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {/* Display user profile information */}
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default UserProfile;
