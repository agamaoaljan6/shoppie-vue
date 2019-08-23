import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwC2toT6wg4Fy7Xgi8vovmVCCbsbjJnvE",
  authDomain: "shoppie-a2620.firebaseapp.com",
  databaseURL: "https://shoppie-a2620.firebaseio.com",
  projectId: "shoppie-a2620",
  storageBucket: "gs://shoppie-a2620.appspot.com",
  messagingSenderId: "151137984176",
  appId: "1:151137984176:web:3513076878f7a01a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
