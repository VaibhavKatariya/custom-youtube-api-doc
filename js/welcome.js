$(document).ready(function() {
    firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        var currentURL = location.pathname;
        var part = currentURL.split("/")[1];
        location.replace("login.html?for="+part+"")
    } else if (user) {
        var email = user.emailVerified;
        console.log(email)
        var user = firebase.auth().currentUser;
        if(email === true){
            console.log("Hello")
        } else if(email === false) {
            location.replace("/verifyaccount.html")
        }
    } 
})
});

function logout() {
    firebase.auth().signOut()
}
