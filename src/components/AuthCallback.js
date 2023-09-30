import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the authorization code from the URL (e.g., using URLSearchParams)
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Perform the token exchange (as shown in a previous response)
      // ...
      console.log('auth callback hello.')
      // Redirect to a different route or update UI based on the authentication status
      navigate('/'); // Redirect to the home page after successful login
    }
  }, [navigate]);

  return (
    <div>
      <p>Authenticating...</p>
    </div>
  );
};

export default AuthCallback;
