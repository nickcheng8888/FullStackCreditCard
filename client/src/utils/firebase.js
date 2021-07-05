import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
require('dotenv').config()



const app = firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  })

  export const auth = app.auth()
  export default firebase;