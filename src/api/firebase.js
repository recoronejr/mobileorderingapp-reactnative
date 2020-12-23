import * as firebase from 'firebase';
import firestore from 'firestore';
import {firebaseConfig} from './config';

export class FirebaseAPI {

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
  getUser() {
    return firebase.auth().currentUser;
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

  updateUserDocumentAndStore() {
    const user = firebase.auth().currentUser;
    const userDocument = firebaseController.firestore()
        .collection('Users').doc(user.uid)
        .onSnapshot(doc => {
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            this.phoneNumber = doc.data().phoneNumber;
            this.email = doc.data().email;
        })
    }

}
    