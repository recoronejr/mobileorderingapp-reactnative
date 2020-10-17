import FirebaseController from '../controller/user-management/Firebase_Helper'
const firebaseController = new FirebaseController()

export class User {
    
    firstName: string;
    lastName: string;
    phoneNumber: int;
    email: string;
    password: string;

    

    constructor() {updateUserDocumentAndStore()}

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
    signOut() {
        firebase.auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      }

}

