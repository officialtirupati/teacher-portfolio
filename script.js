// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Form
const scriptURL = "https://script.google.com/macros/s/AKfycbzLX1T7dp7AltAR7fXTsqnhKkB3B0vSCebVx0pODyWcVUDOBVWqOlkirapJNxQpcX2sVQ/exec";

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    document.getElementById("successMsg").innerText =
      "✅ Message sent successfully!";
    document.getElementById("contactForm").reset();
  })
  .catch(error => {
    document.getElementById("successMsg").innerText =
      "❌ Something went wrong!";
  });
});




// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Typing animation

const text = ["Botany Teacher 🌿", "Life Science Expert 🧬", "Helping Students Succeed"];
let index = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < text[index].length) {
    document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(() => {
      document.getElementById("typing").innerHTML = "";
      charIndex = 0;
      index = (index + 1) % text.length;
      typeEffect();
    }, 1500);
  }
}
typeEffect();

//Active Section Highlight
const sections = document.querySelectorAll("section");
const navLinksItems = document.querySelectorAll(".nav-links a"); // ✅ renamed

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinksItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
//dark mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Toggle menu

const toggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

//Close menu on click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});





