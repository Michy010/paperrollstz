const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1.5s ease forwards';
            }
        });
    },
    { threshold: 0.3 }
);

document.querySelectorAll('.reasons').forEach((section) => {
    observer.observe(section);
});