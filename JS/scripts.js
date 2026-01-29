







// Project Dropdown Code
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown-toggle');
  const content = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', () => {
    if (content.style.maxHeight) {
      // Close it
      content.style.maxHeight = null;
      content.style.paddingTop = '0';
      content.style.paddingBottom = '0';
    } else {
      // Open it fully
      // Use scrollHeight + extra padding to ensure full display
      const extra = 32; // adjust if your <p> have margins
      content.style.maxHeight = content.scrollHeight + extra + 'px';
      content.style.paddingTop = '1em';
      content.style.paddingBottom = '1em';
    }
  });
});


