import React, { useState } from 'react';
import * as firebase from 'firebase';
import firestore from 'firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-68UPtqGgmasYZf1rgl0fcm_fOnnxsnE",
    authDomain: "mobileorderingapp-cfe7f.firebaseapp.com",
    projectId: 'mobileorderingapp-cfe7f',
    databaseURL: "https://mobileorderingapp-cfe7f.firebaseio.com",
    storageBucket: "mobileorderingapp-cfe7f.appspot.com",
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class FirebaseController {
  constructor() {
  
  }
  firestore() {
    return firebase.firestore()
  }
  signUp(firstName,lastName,phoneNumber,email,password){
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log('User account created & signed in!');
      userDocument = db.collection('Users').doc(cred.user.uid);
      console.log(cred.user.uid)
      uid = cred.user.uid
    })
    .then(() => {
    db
    .collection('Users')
    .doc(uid)
    .set({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password
    })
    .then(() => {
      console.log('User added!');
      user = firebase.auth().currentUser
    });
  
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }
  signIn(email,password){
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
      return firestore()
      .collection('Users')
      .doc(cred.user.uid)
    })
    .catch(function(error) {
      // Handle Errors here
      console.log(error);
      return false
  
    })           
  }
  setFirstName (firstName) {
      userDocument = firestore().collection('Users').doc(uid).set({
        firstName: firstName
      })
    }
  setLastName (lastName) {
      userDocument = firestore.collection('Users').doc(uid).set({
        lastName: lastName
      })
    }
    setPhoneNumber (phoneNumber) {
      userDocument = firestore.collection('Users').doc(uid).set({
        phoneNumber: phoneNumber
      })
    }
    setEmail (email) {
      userDocument = firestore.collection('Users').doc(uid).set({
        email: email
      })
    }
    setPassword(password) {
      userDocument = firestore.collection('Users').doc(uid).set({
        password: password
      })
    }
    

}
