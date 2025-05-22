document.addEventListener("DOMContentLoaded", function () {
    let openmodalbtn = document.getElementById("openmodalbtn");
    let closemodalbtn = document.getElementById("closemodalbtn");
    let modal = document.getElementById("mymodal");
    let modalText = document.getElementById("modalText");

    // Useful js tips
const tips = [
    "💡 Use 'console.log()' to see what's happening in your code.",
    "📝 JavaScript runs from top to bottom — order matters!",
    "🔢 Numbers and strings are different. '5' (string) is not the same as 5 (number).",
    "🧱 Use `const` when you don't want a variable to change, and 'let' if it can change.",
    "👀 Always check your browser console for errors it tells you what's wrong.",
    "📦 Group related code into functions to make your code reusable.",
    "🌐 Use 'addEventListener()' to react to user actions like clicks or keypresses.",
    "🚫 Avoid using 'var' it can lead to confusing behavior. Use 'let' or 'const' instead.",
    "🧠 Practice writing small pieces of code every day to build muscle memory.",
    "📚 Read your own code out loud it helps spot mistakes and improve clarity."
];

    // Open the modal
    openmodalbtn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * tips.length);
        modalText.textContent = tips[randomIndex];
        modal.style.display = "flex";
    });

    // Close the modal
    closemodalbtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});