// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animateRing);
}
animateRing();

document
  .querySelectorAll("a, button, .mode-pill, .tab-btn, .feature-card, .use-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1.8)";
      ring.style.opacity = "0.8";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.opacity = "0.5";
    });
  });

// Mode pills
function setMode(el) {
  document
    .querySelectorAll(".mode-pill")
    .forEach((p) => p.classList.remove("active"));
  el.classList.add("active");
}

// Audience tabs
function switchTab(tab, btn) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-" + tab).classList.add("active");
}

// Email submit
function handleSubmit() {
  const val = document.getElementById("emailInput").value;
  const msg = document.getElementById("submitMsg");
  if (!val || !val.includes("@")) {
    msg.textContent = "Lütfen geçerli bir e-posta gir.";
    msg.style.color = "#f87171";
  } else {
    msg.textContent = "✦ Harika! Listeye eklendin. Seni haberdar edeceğiz.";
    msg.style.color = "var(--amber)";
    document.getElementById("emailInput").value = "";
  }
  msg.style.opacity = "1";
  setTimeout(() => (msg.style.opacity = "0"), 3500);
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal-container, .use-card").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
