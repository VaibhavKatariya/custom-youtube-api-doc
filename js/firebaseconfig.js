const firebaseConfig = {
  apiKey: "AIzaSyCddLuSZsdUe5VVKvmYtZ-EzieEVvryswo",
  authDomain: "acekaily.firebaseapp.com",
  databaseURL: "https://acekaily-default-rtdb.firebaseio.com",
  projectId: "acekaily",
  storageBucket: "acekaily.appspot.com",
  messagingSenderId: "607744011079",
  appId: "1:607744011079:web:03dbc422c3f14c95c3ba62",
  measurementId: "G-DLVEJBZG1M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const otherConfig = {
  apiKey: "AIzaSyCmTrC3fvw-WK7GXizQKEf_BSryki45axc",
  authDomain: "kailydatabase.firebaseapp.com",
  databaseURL: "https://kailydatabase-default-rtdb.firebaseio.com",
  projectId: "kailydatabase",
  storageBucket: "kailydatabase.appspot.com",
  messagingSenderId: "862905490931",
  appId: "1:862905490931:web:2922fc47ab112ecc7c4686",
  measurementId: "G-FSCW2S82DS"
};

const Database = firebase.initializeApp(otherConfig, "other");