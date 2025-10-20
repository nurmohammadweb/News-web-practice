import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  console.log(user)
  const createUser = (email, password) => { 
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubcribe();
    };
  }, [])

  const authData = {
    user,
    setUser,
    createUser,
  };

  return <AuthContext value={authData}>{ children}</AuthContext>;
};

export default AuthProvider;