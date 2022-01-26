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

auth.onAuthStateChanged((user) => {
    if (user) {
        window.setTimeout(function () {
            window.location.href = "/verifyaccount.html";
        }, 2000);
    }
})

function signUp() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const full_name = document.getElementById("full_name").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
                email: email,
                full_name: full_name,
                last_login: date,
                account_createdat: date,
            }
            database_ref.child('users/' + user.uid).set(user_data)

            alert('Welcome aboard ' + full_name)
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}