
    document.addEventListener('DOMContentLoaded', () => {
        const heartsContainer = document.querySelector('.hearts');
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart', 'absolute', 'text-pink-500');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Slower animation
            heart.style.animationDelay = `${Math.random() * 5}s`; // Longer delay
            heartsContainer.appendChild(heart);
        }
    });

    document.querySelector('.enter-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
 function flipCard(card) {
            card.classList.toggle('flipped');
        }
        function playSound() {
            document.getElementById('audio').play();
        }