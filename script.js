
// ===== LINK =====
const link = "https://forms.gle/cjCi6WXpCvk7vWRp6";

function openLink(){
  window.open(link, "_blank");
}

// ===== MOBILE MENU =====
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

// ===== DROPDOWN =====
function toggleDropdown(){
  const menu = document.getElementById("dropdownMenu");
  if(menu){
    menu.classList.toggle("active");
  }
}

// ===== SCROLL ANIMATION (ONE OBSERVER ONLY) =====
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

// APPLY TO ALL ELEMENTS
document.querySelectorAll(".fade-up, .fade-down, .service-card, .portfolio-card, .pricing-card, .testimonial-card")
.forEach(el=>{
  observer.observe(el);
});


// ===== TESTIMONIAL SLIDER =====
const slides = document.querySelectorAll(".testimonial-card");

if(slides.length > 0){
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}


// ===== SERVICE CARD TILT EFFECT =====
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });

});