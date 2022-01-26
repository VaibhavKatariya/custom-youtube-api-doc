const auth = firebase.auth()
const database = Database.database()

let url = window.location.href;
var newurl = new URL(url);
var from = newurl.searchParams.get("for")
var finalurl = "/" + from + "";

if (window.location.toString().includes("for")) {
    var vurl = finalurl;
} else {
    var vurl = "/account.html";
}

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()

            var currentTime = new Date();
            var currentOffset = currentTime.getTimezoneOffset();
            var ISTOffset = 330;   // IST offset UTC +5:30 
            var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

            var hh = ISTTime.getHours();
            var mm = ISTTime.getMinutes();
            var ss = ISTTime.getSeconds();
            var DD = ISTTime.getDate();
            var MM = ISTTime.getMonth() + 1;
            var YYYY = ISTTime.getFullYear();

            const date = `` + hh + `:` + mm + `:` + ss + ` on ` + DD + `/` + MM + `/` + YYYY + ``

            var user_data = {
                last_login: date
            }
            database_ref.child('users/' + user.uid).update(user_data)
            alert('Welcome Back ' + email+'!')
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

if (window.location.toString().includes("for")) {
    var str = "signup.html?for=" + from + ""
} else {
    var str = "signup.html";
}

document.getElementById("signup").innerHTML = `<div>
<span class="login__account">Don't have an Account ?</span>
<a class="login__signin" href="`+ str + `">Sign Up</a>
</div >`

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.setTimeout(function () {
            window.location.href = vurl;
        }, 1500);
    }
})