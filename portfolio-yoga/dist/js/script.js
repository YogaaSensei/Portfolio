document.addEventListener("DOMContentLoaded", () => {
const scrollUp = document.querySelector(".scroll-up");
if (!scrollUp) return;

window.addEventListener("scroll", () => {
scrollUp.classList.toggle("scroll-active", window.scrollY > 500);
});
}); 