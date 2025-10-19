// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnmnFm46sPo81Maa85BqDEpb9zqMJoyN0",
  authDomain: "news-practice-web-project.firebaseapp.com",
  projectId: "news-practice-web-project",
  storageBucket: "news-practice-web-project.firebasestorage.app",
  messagingSenderId: "677811941677",
  appId: "1:677811941677:web:7790bf31771c10021ea3a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;