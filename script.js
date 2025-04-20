
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const viewMoreBtn = document.getElementById('view-more-btn');
  const extraCourses = document.getElementById('extra-courses');

  // Toggle hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
  });

  // Toggle extra courses visibility
  viewMoreBtn.addEventListener('click', () => {
    extraCourses.classList.toggle('active');
  });




//   scrolling button



  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show button when user scrolls down
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // Scroll to top smoothly when button clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
