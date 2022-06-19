// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCIoMSgZUO0MQC8ELVfhLsgDlpT7b8amxk',
  authDomain: 'netflix-yt-ba684.firebaseapp.com',
  projectId: 'netflix-yt-ba684',
  storageBucket: 'netflix-yt-ba684.appspot.com',
  messagingSenderId: '299137938075',
  appId: '1:299137938075:web:98477866a5bd731c234c3e',
  measurementId: 'G-SV58H1CC3T',
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
