import React, { useState, createContext } from 'react';

import { loginRequest, registerRequest } from './authentication.service';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (usr) => {
    if (user) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await loginRequest(email, password);
      if (response.uid) {
        setUser(response);
      } else {
        setError(response.toString());
      }
    } catch (e) {
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        setError(err);
      });
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
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
