document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const registerBtn = document.querySelector("#registerBtn")

    registerBtn.onclick = () => {
        localStorage.setItem("username", username.value)
        localStorage.setItem("password", password.value)

        alert("User Succsessfully Registered!")
        window.location.href = "loginPage.html"

        console.log("user registered!")
        console.log(eachUsers)
    }
})