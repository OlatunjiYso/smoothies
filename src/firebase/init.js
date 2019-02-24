import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOPjK27ZrennZ--dBIpvgLb8KJPQNoXsw",
  authDomain: "smoothies-18399.firebaseapp.com",
  databaseURL: "https://smoothies-18399.firebaseio.com",
  projectId: "smoothies-18399",
  storageBucket: "smoothies-18399.appspot.com",
  messagingSenderId: "280370547473"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();