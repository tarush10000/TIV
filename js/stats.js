const animateNumbers = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
        
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const increment = target / 100;

        let current = 0;

        const updateNumber = () => {
            current += increment;
            if (current >= target) {
                stat.textContent = target; // Final number
            } else {
                stat.textContent = Math.floor(current); // Incremented value
                requestAnimationFrame(updateNumber);
            }
        };

        updateNumber();
    });
};

const statsSection = document.getElementById('section_3');
let animationStarted = false;

window.addEventListener('scroll', () => {
    const sectionTop = statsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight && !animationStarted) {
        animationStarted = true;
        animateNumbers();
    }
});



