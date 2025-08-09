document.getElementById("nextBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    // Redirect to verification page with email passed in query string
    window.location.href = 'verify.html?email=${encodeURIComponent(email)}';
});