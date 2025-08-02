// Bintang bergerak di background
const stars = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.opacity = Math.random();
    stars.appendChild(star);
}

// Ikon melayang random
const icons = ['💻', '📱', '🤖', '🚀', '🔧', '🌐'];
const iconContainer = document.getElementById('floating-icons');

for (let i = 0; i < 20; i++) {
    let icon = document.createElement('div');
    icon.className = 'floating-icon';
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.animationDuration = (Math.random() * 10 + 10) + 's';
    iconContainer.appendChild(icon);
}
