import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey : "AIzaSyCbdcKzoneqxp3c0Ek6MIMMH8T2iy7GKbE" , 
  authDomain : "firechat-31465.firebaseapp.com" , 
  projectId : "firechat-31465" , 
  storageBucket : "firechat-31465.appspot.com" , 
  messagingSenderId : "355257303874" , 
  appId : "1:355257303874:web:7c3bd1a67d7f5d87567edb" , 
  measurementId : "G-0QMMRESJ11" 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
