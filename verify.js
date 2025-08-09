document.getElementById("verify-btn").addEventListener("click", () => {
    const checkbox = document.getElementById("iamrobot");
    const captchaAnswer = document.getElementById("robot-captcha").value.trim();
    const feedback = document.getElementById("feedback");

    if (!checkbox.checked) {
        feedback.innerText = "❌ Too human. Please confirm you are a robot.";
        return;
    }

    if (captchaAnswer.toUpperCase() !== "HI") {
        feedback.innerText = "❌ Incorrect. Only a robot could solve this. Try again.";
        return;
    }

    const loadingScreen = document.getElementById("loading-screen");
    const loadingMessage = document.getElementById("loading-message");

    const fakeSteps = [
        "Analyzing your heartbeat patterns…",
        "Measuring facial symmetry…",
        "Scanning for binary brainwaves…",
        "Finalizing verdict…"
    ];

    let step = 0;
    loadingScreen.style.display = "flex";

    const interval = setInterval(() => {
        loadingMessage.innerText = fakeSteps[step];
        step++;
        if (step === fakeSteps.length) {
            clearInterval(interval);
            loadingScreen.style.display = "none";
            feedback.innerText = "✅ Verification successful. You are officially a robot.";
        }
    }, 1500);
});