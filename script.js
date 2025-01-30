// Function to toggle the menu visibility when the hamburger icon is clicked
function toggleMenu() {
  // Select the menu and the hamburger icon elements
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the 'open' class on both the menu and icon
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // If the menu is now open, add an event listener to close it when clicking outside
  if (menu.classList.contains("open")) {
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    // If the menu is closed, remove the event listener to avoid unnecessary processing
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Function to close the menu when clicking outside of it
function closeMenuOnClickOutside(event) {
  // Select the menu and the hamburger icon
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Check if the menu is currently open
  if (!menu.classList.contains("open")) return;

  // If the user clicks outside both the menu and the icon, close the menu
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");

    // Remove the event listener since the menu is now closed
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Function to close the menu when the user presses the Escape key
document.addEventListener("keydown", (event) => {
  // Check if the pressed key is "Escape"
  if (event.key === "Escape") {
    // Select the menu and icon
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // If the menu is open, close it
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");

      // Remove the event listener for clicking outside
      document.removeEventListener("click", closeMenuOnClickOutside);
    }
  }
});

// Function to close the menu when a menu link is clicked (important for mobile users)
document.querySelectorAll(".menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    // Select the menu and icon
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Close the menu when a link is clicked
    menu.classList.remove("open");
    icon.classList.remove("open");
  });
});

// Function to change the navigation bar background on scroll
window.addEventListener("scroll", () => {
  // Select the navbar element
  const nav = document.querySelector("#hamburger-nav");

  // If the page is scrolled more than 50 pixels, change the background color
  if (window.scrollY > 50) {
    nav.classList.add("scrolled"); // Adds a class to change styling
  } else {
    nav.classList.remove("scrolled"); // Removes the class when at the top
  }
});

// Function to enable smooth scrolling for anchor links (links starting with #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default jumping behavior

    // Get the target section based on the link's href attribute
    const target = document.querySelector(this.getAttribute("href"));

    // Scroll smoothly to the target section if it exists
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  });
});

// Function to highlight the active menu item based on scroll position
window.addEventListener("scroll", () => {
  // Select all sections and navigation links
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-links a");

  let activeIndex = -1; // Variable to store the index of the active section

  sections.forEach((section, index) => {
    // Calculate the position of the section relative to the viewport
    const sectionTop = section.offsetTop - window.innerHeight / 2;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if the user is in the section
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      activeIndex = index;
    }
  });

  // If an active section is found, highlight the corresponding menu link
  if (activeIndex !== -1) {
    links.forEach(link => link.classList.remove("active")); // Remove 'active' class from all links
    links[activeIndex].classList.add("active"); // Add 'active' class to the current section's link
  }
});

// Function to highlight a menu item when clicked (glow effect)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    // Remove 'active' class from all links
    document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));

    // Add 'active' class to the clicked link
    link.classList.add("active");
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
