// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQzoOKSZQ1TXj1lEObE6R22fNOe1Ydii4",
  authDomain: "reliable-repair-care-crm.firebaseapp.com",
  projectId: "reliable-repair-care-crm",
  storageBucket: "reliable-repair-care-crm.firebasestorage.app",
  messagingSenderId: "440184436675",
  appId: "1:440184436675:web:b454c2b60f638552d72f76"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
