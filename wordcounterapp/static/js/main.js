document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const body = document.body;
    const toggleIcon = document.getElementById("toggle-icon");

    // Check local storage for theme preference
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
        body.classList.add("dark-mode");
        toggleIcon.src = "/static/icons/moon.svg"; // Set icon to moon for dark mode
    } else {
        body.classList.remove("dark-mode"); // Ensure light mode is set
        toggleIcon.src = "/static/icons/sun.svg"; // Set icon to sun for light mode
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        // Toggle the icon based on the current theme
        if (body.classList.contains("dark-mode")) {
            toggleIcon.src = "/static/icons/moon.svg"; // Set icon to moon for dark mode
            localStorage.setItem("theme", "dark");
        } else {
            toggleIcon.src = "/static/icons/sun.svg"; // Set icon to sun for light mode
            localStorage.setItem("theme", "light");
        }
    });
});
