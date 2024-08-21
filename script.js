// Menu Button Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Close menu when clicking on nav links
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.className = "ri-menu-line";
});

// ScrollReveal Animations
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", scrollRevealOptions);
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOptions,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOptions,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOptions,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOptions,
  delay: 3500,
});
ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 4500,
});
ScrollReveal().reveal(".location", {
  ...scrollRevealOptions,
  origin: "left",
  delay: 5000,
});
ScrollReveal().reveal(".socials span", {
  ...scrollRevealOptions,
  origin: "top",
  delay: 5500,
  interval: 500,
});

// Toggle "See More" Button
document.addEventListener('DOMContentLoaded', () => {
  const seeMoreBtn = document.getElementById('see-more-btn');
  const additionalOutfits = document.getElementById('additional-outfits');

  if (seeMoreBtn && additionalOutfits) {
    seeMoreBtn.addEventListener('click', () => {
      const isVisible = additionalOutfits.style.display === 'block';
      additionalOutfits.style.display = isVisible ? 'none' : 'block';
      seeMoreBtn.textContent = isVisible ? 'SEE MORE' : 'SHOW LESS';
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Load the theme from local storage if available
  const savedTheme = localStorage.getItem('theme') || 'day';
  body.classList.add(savedTheme);
  themeIcon.classList.add(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
      // Toggle between day and night modes
      const currentTheme = body.classList.contains('day') ? 'day' : 'night';
      const newTheme = currentTheme === 'day' ? 'night' : 'day';

      body.classList.remove(currentTheme);
      body.classList.add(newTheme);
      themeIcon.classList.remove(currentTheme);
      themeIcon.classList.add(newTheme);

      // Update icon based on the new theme
      themeIcon.className = newTheme === 'day' ? 'ri-sun-line' : 'ri-moon-line';

      // Save the new theme to local storage
      localStorage.setItem('theme', newTheme);
  });
});

