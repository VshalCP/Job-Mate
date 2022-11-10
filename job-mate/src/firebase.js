import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuAOBehRQeu8UADQ4QNdWfONJVndyMz80",
    authDomain: "job-mate-9b481.firebaseapp.com",
    projectId: "job-mate-9b481",
    storageBucket: "job-mate-9b481.appspot.com",
    messagingSenderId: "647079592261",
    appId: "1:647079592261:web:051f20112dfb36c2647e2c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };