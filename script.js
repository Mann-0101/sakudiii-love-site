// 🎬 START EXPERIENCE
function startExperience() {
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".main").classList.remove("hidden");
  document.getElementById("music").play();
}

// 💌 TYPING EFFECT
const text = "You are my forever, Sakudiii ❤️🫶";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

// ⏳ LOVE COUNTER
const meetDate = new Date("June 27, 2023 00:00:00");
const loveDate = new Date("October 20, 2023 00:00:00");

function updateCounter() {
  const now = new Date();

  function calc(date) {
    let diff = now - date;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    return `${days} days ${hours} hrs ${minutes} mins ${seconds} secs ❤️`;
  }

  document.getElementById("sinceMeet").innerText = calc(meetDate);
  document.getElementById("sinceLove").innerText = calc(loveDate);
}

setInterval(updateCounter, 1000);

// 💍 PROPOSAL
function acceptLove() {
  alert("YAYYYY 😭❤️ I LOVE YOU SO MUCH 🫂💖");
}

function moveButton(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * window.innerHeight + "px";
  btn.style.left = Math.random() * window.innerWidth + "px";
}

// 🔒 SECRET
function revealSecret() {
  document.querySelector(".hidden-message").style.display = "block";
}

// 📖 TIMELINE ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".moment").forEach(el => observer.observe(el));

// 📸 IMAGE REVEAL + HEART BURST
const cards = document.querySelectorAll(".card");

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // 💥 hearts on appear
      for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";

        entry.target.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
      }
    }
  });
});

cards.forEach(card => observer2.observe(card));

// 💗 CLICK HEART EXPLOSION
document.addEventListener("click", e => {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.classList.add("heart");

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});