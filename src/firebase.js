import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDL3u8zH4yw-Ax8efu2kUwxV7VqWU87ATU",
  authDomain: "todo-list-dfb3a.firebaseapp.com",
  projectId: "todo-list-dfb3a",
  storageBucket: "todo-list-dfb3a.appspot.com",
  messagingSenderId: "67630190280",
  appId: "1:67630190280:web:eec6d62102202747639ffd",
  measurementId: "G-7H84VTDXK4",
});

export const firestore = firebase.firestore();

export default firebase;
