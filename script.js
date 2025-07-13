document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (id === "sandeep" && password === "Sandy") {
        window.location.href = "articles.html";
    } else {
        document.getElementById("errorMsg").textContent = "Invalid ID or Password.";
    }
});
