import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

const clientCredentials = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
}

// check that 'window' is in scope for the analytics module
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials)
  // console.log(clientCredentials)

  // to enable analytics...https://firebase.google.com/docs/analytics/get-started
  if ('measurementId' in clientCredentials) firebase.analytics()
}

export default firebase
