function verify() {
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            alert("Email Sent!")
        });

}

firebase.auth().onAuthStateChanged((user) => {
    const dbRef = firebase.database().ref();
    dbRef.child("users").child(user.uid).get().then((snapshot) => {
      if (snapshot.exists()) {
        var email = snapshot.val().email
        var full_name = snapshot.val().full_name
        document.getElementById("welcome").innerHTML = `Respected `+full_name+` Kindly verify you email "`+email+`" before accessing account`
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
});

$(document).ready(function() {
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        var currentURL = location.pathname;
        var part = currentURL.split("/")[1];
        location.replace("login.html?for=" + part + "")
    } else if (user) {
        var email = user.emailVerified;
        console.log(email)
        var user = firebase.auth().currentUser;
        if (email === true) {
            location.replace("/account.html")
        } else if (email === false) {
            console.log("h")
        }
    }
});
});

function logout() {
    firebase.auth().signOut()
}

