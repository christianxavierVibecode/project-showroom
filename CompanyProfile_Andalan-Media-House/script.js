// ─── 1. Scroll Progress Bar ───
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";
});

// ─── 2. Navbar Scroll Effect ───
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ─── 3. Mobile Menu Toggle ───
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open");
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.add("open");
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
});

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  iconOpen.classList.remove("hidden");
  iconClose.classList.add("hidden");
  document.body.style.overflow = "";
}

// ─── 4. Intersection Observer (Reveal Animations) ───
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Trigger counters if applicable
        entry.target.querySelectorAll("[data-counter]").forEach((el) => {
          if (!el.dataset.counted) {
            el.dataset.counted = "true";
            animateCounter(el);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ─── 5. Counter Animation ───
function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

// ─── 6. Portfolio Tab Filter ───
const filterBtns = document.querySelectorAll("[data-filter]");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".portfolio-card").forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
        card.style.animation = "none";
        setTimeout(() => (card.style.animation = ""), 10);
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ─── 7. Testimonial Slider ───
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
let autoplayTimer = setInterval(nextSlide, 5000);

function goToSlide(n) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}
function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Reset autoplay on manual navigation
document.querySelectorAll(".dot, #dots ~ button").forEach((el) => {
  el.addEventListener("click", () => {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 5000);
  });
});

// ─── 8. Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ─── 9. Active nav link highlight ───
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = "";
          link.style.borderBottom = "";
        });
        const active = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );
        if (active) {
          active.style.color = "#fff";
          active.style.borderBottom = "2px solid #D32F2F";
          active.style.paddingBottom = "2px";
        }
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => navObserver.observe(s));
