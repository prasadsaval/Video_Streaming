// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAh8ye5uM8OZOu8PbEEcfYHtwECdpUqvHI",
  authDomain: "streambase-47ac3.firebaseapp.com",
  databaseURL: "https://streambase-47ac3-default-rtdb.firebaseio.com",
  projectId: "streambase-47ac3",
  storageBucket: "streambase-47ac3.appspot.com",
  messagingSenderId: "345432715071",
  appId: "1:345432715071:web:3b84467ab3e7bb11fead8a",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export let auth = getAuth(firebase);
export let storage = getStorage(firebase);
export let database = getDatabase(firebase);
export default firebase;
