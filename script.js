/* ================= EDIT YOUR PORTFOLIO LINKS HERE ================= */

const portfolioItems = {
  articles: [
    {
      title: "Web3 Research Article",
      description: "A research-based article explaining Web3 concepts, project structure, and ecosystem direction in a clear educational style.",
      link: "https://x.com/i/status/2054892094037135788"
    },
    {
      title: "Crypto Project Breakdown",
      description: "An educational post breaking down a crypto project for readers, investors, and Web3 beginners.",
      link: "https://x.com/i/status/2053577349799596486"
    },
    {
      title: "Technical Web3 Explainer",
      description: "A simplified technical explanation designed to make complex blockchain ideas easier to understand.",
      link: "https://x.com/i/status/2053500751226212748"
    },
    {
      title: "Research-Based Tweet",
      description: "A structured post using research, context, and simple language to explain a Web3 ecosystem.",
      link: "https://x.com/i/status/2052110797388587073"
    },
    {
      title: "Educational Content Piece",
      description: "An educational article-style post focused on simplifying crypto and blockchain concepts.",
      link: "https://x.com/i/status/2050628435509412314"
    },
    {
      title: "Blockchain Analysis",
      description: "A project-focused analysis written for crypto audiences, communities, and curious readers.",
      link: "https://x.com/i/status/2013881184447557989"
    },
    {
      title: "Web3 Campaign Content",
      description: "Campaign-style content written to explain, educate, and create awareness around Web3 products.",
      link: "https://x.com/i/status/1996894064969466312"
    },
    {
      title: "Crypto Education Post",
      description: "A clean educational post built around clarity, research, and beginner-friendly explanation.",
      link: "https://x.com/i/status/2007077629737013435"
    },
    {
      title: "Project Ecosystem Breakdown",
      description: "A readable breakdown of project ideas, ecosystem direction, and technical positioning.",
      link: "https://x.com/i/status/2042140597004210431"
    }
  ],

  storytelling: [
    {
      title: "Storytelling on 𝕏",
      description: "A narrative-style Web3 post using story, emotion, and character-driven writing to make content memorable.",
      link: "https://x.com/i/status/2060395096600707539"
    },
    {
      title: "Creative Crypto Story",
      description: "A storytelling piece blending crypto culture, personality, and narrative structure for stronger engagement.",
      link: "https://x.com/i/status/2059714685411508439"
    }
  ]
};


/* ================= PORTFOLIO CARD RENDERING ================= */

const portfolioGrid = document.getElementById("portfolioGrid");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderPortfolio(category) {
  portfolioGrid.innerHTML = "";

  portfolioItems[category].forEach((item) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";

    card.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>

      <a href="${item.link}" target="_blank" rel="noopener noreferrer">
        View Work →
      </a>
    `;

    portfolioGrid.appendChild(card);
  });

  revealOnScroll();
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedTab = button.dataset.tab;
    renderPortfolio(selectedTab);
  });
});

renderPortfolio("articles");


/* ================= MOBILE MENU ================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


/* ================= LIGHT / DARK MODE SWITCHER ================= */

const html = document.documentElement;
const lightModeBtn = document.getElementById("lightModeBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  if (theme === "light") {
    lightModeBtn.classList.add("active");
    darkModeBtn.classList.remove("active");
  } else {
    darkModeBtn.classList.add("active");
    lightModeBtn.classList.remove("active");
  }
}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme("dark");
}

lightModeBtn.addEventListener("click", () => setTheme("light"));
darkModeBtn.addEventListener("click", () => setTheme("dark"));


/* ================= SCROLL REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
  ".section-heading, .skill-card, .experience-card, .key-areas, .featured-project, .tool-box, .education-card, .testimonial-card, .contact-links a"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 90;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent = new Date().getFullYear();
