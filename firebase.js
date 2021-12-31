// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-ywo1TLsyRmFHC1_OCB3_OaQ_3CIzd9Q',
  authDomain: 'insta-clone-a9fc8.firebaseapp.com',
  projectId: 'insta-clone-a9fc8',
  storageBucket: 'insta-clone-a9fc8.appspot.com',
  messagingSenderId: '439685266772',
  appId: '1:439685266772:web:b5017bd99a2c0fc2011cc1',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
