import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLsbtmCnghiyrQU-PbQFeF0xOVrjpZaio",
  authDomain: "anannote-440a8.firebaseapp.com",
  projectId: "anannote-440a8",
  storageBucket: "anannote-440a8.firebasestorage.app",
  messagingSenderId: "670064495727",
  appId: "1:670064495727:web:3a540b7b7b99f6a635519a"
};

const app = initializeApp(firebaseConfig);
export default app