// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc3xtKsFpO2lNS-es80VNUBY8KHeL6cJs",
  authDomain: "next-movies-1bb56.firebaseapp.com",
  projectId: "next-movies-1bb56",
  storageBucket: "next-movies-1bb56.appspot.com",
  messagingSenderId: "1073887911694",
  appId: "1:1073887911694:web:639dc39b2b4fa12887c15f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }