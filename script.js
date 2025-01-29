// Function to toggle the visibility of the menu when the hamburger icon is clicked
function toggleMenu() {
  // Select the menu and the hamburger icon elements
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Check if the menu is currently visible (if it has the 'open' class)
  const isMenuVisible = menu.classList.contains("open");

  // Toggle the 'open' class on the menu and icon, which shows or hides the menu
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // If the menu is now visible, add an event listener to close the menu if the user clicks outside it
  if (!isMenuVisible) {
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    // If the menu is no longer visible, remove the event listener for clicking outside
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// This function closes the menu when the user clicks outside the menu or the icon
function closeMenuOnClickOutside(event) {
  // Select the menu and icon elements again
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // If the menu is not open, do nothing
  if (!menu.classList.contains("open")) return;

  // If the click is outside the menu and the icon, close the menu
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");

    // Remove the event listener for clicking outside after the menu is closed
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Allow the user to close the menu by pressing the Escape key for accessibility
document.addEventListener("keydown", (event) => {
  // If the Escape key is pressed
  if (event.key === "Escape") {
    // Select the menu and icon elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // If the menu is open, close it by removing the 'open' class
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");

      // Remove the event listener for clicking outside the menu since the menu is closed
      document.removeEventListener("click", closeMenuOnClickOutside);
    }
  }
});

// Change the background color of the navigation bar when the user scrolls
window.addEventListener("scroll", () => {
  const nav = document.querySelector("#hamburger-nav");
  
  // If the page is scrolled down, change the background color
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#333"; // Dark background when scrolled
  } else {
    nav.style.backgroundColor = "transparent"; // Transparent background at the top
  }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight the active menu item as the user scrolls through sections
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-links a");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Highlight the active link based on scroll position
    if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight) {
      links.forEach(link => link.classList.remove("active"));
      links[index].classList.add("active");
    }
  });
});

// Add click event to each link for the glow effect
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class from all links
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    
    // Add the 'active' class to the clicked link for glow effect
    link.classList.add('active');
  });
});

function scroolToTop(){
  window.scrollTo(0,0);
}





// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
