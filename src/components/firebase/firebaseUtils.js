import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    
        apiKey: "AIzaSyCwTtWnbw1xTHAsQSGKX_1zuEQTV9_f0sk",
        authDomain: "crown-db-5b7cb.firebaseapp.com",
        projectId: "crown-db-5b7cb",
        storageBucket: "crown-db-5b7cb.appspot.com",
        messagingSenderId: "196116052915",
        appId: "1:196116052915:web:3f7c6211f65e45d13529c6",
        measurementId: "G-ZT1N595C6G"
    
};

firebase.initializeApp(config);

export const auth = new firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;