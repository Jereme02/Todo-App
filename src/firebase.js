import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDp15nNYfkNXnihN3Yf45ux7ef84Mw0ghQ",
  authDomain: "todo-app-jereme-20d13.firebaseapp.com",
  databaseURL: "https://todo-app-jereme-20d13.firebaseio.com",
  projectId: "todo-app-jereme-20d13",
  storageBucket: "todo-app-jereme-20d13.appspot.com",
  messagingSenderId: "307475407084",
  appId: "1:307475407084:web:15a79525971a77562985c9",
  measurementId: "G-HHQ69B4EKR",
});

const db = firebaseApp.firestore();

export default db;
