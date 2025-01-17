document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert(`logged in as: ${email}`);
    } else {
        alert("please fill in all fields.");
    }
});