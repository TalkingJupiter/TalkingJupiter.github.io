// Fade in elements on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Always reset scroll to top on page load
window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// Clear any lingering anchor like #contact from URL
if (window.location.hash) {
  window.history.replaceState(null, null, window.location.pathname);
}
