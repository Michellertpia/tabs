
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkpvPzHfRcF5zWCNHXsGEsxaqBhTONNyI",
  authDomain: "kukul-ldc.firebaseapp.com",
  projectId: "kukul-ldc",
  storageBucket: "kukul-ldc.appspot.com",
  messagingSenderId: "132649103969",
  appId: "1:132649103969:web:ca2c1db721a1299aef7020"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);