// =======================
// Typing effect
// =======================
const text = ["Curious mind.", "Quiet learner.", "Always evolving."];
let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
    if (j < text[i].length) {
        typing.innerHTML += text[i][j++];
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (j > 0) {
        typing.innerHTML = text[i].substring(0, --j);
        setTimeout(erase, 60);
    } else {
        i = (i + 1) % text.length;
        setTimeout(type, 500);
    }
}
type();


// =======================
// Fade on scroll
// =======================
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => observer.observe(el));


// =======================
// Eye logic (socket + pupil)
// =======================
const eyeSockets = document.querySelectorAll(".screen-eye");
const pupils = document.querySelectorAll(".pupil");

// Blinking
function blink() {
    eyeSockets.forEach(eye => {
        eye.style.height = "3px";
    });

    setTimeout(() => {
        eyeSockets.forEach(eye => {
            eye.style.height = "18px";
        });
    }, 150);

    setTimeout(blink, Math.random() * 3000 + 2000);
}
blink();


// Pupils follow cursor direction
document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const maxMove = 4; // subtle, realistic movement

    const moveX = Math.max(Math.min(deltaX / 60, maxMove), -maxMove);
    const moveY = Math.max(Math.min(deltaY / 60, maxMove), -maxMove);

    pupils.forEach(pupil => {
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});


// =======================
// Mouth idle movement
// =======================
const mouth = document.getElementById("screenMouth");

setInterval(() => {
    mouth.style.width = "34px";
    setTimeout(() => {
        mouth.style.width = "26px";
    }, 300);
}, 4500);
