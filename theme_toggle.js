export function themeToggle() {
    // Find and store a reference to the class "body" in the html document
    const body = document.querySelector("body");

    // Toggle the class "dark_mode" on the class "body"
    body.classList.toggle("dark_mode");
}    