import React, { useState } from 'react';
import * as firebase from 'firebase';
import firestore from 'firestore';

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyC-68UPtqGgmasYZf1rgl0fcm_fOnnxsnE",
    authDomain: "mobileorderingapp-cfe7f.firebaseapp.com",
    projectId: 'mobileorderingapp-cfe7f',
    databaseURL: "https://mobileorderingapp-cfe7f.firebaseio.com",
    storageBucket: "mobileorderingapp-cfe7f.appspot.com",
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
var sucessful;
var userDocument;
var user;
export const db = firebase.firestore()
export function signIn(email,password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
    sucessful = true;
    userDocument = firestore()
      .collection('Users')
      .doc(cred.user.uid);
  })
  .catch(function(error) {
    // Handle Errors here
    sucessful = false;
    errorMessage = error.message

  });              
};

var uid = '';
export function addUserTest() {
  db
  .collection('Users')
  .add({
    name: 'Ada Lovelace',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  });
}

export function signUp(firstName,lastName,phoneNumber,email,password){
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
export function signOut() {
  sucessful = false;
  firebase.auth()
  .signOut()
  .then(() => sucessful = false)
  .then(() => console.log('User signed out!' + sucessful));
}
export var errorMessage;
export var user = firebase.auth().currentUser
// export function setFirstName (firstName) {
//   userDocument = firestore().collection('Users').doc(uid).set({
//     firstName: firstName
//   })
// }
// export function setLastName (lastName) {
//   userDocument = firestore.collection('Users').doc(uid).set({
//     lastName: lastName
//   })
// }
// export function setPhoneNumber (phoneNumber) {
//   userDocument = firestore.collection('Users').doc(uid).set({
//     phoneNumber: phoneNumber
//   })
// }
// export function setEmail (email) {
//   userDocument = firestore.collection('Users').doc(uid).set({
//     email: email
//   })
// }
// export function setPassword(password) {
//   userDocument = firestore.collection('Users').doc(uid).set({
//     password: password
//   })
// }
