import {initializeApp} from 'firebase/app'
import {getFirestore, getAuth} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAaHYiYrezFspOomeYHnJzBY1yZT4JBEoQ",
  authDomain: "my-notes-e81f5.firebaseapp.com",
  projectId: "my-notes-e81f5",
  storageBucket: "my-notes-e81f5.appspot.com",
  messagingSenderId: "355369081169",
  appId: "1:355369081169:web:9620e492f5dea478811b70"

};

 const app = initializeApp(firebaseConfig);
 
 export const db = getFirestore(app);
// init services

// collection red

// get colection