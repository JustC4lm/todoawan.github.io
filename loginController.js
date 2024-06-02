document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const loginBtn = document.querySelector("#loginBtn")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    loginBtn.onclick = () => {
        console.log("logged in")
        if (username.value === storedUsername && password.value === storedPassword) {
            alert(`Login Succses. Welcome, ${username.value}!`)
            window.location.href = "index.html"
        } else {
            alert("Sorry! Your credentials doesn't match the database, please try again")
        }
    }
})