// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyANsokTJLSPb_yJ9484JfoGESh_1eDueQw",
  authDomain: "fcm-test-36ab9.firebaseapp.com",
  projectId: "fcm-test-36ab9",
  storageBucket: "fcm-test-36ab9.appspot.com",
  messagingSenderId: "622382328481",
  appId: "1:622382328481:web:a04da539dbde34a0005ee0"
};

firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});