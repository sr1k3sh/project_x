import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyAKhVqVGP-8pzg2Lj_OUplJlwn45EbD2yM',
    authDomain: 'learn-a8ba5.firebaseapp.com',
    databaseURL: 'https://learn-a8ba5.firebaseio.com',
    projectId: 'learn-a8ba5',
    storageBucket: 'learn-a8ba5.appspot.com',
    messagingSenderId: 'learn-a8ba5',
    appId: "1:126725867588:web:c72d69b8f0d25496605411"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider).then((e)=>{
          console.log(e)
      });
    };
export const firestore = firebase.firestore();
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };