import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtiaAMHPecMTZR30U7yb9F75Fnvjpk0do",
    authDomain: "clone-c698f.firebaseapp.com",
    projectId: "clone-c698f",
    storageBucket: "clone-c698f.appspot.com",
    messagingSenderId: "804535943923",
    appId: "1:804535943923:web:e8821c177fbd588dc6ed86",
    measurementId: "G-K8MMG99VEX"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }