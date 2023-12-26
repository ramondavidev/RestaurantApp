import React, { useState, createContext } from 'react';

import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await loginRequest(email, password);
      console.log('userCredential', response);
      if (response.uid) {
        setUser(response.uid);
      } else {
        setError(response.toString());
      }
      setIsLoading(false);
    } catch (e) {
      console.log('userCredentialError', e);
      setIsLoading(false);
      setError(e.toString());
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
