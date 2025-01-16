const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Apply the animation to the observed element
                entry.target.style.animation = 'fadeInUp 1.5s ease forwards';
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    },
    { threshold: 0.3 }
);

// Observe each .reason instead of .reasons
document.querySelectorAll('.reason').forEach((item) => {
    observer.observe(item);
});
