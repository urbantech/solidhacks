import React, { useState, useEffect } from 'react';
import { Session } from '@inrupt/solid-client-authn-browser';

const Login = () => {
  const [session, setSession] = useState(new Session({ fetch }));
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    // Check if the user is already authenticated when the component mounts
    async function checkAuthentication() {
      try {
        await session.handleIncomingRedirect(window.location.href);
        setLoading(false); // Set loading to false when authentication check is complete
      } catch (err) {
        setError(err.message);
        setLoading(false); // Set loading to false on error
      }
    }

    checkAuthentication();
  }, [session]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await session.login({
        oidcIssuer: 'https://login.inrupt.com',
        redirectUrl: window.location.href,
        clientName: 'Yeah, Whatever',
      });
      // navigate('/auth-callback');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await session.logout();
      setSession(new Session({ fetch })); // Initialize a new session after logout
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : session?.info?.isLoggedIn ? (
        <div>
          <p>You are logged in as {session.info.webId}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Log In</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
