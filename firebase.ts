import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkPRYbnKqKkFKCziLiXbOjnVSYMCN9H5c",
  authDomain: "chatgpt-messenger-yt-456e0.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-456e0",
  storageBucket: "chatgpt-messenger-yt-456e0.appspot.com",
  messagingSenderId: "794790473832",
  appId: "1:794790473832:web:5d61daa01495b789184bdd"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}