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




const cursorBall = document.querySelector('.cursor-ball');
  let x = 0, y = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    x += (targetX - x) * 0.1;
    y += (targetY - y) * 0.1;
    cursorBall.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
  }

  animate();