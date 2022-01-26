importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js")

var firebaseConfig = {
    apiKey: "AIzaSyCddLuSZsdUe5VVKvmYtZ-EzieEVvryswo",
    authDomain: "acekaily.firebaseapp.com",
    databaseURL: "https://acekaily-default-rtdb.firebaseio.com",
    projectId: "acekaily",
    storageBucket: "acekaily.appspot.com",
    messagingSenderId: "607744011079",
    appId: "1:607744011079:web:03dbc422c3f14c95c3ba62",
    measurementId: "G-DLVEJBZG1M"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();