import React, { useState, useEffect } from 'react'

import AuthenticationNavigation from './src/navigation/AuthenticationNavigation'
import MainNavigation from './src/navigation/MainNavigation';

import  firebase, {auth} from 'firebase';
import { firebaseApp } from './src/api/firebase';


const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <AuthenticationNavigation/>
  }else{
    return <MainNavigation/> 
  }
}

export default App;