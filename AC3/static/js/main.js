function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

function searchFunction() {
    const query = document.getElementById('search').value.trim();
    if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank');
    } else {
        alert('Please enter a search term');
    }
}

function showModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
}

document.getElementById('loginButton').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Login successful!');
    document.getElementById('loginModal').style.display = 'none';
  });

function createParticles() {
    const container = document.body;
    for (let i = 0; i < 20; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.animationDuration = Math.random() * 5 + 3 + 's';
        container.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }
}

function addVideoEffects() {
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('mouseenter', () => {
            video.style.transform = 'scale(1.05)';
            video.style.boxShadow = '0 0 20px var(--color-primary)';
        });
        video.addEventListener('mouseleave', () => {
            video.style.transform = 'scale(1)';
            video.style.boxShadow = 'none';
        });
    }
}

function addButtonEffects() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.9)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });
    });
}
function createFloatingImages() {
    const container = document.body;
    const images = ['../static/img/popc.webp'];

    for (let i = 0; i < 20; i++) {
        let img = new Image(); 
        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add('floating-img');

        img.style.left = Math.random() * (window.innerWidth - 100) + 'px'; 
        img.style.top = Math.random() * (window.innerHeight - 100) + 'px';

        img.onload = () => {
            container.appendChild(img);

            setTimeout(() => {
                img.remove();
            }, 5000);
        };

        img.onerror = () => {
            console.error('Error al cargar la imagen:', img.src);
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    createParticles();
    addVideoEffects();
    addButtonEffects();
    createFloatingImages();

});