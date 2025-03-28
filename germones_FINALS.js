document.addEventListener("DOMContentLoaded", function () {
    let playerIDField = document.getElementById("playerID");
    if (playerIDField) {
        playerIDField.value = generatePlayerID();
    }

    function generatePlayerID() {
        return `${random4()}-${random4()}-${random4()}`;
    }

    function random4() {
        return Math.floor(1000 + Math.random() * 9000); 
    }

    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            clearErrors();

            let isValid = true;

            if (!validateEmail(email)) {
                showError("emailError", "Invalid email address.");
                isValid = false;
            }

            if (!validatePassword(password)) {
                showError("passwordError", "Password must be at least 8 characters with uppercase, lowercase, number, and special character.");
                isValid = false;
            }

            if (password !== confirmPassword) {
                showError("confirmPasswordError", "Passwords do not match.");
                isValid = false;
            }

            if (isValid) {
                alert("Registration successful!");
                form.reset();
            }
        });
    }
    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function validatePassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
    }
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = "block";
        }
    }
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(error => {
            error.textContent = "";
            error.style.display = "none";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        themeToggle.textContent = "Light Mode";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";
        }
    });
});

