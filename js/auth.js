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

      firebase.analytics();
  
      const auth = firebase.auth()
  const database = Database.database()
  
  let url = window.location.href;
  var newurl = new URL(url);
  var from = newurl.searchParams.get("from")
  var finalurl = "/"+from+"";
  console.log(finalurl)

  if (window.location.toString().includes("from")){
      console.log("kk")
      var vurl = finalurl;
  } else {
      console.log("gg")
      var vurl = "/account.html";
  }
  console.log(vurl)
  
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        window.setTimeout(function() {
            window.location.href = vurl;
        }, 2000);
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const full_name = document.getElementById("full_name").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          email : email,
          full_name : full_name,
          last_login : Date.now()
        }
        database_ref.child('users/' + user.uid).set(user_data)

        alert('Welcome aboard ' +full_name)
      })
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link has been sent to your email")
        location.replace("login.html")
    })
    .catch((error) => {
        document.getElementById("errorfor").innerHTML = error.message
    });
}

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})