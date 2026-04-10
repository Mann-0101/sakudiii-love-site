// 🎬 START EXPERIENCE (with burst)
function startExperience() {
  const intro = document.querySelector(".intro");

  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.classList.add("heart");

    heart.style.left = window.innerWidth / 2 + "px";
    heart.style.top = window.innerHeight / 2 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }

  setTimeout(() => {
    intro.style.display = "none";
    document.querySelector(".main").classList.remove("hidden");
    document.getElementById("music").play();
  }, 500);
}

// 💌 TYPING
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

// ⏳ COUNTER
const meetDate = new Date("June 27, 2023");
const loveDate = new Date("October 20, 2023");

function updateCounter() {
  const now = new Date();

  function calc(date) {
    let diff = now - date;
    let d = Math.floor(diff / 86400000);
    let h = Math.floor((diff / 3600000) % 24);
    let m = Math.floor((diff / 60000) % 60);
    let s = Math.floor((diff / 1000) % 60);
    return `${d} days ${h} hrs ${m} mins ${s} secs ❤️`;
  }

  document.getElementById("sinceMeet").innerText = calc(meetDate);
  document.getElementById("sinceLove").innerText = calc(loveDate);
}
setInterval(updateCounter, 1000);

// 📖 TIMELINE
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
});
document.querySelectorAll(".moment").forEach(el => observer.observe(el));

// 📸 IMAGE REVEAL + HEART BURST
const cards = document.querySelectorAll(".card");

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";

        entry.target.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
      }
    }
  });
});
cards.forEach(card => observer2.observe(card));

// 💖 BACKGROUND HEARTS HERO
const hero = document.querySelector(".hero");

setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("bg-heart");

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = Math.random() * 15 + 10 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  hero.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 300);

// 💗 CLICK EXPLOSION
document.addEventListener("click", e => {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.classList.add("heart");

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
});

// 💍 PROPOSAL
function acceptLove() {
  alert("YAYYYY 😭❤️ I LOVE YOU SOO MUUCCHHH 🫂💖");
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