const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    message.innerHTML = "";
    message.style.color = "red";

    // Check empty fields
    if (emailValue === "" || passwordValue === "") {
        message.innerHTML = "Please fill in all fields.";
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        message.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Password validation
    if (passwordValue.length < 6) {
        message.innerHTML = "Password must be at least 6 characters.";
        return;
    }

    // Login success
    message.style.color = "green";
    message.innerHTML = "Login Successful!";

    // Clear fields after 2 seconds
    setTimeout(() => {
        form.reset();
        message.innerHTML = "";
    }, 2000);

});