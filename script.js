// Toggle night day mood
const moodToggle = document.getElementById("toggle-mood");
const body = document.body;
let mood = true;

moodToggle.addEventListener("click", () => {
    if (mood) {
        mood = false;
        moodToggle.setAttribute("src", "./images/icon-sun.svg");
        body.style.backgroundColor = "var(--VeryDarkBlue)";
        body.style.backgroundImage = "url('/images/bg-desktop-dark.jpg')";
    } else {
        mood = true;
        moodToggle.setAttribute("src", "./images/icon-moon.svg");
        body.style.backgroundColor = "var(--VeryLightGray)";
        body.style.backgroundImage = "url('/images/bg-desktop-light.jpg')";
    }
})