import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBQSSiL9wo3qoSEu_pRUvtJpn_1musrMu0',
  authDomain: 'trade-a-bike.firebaseapp.com',
  databaseURL: 'https://trade-a-bike-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'trade-a-bike',
  storageBucket: 'trade-a-bike.appspot.com',
  messagingSenderId: '387902436100',
  appId: '1:387902436100:web:b86d4e282ff9dc15da1651',
  measurementId: 'G-5HK0NJ41L9'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
