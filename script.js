const text = "DevOps Engineer";
let index = 0;

// Typing animation
function type() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}
type();

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

// Skills dropdown
function toggleSkill(id) {
    let box = document.getElementById(id);

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}