if (localStorage.getItem('selected-theme') == null) {
    let text = "Hi it seems you are new user!\nSelect Ok to continue in dark mode or cancel to continue in Light mode.";
  if (confirm(text) == true) {
    localStorage.setItem("selected-theme", "dark")
    localStorage.setItem("selected-icon", "bx bx-moon")
  } else {
    localStorage.setItem("selected-theme", "light")
    localStorage.setItem("selected-icon", "bx bx-sun")
  }
}