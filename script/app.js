// Dark Mode Toggle theme

// Select the theme button
const themeBtn = document.querySelector(".theme-btn");

// Get the icon element within the theme button
let icon = themeBtn.querySelector(".fa-moon");

// Check and apply saved theme preference from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
} else {
  // Ensure the light mode is set initially
  document.body.classList.remove("dark-mode");
  icon.classList.replace("fa-sun", "fa-moon");
}

// Add a click event listener to the theme button
themeBtn.addEventListener("click", () => {
  // Toggle the 'dark-mode' class on the body element to switch themes
  document.body.classList.toggle("dark-mode");

  // Check if dark mode is currently active
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark"); // Save preference as dark mode
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light"); // Save preference as light mode
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const leftContainer = document.querySelector(".container-left");
  const contactForm = document.querySelector("#contactForm");

  // Calculate the position where the contact form starts
  const contactFormPosition = contactForm.offsetTop;

  // Add a threshold value to determine when to start scrolling
  const offset = 800;

  // Add a scaling factor to control the rate of scrolling
  const scaleFactor = 0.8;

  window.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Calculate the position where the left container should stop
    const containerTopLimit = Math.max(contactFormPosition - offset, 0);
    const containerBottomLimit = containerTopLimit + leftContainer.offsetHeight;

    // Calculate how much to move the left container
    let moveAmount = 0;

    if (scrollPosition >= contactFormPosition - offset) {
      moveAmount =
        (scrollPosition - (contactFormPosition - offset)) * scaleFactor;
      moveAmount = Math.min(
        moveAmount,
        containerBottomLimit - window.innerHeight
      );
    }

    leftContainer.style.top = `-${Math.max(moveAmount, 0)}px`; // Move the left container up smoothly
  });
});

// JavaScript for toggling work experience details
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".workplace");
  const contents = document.querySelectorAll(".work-content");

  // Show the first content and highlight the first item by default
  if (contents.length > 0) {
    contents[0].classList.add("active");
    items[0].classList.add("active");
  }

  items.forEach((item) => {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");

      // Remove active class from all content and items
      contents.forEach((content) => {
        content.classList.remove("active");
      });
      items.forEach((i) => {
        i.classList.remove("active");
      });

      // Add active class to the clicked item and corresponding content
      this.classList.add("active");
      document.getElementById(targetId).classList.add("active");
    });
  });
});

// toggle the navigation menu when the hamburger icon is clicked
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector("#mainHeader").classList.toggle("active");
  });

// Collapse the navigation menu after a link is clicked
document.querySelectorAll("#mainHeader a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector("#mainHeader").classList.remove("active");
  });
});

// Add functionality to collapse menu when the night/day toggle is activated
document.querySelector(".theme-btn").addEventListener("click", function () {
  document.querySelector("#mainHeader").classList.remove("active");
  // Your existing code for night/day toggle goes here
});
