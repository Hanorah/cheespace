// Typewriter effect
const typewriterText = [
    "WEB DEVELOPMENT",
    "BRAND",
    "APP DEVELOPMENT",
    "SOCIAL MEDIA MARKETING",
    "DIGITAL MARKETING"
];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typewriterElement = document.querySelector(".typewriter");

function type() {
    const speed = isDeleting ? 100 : 200;
    if (typewriterElement) {
        if (!isDeleting && j < typewriterText[i].length) {
            currentText += typewriterText[i].charAt(j);
            j++;
            typewriterElement.innerHTML = currentText;
        } else if (isDeleting && j > 0) {
            currentText = currentText.substring(0, j - 1);
            j--;
            typewriterElement.innerHTML = currentText;
        } else if (!isDeleting && j === typewriterText[i].length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % typewriterText.length;
        }
        setTimeout(type, speed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    type();

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const reelBtn = document.getElementById('reel-btn');
    const videoPopup = document.getElementById('video-popup');
    const popupVideo = document.getElementById('popup-video');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            if (overlay) {
                overlay.style.display = 'flex';
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (overlay) {
                overlay.style.display = 'none';
            }
        });
    }

    if (reelBtn) {
        reelBtn.addEventListener('click', function () {
            if (videoPopup && popupVideo) {
                videoPopup.style.display = 'flex';
                popupVideo.play();
            }
        });
    }

    if (videoPopup) {
        videoPopup.addEventListener('click', function (e) {
            if (e.target === videoPopup) {
                videoPopup.style.display = 'none';
                if (popupVideo) {
                    popupVideo.pause();
                }
            }
        });
    }

    // Scroll animation functionality
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry);  // Add this line to see the IntersectionObserver entries
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    animateOnScroll.forEach(element => {
        observer.observe(element);
    });
});
