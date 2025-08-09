// Reverse CAPTCHA backen
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/verifyCaptcha", (req, res) => {
    const messages = [
        "I am a robot ✅",
        "Robot verification passed.",
        "Confirmed: You are a robot.",
        "AI identity confirmed.",
        "Robot status: Verified."
    ];
    res.json({
        success: true,
        message: messages[Math.floor(Math.random() * messages.length)]
    });
});

app.listen(PORT, () => {
    console.log('Reverse CAPTCHA running at http://localhost:${PORT}');
});