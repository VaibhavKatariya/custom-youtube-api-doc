const auth = firebase.auth()

$(document).ready(function() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.email);
      var user = user.uid
    } else {
      // User not logged in or has just logged out.
    }
    const dbRef = Database.database().ref();
dbRef.child("users").child(user).get().then((snapshot) => {
  if (snapshot.exists()) {
    var email = snapshot.val().email
    var full_name = snapshot.val().full_name
    var last_login = snapshot.val().last_login
    var account_createdat = snapshot.val().account_createdat
    document.getElementById("hello").innerHTML = `Hello `+full_name+`! you last Logined at `+last_login+` with your Account `+email+`. You account with email `+email+` was created on `+account_createdat+``
    document.getElementById("title").innerHTML = `Welcome `+full_name+``
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
});
});