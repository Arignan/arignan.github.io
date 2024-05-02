

const projectBoxes = document.querySelectorAll('.publication-box');
const publicationContainer = document.querySelector('.publication-container');
const paginationContainer = document.querySelector('.pagination');
const filterButtons = document.querySelectorAll('.publication-filter li');

let currentPage = 1;
let itemsPerPage = 9;
let filteredItems = [];
let currentFilter = 'all';

// Function to filter items based on category
function filterItems(category) {
    currentFilter = category;
    filteredItems = Array.from(projectBoxes).filter(box => {
      // Check for data-category attribute (preferred)
      if (box.dataset.category) {
        return box.dataset.category === category || category === 'all';
      } else {
        // If no data-category, use class names (fallback)
        const classes = box.classList;
        return (classes.contains(category) || category === 'all');
      }
    });
    // Reset current page to 1 when filter changes
    currentPage = 1;
    renderPages();
}

// Function to render project items on the current page
function renderPages() {
  publicationContainer.innerHTML = '';
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsForCurrentPage = filteredItems.slice(startIndex, endIndex);

  itemsForCurrentPage.forEach(item => {
    publicationContainer.appendChild(item);
  });
  
  renderPagination();
}

// Function to render pagination links
function renderPagination() {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    if (i === currentPage) {
      link.classList.add('active');
    }
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      renderPages();
    });
    paginationContainer.appendChild(link);
  }
}

// Event listeners for filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterItems(category);
    filterButtons.forEach(btn => btn.classList.remove('publication-filter-active'));
    button.classList.add('publication-filter-active');
  });
});

// Initial render
filterItems('all');
document.querySelector('.publication-filter li[data-filter="all"]').classList.add('publication-filter-active');


