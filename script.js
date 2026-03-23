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
