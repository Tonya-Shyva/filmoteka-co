import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//-----------конфігурації Fire Base.  ------------//
// const config = {
//   apiKey: 'AIzaSyDk8J8SmVaOfemZz_M9I9pQzOt5IQ17vRI',
//   authDomain: 'filmoteca-de280.firebaseapp.com',
//   projectId: 'filmoteca-de280',
//   storageBucket: 'filmoteca-de280.appspot.com',
//   messagingSenderId: '270544446865',
//   appId: '1:270544446865:web:c808e57a09696f674e6630',
// };

const config = {
  apiKey: 'AIzaSyA4A5UHRxZpdRxFfXU2Tf8n6yv6z-axasA',
  authDomain: 'filmoteka-co.firebaseapp.com',
  projectId: 'filmoteka-co',
  storageBucket: 'filmoteka-co.appspot.com',
  messagingSenderId: '730428813603',
  appId: '1:730428813603:web:35b4b913bf9e1c6e6b5c96',
  measurementId: 'G-QPR1E8J86E',
};

function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}

export function initFireBase() {
  return initializeApp(getFirebaseConfig());
}

export function initDataBase() {
  return initFireBase();
}
