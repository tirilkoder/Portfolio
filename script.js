// imported function "themeToggle" from a module in the "theme_toggle.js" file
import { themeToggle } from "./theme_toggle.js";

// Find and store a reference to the class "toggle_button" in the document
const button = document.querySelector(".toggle_button");

// Add an event listener to the div class, listening for a "click" event, and preforming the function when activated
button.addEventListener("click", themeToggle);