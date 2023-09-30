import React, { createContext, useContext, useState, useEffect } from 'react';
import { Session } from '@inrupt/solid-client-authn-browser';

const SessionContext = createContext();

export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(new Session({ fetch }));
  const [loading, setLoading] = useState(true);

  // Check if the user is already authenticated
  useEffect(() => {
    async function checkAuthentication() {
      try {
        await session.handleIncomingRedirect(window.location.href);
        setLoading(false);
      } catch (error) {
        console.error('Authentication error:', error);
        setLoading(false);
      }
    }

    checkAuthentication();
  }, [session]);

  return (
    <SessionContext.Provider value={{ session, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
