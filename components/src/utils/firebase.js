import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";



const app = firebase.initializeApp({
    apiKey: "AIzaSyDS9kqk5L7_-8e543PfSrsgQLkSC7p7ULw",
    authDomain: "creditcards-62ddf.firebaseapp.com",
    projectId: "creditcards-62ddf",
    storageBucket: "creditcards-62ddf.appspot.com",
    messagingSenderId: "301757566814",
    appId: "1:301757566814:web:5ffb62f02efe9ffa9049cf",
    measurementId: "G-H2JW2PCJCM"
  })

  export const auth = app.auth()
  export default firebase;