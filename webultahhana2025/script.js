document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("giftBox").addEventListener("click", function () {
        this.style.display = "none"; // Sembunyikan gift box
        document.getElementById("flower").classList.remove("hidden"); // Tampilkan bunga
        document.querySelector(".ucapan-setelah").classList.remove("hidden"); // Tampilkan teks
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const playButton = document.getElementById("playMusic");

    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            playButton.textContent = "⏸ Pause";
        } else {
            music.pause();
            playButton.textContent = "🎵 Play";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const giftBox = document.getElementById("giftBox");
    const flower = document.getElementById("flower");
    const confettiCanvas = document.getElementById("confettiCanvas");
    const ctx = confettiCanvas.getContext("2d");

    let confettiArray = [];
    let isConfettiRunning = false;
    let animationFrameId;

    function resizeCanvas() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Confetti {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * -window.innerHeight;
            this.size = Math.random() * 8 + 2;
            this.speedY = Math.random() * 3 + 2;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        update() {
            this.y += this.speedY;
            if (this.y > window.innerHeight) {
                this.y = Math.random() * -window.innerHeight;
                this.x = Math.random() * window.innerWidth;
            }
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function startConfetti() {
        confettiArray = [];
        for (let i = 0; i < 150; i++) {
            confettiArray.push(new Confetti());
        }
        isConfettiRunning = true;
        animateConfetti();

        // Hentikan konfetti setelah 5 detik
        setTimeout(() => {
            isConfettiRunning = false;
            cancelAnimationFrame(animationFrameId);
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }, 10000);
    }

    function animateConfetti() {
        if (!isConfettiRunning) return; // Hentikan animasi jika status false

        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiArray.forEach((confetti) => {
            confetti.update();
            confetti.draw();
        });

        animationFrameId = requestAnimationFrame(animateConfetti);
    }

    giftBox.addEventListener("click", function () {
        this.style.display = "none";
        flower.classList.remove("hidden");
        
        startConfetti();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Happy Birthday, Hana";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typingText").textContent += text[i];
            i++;
            setTimeout(typeEffect, 150); // Kecepatan mengetik (ms)
        }
    }
    typeEffect(); // Mulai efek mengetik
});


const gallery = document.querySelector(".gallery");
const photos = document.querySelectorAll(".photo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function updateGallery() {
    gallery.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", function () {
    index = (index > 0) ? index - 1 : photos.length - 1;
    updateGallery();
});

nextBtn.addEventListener("click", function () {
    index = (index < photos.length - 1) ? index + 1 : 0;
    updateGallery();
});



