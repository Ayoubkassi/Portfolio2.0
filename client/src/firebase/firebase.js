import Firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
//import { seedDatabase } from '../seed';




const firebaseConfig = {
  apiKey: "AIzaSyDj9j2OBGChaxq2gnsJJ-XGHsu8qMy6rsI",
  authDomain: "portfolio-db0c3.firebaseapp.com",
  projectId: "portfolio-db0c3",
  storageBucket: "portfolio-db0c3.appspot.com",
  messagingSenderId: "276966195460",
  appId: "1:276966195460:web:37889653a985edc4b95051",
  measurementId: "G-SN8MXDGPPV"
};

const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

export { firebase };
