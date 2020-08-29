import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCyruoyWImPoVphVI4l0LgTxEHtygUMmGs",
  authDomain: "clone-49044.firebaseapp.com",
  databaseURL: "https://clone-49044.firebaseio.com",
  projectId: "clone-49044",
  storageBucket: "clone-49044.appspot.com",
  messagingSenderId: "1041094587921",
  appId: "1:1041094587921:web:b3b34d802367d6127da3b0",
  measurementId: "G-1GJ7LEYD03",
});

const auth = firebase.auth();

export { auth };
