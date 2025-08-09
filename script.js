function applyTheme(themeName) {
    const theme = themes[themeName];
    document.getElementById("login-logo").src = theme.logo;
    document.getElementById("login-title").innerText = theme.title;
    document.getElementById("login-subtitle").innerText = theme.subtitle;
    document.getElementById("verify-btn").style.background = theme.buttonColor;
    document.body.style.background = theme.background;
    document.getElementById("extra-link").innerHTML = <a href="#">${theme.linkText}</a>;
}

// Theme selector
document.getElementById("theme").addEventListener("change", (e) => {
    applyTheme(e.target.value);
});

// Apply default theme
applyTheme("google");

// Reverse CAPTCHA logic
document.getElementById("verify-btn").addEventListener("click", () => {
   const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        document.getElementById("feedback").innerText = "Please enter your email and password.";
        return;
    }

    // Start fake verification
    const loadingScreen = document.getElementById("loading-screen");
    const loadingMessage = document.getElementById("loading-message");
    
    const fakeSteps = [
        "Analyzing your heartbeat patterns…",
        "Measuring facial symmetry…",
        "Calculating robot probability score…",
        "Finalizing verdict…"
    ];
    
    let step = 0;
    loadingScreen.style.display = "flex";
    
    const interval = setInterval(() => {
        loadingMessage.innerText = fakeSteps[step];
        step++;
        if (step === fakeSteps.length) {
            clearInterval(interval);
            fetch("/verify")
                .then(res => res.json())
                .then(data => {
                    loadingScreen.style.display = "none";
                    document.getElementById("feedback").innerText = data.message;
                });
        }
    }, 1500);
});