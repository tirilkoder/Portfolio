// imported function "themeToggle" from a module in the "theme_toggle.js" file
import { themeToggle } from "./theme_toggle.js";

// Find and store a reference to the class "toggle_button" in the html document
const button = document.querySelector(".toggle_button");

// Add an event listener to the div class, listening for a "click" event, and preforming the function when activated
button.addEventListener("click", themeToggle);

// html elements we need to use javascript on from the "index.html" file
const navBar = document.querySelector(".ul");
const hamburger = document.querySelector(".hamburger");

// tracks if the navbar is opened or not
let navOpen = false;

// toggles navbar and changes the styling
function toggleNav() {
  if (navOpen === false) {
    navBar.classList = "show_nav";
    hamburger.classList = "fixed_burger";
    navOpen = true;
  } else {
    navBar.classList = "ul";
    hamburger.classList = "hamburger";
    navOpen = false;
  }
}

hamburger.addEventListener("click", toggleNav);
