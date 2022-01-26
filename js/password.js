function forgotPass() {
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

document.getElementById("passwordform").addEventListener("submit", (event) => {
    event.preventDefault()
})