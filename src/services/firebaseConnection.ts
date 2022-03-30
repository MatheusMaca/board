import firebase from "firebase/app";
import "firebase/firestore"

let firebaseConfig = {
    apiKey: "AIzaSyCJFBBfgOluj9uBfUyF1W0X5tYcbl_rJic",
    authDomain: "boardapp-e109c.firebaseapp.com",
    projectId: "boardapp-e109c",
    storageBucket: "boardapp-e109c.appspot.com",
    messagingSenderId: "446057192298",
    appId: "1:446057192298:web:44668cf3fb300c4349e313",
    measurementId: "G-6CGB7GYR32"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;