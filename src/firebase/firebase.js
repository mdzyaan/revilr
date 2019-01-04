import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCo1Iy4iliWeukKevXer8KI_a8JyXAsw5c",
    authDomain: "revilrproject.firebaseapp.com",
    databaseURL: "https://revilrproject.firebaseio.com",
    projectId: "revilrproject",
    storageBucket: "revilrproject.appspot.com",
    messagingSenderId: "17951875194"
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export { firebase, googleAuthProvider, facebookAuthProvider, database as default}; 


