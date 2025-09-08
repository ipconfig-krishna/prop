function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    const users = {
        "Mr.Krishna": "krishna",
        "Mrs.Krishna": "riya",
        "Friend": "hello"
    };

    if (users[username] && users[username] === password) {
        localStorage.setItem("user", username);
        window.location.href = "home.html";
    } else {
        errorMsg.textContent = "Invalid username or password!";
    }
}
