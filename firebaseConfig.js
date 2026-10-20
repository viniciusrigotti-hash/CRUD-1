import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDr-y2TDZLSTdp5dt9o3JL-904MMDf_VOY",
  authDomain: "crud-1-2c67a.firebaseapp.com",
  projectId: "crud-1-2c67a",
  databaseURL: "https://crud-1-2c67a-default-rtdb.firebaseio.com/",
  storageBucket: "crud-1-2c67a.firebasestorage.app",
  messagingSenderId: "497572617730",
  appId: "1:497572617730:web:9c860cf6b896c1b530511b",
  measurementId: "G-548N6CR7T6"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);