import React, { useState } from 'react';
import * as firebase from 'firebase';
import App from '../../App';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC-68UPtqGgmasYZf1rgl0fcm_fOnnxsnE",
    authDomain: "mobileorderingapp-cfe7f.firebaseapp.com",
    databaseURL: "https://mobileorderingapp-cfe7f.firebaseio.com",
    storageBucket: "mobileorderingapp-cfe7f.appspot.com",
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);


export function signIn(email,password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      errorMessage = "successful";
    })
    .catch(function(error) {
      // Handle Errors here
      errorMessage = error.message

      });              
};

export var errorMessage = "Try Again";
export const firebaseUser = firebase.auth().currentUser;
