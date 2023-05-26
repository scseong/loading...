import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../api/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

interface IChildren {
  children: React.ReactNode;
}

const AuthContext = createContext<User | null | undefined>(null);

export const AuthProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log('sign out');
      }
    });
  }, [auth]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => {
  const user = useContext(AuthContext);
  if (!user) throw new Error('Cannot find userStateContext');
  return user;
};
