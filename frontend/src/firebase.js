import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = firebase.initializeApp({
  

  apiKey: "AIzaSyDyTGkqhiGMnu9jtYeQQ2bY4azcwwi96Ig",
  authDomain: "todoist-clone-60bd3.firebaseapp.com",
  databaseURL: "https://todoist-clone-60bd3-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-60bd3",
  storageBucket: "todoist-clone-60bd3.appspot.com",
  messagingSenderId: "917765929463",
  appId: "1:917765929463:web:c4fa0c37582b3f26bf16f2"
})
export {firebaseConfig as firebase};
