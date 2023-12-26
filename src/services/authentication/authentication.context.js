import React, { useState, createContext } from 'react';

import { loginRequest, registerRequest } from './authentication.service';

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

  const onRegister = async (email, password, repeatedPassword) => {
    try {
      if (password !== repeatedPassword) {
        setError('Error: Passwords do no match!');
        return;
      }
      const response = await registerRequest(email, password);
      console.log('userCredential', response.user);

      if (response.user) {
        setUser(response.user);
      } else {
        setError(response.toString());
      }
    } catch (e) {
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
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
