import firebase from 'firebase';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyAeT-HdgTldJThzC3BVSiDpuL1m9pBBLSM",
    authDomain: "estoque-db.firebaseapp.com",
    projectId: "estoque-db",
    storageBucket: "estoque-db.appspot.com",
    messagingSenderId: "254032042937",
    appId: "1:254032042937:web:817a1c2defd2fa2f2db468",
    measurementId: "G-E2G5WKP0YM"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;