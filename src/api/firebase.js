import React, { useEffect } from 'react'
import * as firebase from 'firebase';
import '@firebase/firestore';

import {firebaseConfig} from './config';
import { revScrn } from '../screens/ReviewScreen';


class FirebaseAPI {
  constructor() {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      // this.user = firebase.auth().currentUser;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          isSignedIn = true;
        } else {
          // No user is signed in.
          isSignedIn = false;
        }
      });
    }
    else{
      firebase.app();
    }
  }
  createOrder(body) {
    // let data = body.order.line_items;
    // console.log(data);

    // let dictionary = Object.assign({}, ...data.map((x) => ({
    //   [x.name]: x.country
    // })));
    
    firebase.firestore()
    .collection('order')
    .doc()
    .set({body})
    .then(() => {
      console.log('Order added!', body);
    });
  }
  getUser() {
    const user = firebase.auth().currentUser;
    return user;
  }
  async getUserDocument(uid) {
    const userDocument = await firestore()
    .collection('Users')
    .doc(uid)
    .get();
  }
  signOut(){
    firebase.auth().signOut();
  }
  signUp(firstName,lastName,phoneNumber,email,password){
    var uid;
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log('User account created & signed in!');
      uid = cred.user.uid
    })
    .then(() => {
    firebase.firestore()
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
    });
  }

  signIn(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
      return true;
    })
    .catch(function(error) {
      return false;
    })           
  }
  // Functions that update First Name, Last Name and Phone Numnber 
  updateFirstName(firstName) {
    let user = this.getUser();
    const userDocument = firebase.firestore()
      .collection('Users').doc(user.uid)
      .update({firstName: firstName});
  }
  updateLastName(lastName) {
    let user = this.getUser();
    const userDocument = firebase.firestore()
      .collection('Users').doc(user.uid)
      .update({lastName: lastName});
  }
  updatePhoneNumber(phoneNumber) {
    let user = this.getUser();
    const userDocument = firebase.firestore()
      .collection('Users').doc(user.uid)
      .update({phoneNumber: phoneNumber})
  }
  updateEmail(email) {
    let user = this.getUser();
    const userDocument = firebase.firestore()
      .collection('Users').doc(user.uid)
      .update({email: email})
  }
  createUserDocumentAndStore() {
    let user = this.getUser();
    const userDocument = firebase.firestore()
      .collection('Users').doc(user.uid)
      .onSnapshot(doc => {
        this.firstName = doc.data().firstName;
        this.lastName = doc.data().lastName;
        this.phoneNumber = doc.data().phoneNumber;
        this.email = doc.data().email;
    })
  }
  createNewReview(merchantID, subject, body, rating){
    let user = this.getUser();
    let date = new Date().toDateString();
    
    firebase.firestore()
    .collection('Reviews')
    .doc()
    .set({
      merchantID: merchantID,
      subject: subject, 
      body: body, 
      rating: rating, 
      email: user.email,
      time: (date)
    })
    .then(() => {
      console.log('Review submitted!');
    });
  }

  async GetUserWhoLeftReview(merchantName){ 
    let reviewInfo = []
    let document = await firebase.firestore()
    .collection('Reviews')
    .where('merchantID', '==', merchantName)
    .get()

    document.forEach(doc => {
      reviewInfo.push(doc.data());
    })
    
    console.log(reviewInfo)
    return reviewInfo
  }
}

const firebaseApp = new FirebaseAPI();

export {firebaseApp};