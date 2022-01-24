// Import the functions you need from the SDKs you need
// Initialize Firebase
import { getMessaging, getToken, onMessage  } from "firebase/messaging";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let YOUR_PUBLIC_VAPID_KEY_HERE = 'BMWZMH-KjWzuMb_HmmhAx53RPrJpT7w-Jz-2j8MMG31OeOyO2lXrzK8pdspjxkJpeiT4v27AFIPYSJ6eDWae4YE';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANsokTJLSPb_yJ9484JfoGESh_1eDueQw",
  authDomain: "fcm-test-36ab9.firebaseapp.com",
  projectId: "fcm-test-36ab9",
  storageBucket: "fcm-test-36ab9.appspot.com",
  messagingSenderId: "622382328481",
  appId: "1:622382328481:web:a04da539dbde34a0005ee0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

const messaging = getMessaging();


export const requestForToken = () => {
   // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.

  // YOUR_PUBLIC_VAPID_KEY_HERE: esta vble esta declarada arriba
  return getToken(messaging, { vapidKey: YOUR_PUBLIC_VAPID_KEY_HERE })
  .then((currentToken) => {

    if (currentToken) {
      console.log('current token for client: ', currentToken);
      // Send the token to your server and update the UI if necessary
      return currentToken;      
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    return err
  });
}


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });




