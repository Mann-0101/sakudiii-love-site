function startExperience() {
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".main").classList.remove("hidden");
  document.getElementById("music").play();
}

// Typing
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

// 💖 COUNTER
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

// Proposal
function acceptLove() {
  alert("I LOVE YOUUU 😭❤️");
}

function moveButton(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * window.innerHeight + "px";
  btn.style.left = Math.random() * window.innerWidth + "px";
}

// Secret
function revealSecret() {
  document.querySelector(".hidden-message").style.display = "block";
}

// Hearts
document.addEventListener("click", e => {
  for (let i = 0; i < 10; i++) {
    let h = document.createElement("div");
    h.innerHTML = "❤️";
    h.style.position = "absolute";
    h.style.left = e.clientX + "px";
    h.style.top = e.clientY + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1000);
  }
});

// Timeline animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".moment").forEach(el => observer.observe(el));