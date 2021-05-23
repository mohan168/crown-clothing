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

export const createUserProfileDocument = async( userAuth, additionalData)=> { 

        if(!userAuth)return;


         const userRef = firestore.doc(`users/${userAuth.uid}`)

         const snapShot = await userRef.get();
         
         if(!snapShot.exists){
                 const { displayName,email} =userAuth;


                 const createdAt =new Date();

                 try{
                         await userRef.set({
                                 displayName,
                                 email,
                                 createdAt,
                                 ...additionalData
                         })

                 }catch(error){
                   console.log('error creating user', error.message)
                 }
         }

         return userRef;
        }
 

firebase.initializeApp(config);

export const auth = new firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;