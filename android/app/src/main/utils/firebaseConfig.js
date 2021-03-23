import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDkamx4jbHOHmtCz6TMtYwB9gblor4btAk",
    authDomain: "espistemicapp.firebaseapp.com",
    projectId: "espistemicapp",
    storageBucket: "espistemicapp.appspot.com",
    messagingSenderId: "402788398590",
    appId: "1:402788398590:web:d008dfcdb4880214bebcaf",
    measurementId: "G-CFG3P0PP3J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebaseConfig;