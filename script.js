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


// Enable collapsible functionality for all sections with a .collapsible-header
document.addEventListener('DOMContentLoaded', function() {
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.parentElement.classList.toggle('open');
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Sample project data (replace these with your actual projects)
  const projectsData = [
    {
      image: 'assets/img/bitcoinpp.jpeg',
      name: 'Bitcoin Price Prediction Using ML',
      description: 'This predict a signal that indicates whether buying a particular bitcoin stock.',
      link: 'https://example.com/project1'
    },
    {
      image: 'projects/Credit-Card-Financial-Weekly-Dashboard-Report-project-PBI.png',
      name: 'Credit card financial dashboard using PowerBI',
      description: 'Developed an interactive dashboard using transaction and customer data from a SQL database, to provide real-time insights',
      link: 'https://github.com/Arignan/Credit-Card-Financial-Weekly-Dashboard-Report-project-PBI'
    },
    {
      image: 'projects/Evaluating Solutions to Ameliorate the Impact of Food Deserts in Brooklyn Using AI.jpg',
      name: 'Evaluating Solutions to Ameliorate the Impact of Food Deserts in Brooklyn Using AI',
      description: 'Evaluating Solutions to Ameliorate the Impact of Food Deserts in Brooklyn Using AI for NOURISH, an AI-powered platform dedicated to tackling food insecurity.',
      link: 'https://example.com/project3'
    },
    {
      image: 'projects/Nasa exoplanet watch.jpg',
      name: 'Nasa exoplanet watch',
      description: 'Nasa exoplanet watch to find and analysis exoplanet data.',
      link: 'https://example.com/project4'
    },
    {
      image: 'projects/omdena glasgow tourism.jpg',
      name: `Exploring the Role of Social Media and AI in Promoting Glasgow's Tourism.`,
      description: `Exploring the Role of Social Media and AI in Promoting Glasgow's Tourism.`,
      link: 'https://example.com/project5'
    },
    {
      image: 'assets/img/credidcardfd.jpeg',
      name: 'Credit Card Fraud Detection',
      description: 'With Machine Learning, Predict Credit card fraud.',
      link: 'https://example.com/project6'
    },
    // Add more projects as needed...
    {
      image: '',
      name: 'Project 7',
      description: 'This is a description for Project 7.',
      link: 'https://example.com/project7'
    },
    {
      image: '',
      name: 'Project 8',
      description: 'This is a description for Project 8.',
      link: 'https://example.com/project8'
    }
    // ... and so on.
    ,
    {
      image: '',
      name: 'Project 9',
      description: 'This is a description for Project 1.',
      link: 'https://example.com/project1'
    },
    {
      image: '',
      name: 'Project 10',
      description: 'This is a description for Project 2.',
      link: 'https://example.com/project2'
    },
    {
      image: '',
      name: 'Project 11',
      description: 'This is a description for Project 3.',
      link: 'https://example.com/project3'
    },
    {
      image: '',
      name: 'Project 12',
      description: 'This is a description for Project 4.',
      link: 'https://example.com/project4'
    },
    {
      image: '',
      name: 'Project 13',
      description: 'This is a description for Project 5.',
      link: 'https://example.com/project5'
    },
    {
      image: '',
      name: 'Project 14',
      description: 'This is a description for Project 6.',
      link: 'https://example.com/project6'
    },
    // Add more projects as needed...
    {
      image: '',
      name: 'Project 15',
      description: 'This is a description for Project 7.',
      link: 'https://example.com/project7'
    },
    {
      image: '',
      name: 'Project 16',
      description: 'This is a description for Project 8.',
      link: 'https://example.com/project8'
    }
  ];

  // Number of projects per page (2 rows × 3 columns = 6)
  const projectsPerPage = 6;
  const pages = [];
  for (let i = 0; i < projectsData.length; i += projectsPerPage) {
    pages.push(projectsData.slice(i, i + projectsPerPage));
  }

  // Get the projects track container
  const projectsTrack = document.getElementById("projectsTrack");

  // Create DOM elements for each page and its project cards
  pages.forEach(pageProjects => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('projects-wrapper');

    pageProjects.forEach(project => {
      // Create the project card
      const card = document.createElement('div');
      card.classList.add('project-card');

      // Create the link element wrapping the image
      const link = document.createElement('a');
      link.href = project.link;
      link.target = '_blank'; // Open the project in a new tab

      // Create the image element
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.name;
      img.classList.add('project-image');

      link.appendChild(img);

      // Create the content container (for title and description)
      const content = document.createElement('div');
      content.classList.add('project-content');

      // Create the title element
      const title = document.createElement('h4');
      title.classList.add('aproject-title');
      title.textContent = project.name;

      // Create the description element
      const description = document.createElement('p');
      description.classList.add('project-description');
      description.textContent = project.description;

      // Append title and description to content
      content.appendChild(title);
      content.appendChild(description);

      // Append the link (with image) and content to the card
      card.appendChild(link);
      card.appendChild(content);

      // Append the card to the page wrapper
      wrapper.appendChild(card);
    });

    // Append the page wrapper to the projects track
    projectsTrack.appendChild(wrapper);
  });

  // Navigation Code for Carousel
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const container = document.querySelector(".aprojects-container");

  // Disable auto-scroll animation (if any) so manual navigation works
  projectsTrack.style.animation = "none";

  // Get all the page wrappers created above
  const pageWrappers = projectsTrack.querySelectorAll(".projects-wrapper");
  let currentPage = 0;
  const totalPages = pageWrappers.length;

  // Calculate the width of one page (assumed to be the width of the container)
  let pageWidth = container.offsetWidth;

  // Function to update the carousel transform based on the current page
  function updateCarousel() {
    projectsTrack.style.transform = `translateX(-${currentPage * pageWidth}px)`;
  }

  // Next button: Move to the next page (or loop back to the first)
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages - 1) {
      currentPage++;
    } else {
      currentPage = 0;
    }
    updateCarousel();
  });

  // Previous button: Move to the previous page (or loop to the last)
  prevButton.addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
    } else {
      currentPage = totalPages - 1;
    }
    updateCarousel();
  });

  // Update page width on window resize to keep responsiveness
  window.addEventListener("resize", function () {
    pageWidth = container.offsetWidth;
    updateCarousel();
  });

  // Overlay functionality with a 1-second hover delay
  const overlay = document.getElementById("projectOverlay");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlayDescription = document.getElementById("overlayDescription");
  const closeOverlay = document.getElementById("closeOverlay");
  const overlayImage = document.getElementById("overlayImage");

  // Attach hover listeners to each project card
  document.querySelectorAll(".project-card").forEach(card => {
    let hoverTimer;

    card.addEventListener("mouseenter", function () {
      hoverTimer = setTimeout(() => {
        // Retrieve project details from the card
        const title = card.querySelector('.aproject-title').textContent;
        const description = card.querySelector('.project-description').textContent;
        const imgSrc = card.querySelector('.project-image').src;
        overlayTitle.textContent = title;
        overlayDescription.textContent = description;
        overlayImage.src = imgSrc;
        overlay.classList.add("show");
      }, 1000); // 1000ms delay before showing overlay
    });

    card.addEventListener("mouseleave", function () {
      clearTimeout(hoverTimer);
    });
  });

  // Close the overlay when the close button is clicked
  closeOverlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  // Close the overlay if clicking outside the overlay content
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });
});

// --- Infinite Scroll Code

// --- End of Infinite Scroll Code ---

//Education and Ecperience section 
document.addEventListener('DOMContentLoaded', function() {

  // --- Dynamic Duration Calculation Code for Software Engineer ---
  const startDateSoftwareEngineer = new Date('2025-02-01'); // February 1st, 2025
  const currentDate = new Date();
  const durationSpanSoftwareEngineer = document.getElementById('experience-duration-software-engineer');

  if (durationSpanSoftwareEngineer) {
      const durationSoftwareEngineer = getYearsAndMonths(startDateSoftwareEngineer, currentDate);
      durationSpanSoftwareEngineer.textContent = `(${durationSoftwareEngineer.yearsMonths})`;
  }
  // --- End of Dynamic Duration Calculation for Software Engineer ---

   // --- Dynamic Duration Calculation Code for ML Engineer (Existing - Modified ID) ---
  const startDateMLEngineer = new Date('2024-04-01'); // April 1st, 2024
  const durationSpanMLEngineer = document.getElementById('experience-duration-ml-engineer'); // Using the modified ID

  if (durationSpanMLEngineer) {
      const durationMLEngineer = getYearsAndMonths(startDateMLEngineer, currentDate);
      durationSpanMLEngineer.textContent = `(${durationMLEngineer.yearsMonths})`;
  }
  // --- End of Dynamic Duration Calculation for ML Engineer ---


  function getYearsAndMonths(startDate, endDate) {
      let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
      totalMonths -= startDate.getMonth();
      totalMonths += endDate.getMonth();

      let years = Math.floor(totalMonths / 12);
      let months = totalMonths % 12;

      let durationText = "";
      if (years > 0) {
          durationText += years + " year";
          if (years > 1) {
              durationText += "s";
          }
          if (months > 0) {
              durationText += " and ";
          }
      }
      if (months > 0) {
          durationText += months + " month";
          if (months > 1) {
              durationText += "s";
          }
      }
      if (durationText === "") {
          durationText = "Less than a month";
      }

      return {
          years: years,
          months: months,
          yearsMonths: durationText
      };
  }
  // --- End of getYearsAndMonths Function ---

});

























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
