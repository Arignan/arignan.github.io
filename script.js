function toggleMenu(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isMenuVisible = menu.classList.contains("open");

  // Toggle visibility based on current state
  menu.classList.toggle("open");/* Toggle main class */
  icon.classList.toggle("open");

  // Add event listener to the document to close the menu if clicked outside
  document.addEventListener("click", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Check if the click target is outside the menu
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    // Close the menu
    menu.classList.remove("open");
    icon.classList.remove("open");

    // Remove the event listener to avoid duplicate listeners
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

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
