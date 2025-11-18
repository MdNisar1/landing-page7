// mobile navbar
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
navLinks.classList.toggle("open");
});


// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
link.addEventListener("click", e => {
const target = link.getAttribute("href");
if (target.length > 1) {
e.preventDefault();
document.querySelector(target).scrollIntoView({ behavior: "smooth" });
navLinks.classList.remove("open");
}
});
});


// gallery modal
const thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(img => {
img.addEventListener("click", () => {
const modal = document.createElement("div");
modal.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center";
const big = document.createElement("img");
big.src = img.src;
big.style.maxWidth = "90%";
big.style.borderRadius = "10px";
modal.appendChild(big);
modal.onclick = () => modal.remove();
document.body.appendChild(modal);
});
});


// year update
document.getElementById("year").textContent = new Date().getFullYear();


// contact form
const form = document.getElementById("contactForm");
form.addEventListener("submit", e => {
e.preventDefault();
alert("Your message has been received!");
form.reset();
});