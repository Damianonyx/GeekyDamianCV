:root {

  --background: #050505;
  --foreground: #f2f2ed;
  --muted: #858585;
  --dim: #555;
  --line: rgba(255,255,255,0.17);

  --accent: #ff7543;

  --mono: "DM Mono", monospace;
  --sans: Inter, Arial, sans-serif;

}


* {
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


body {

  margin: 0;

  background: var(--background);

  color: var(--foreground);

  font-family: var(--sans);

  overflow-x: hidden;

}


a {
  color: inherit;
  text-decoration: none;
}


button {
  font: inherit;
}


/* =========================
   BACKGROUND
========================= */

#systemCanvas {

  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 0;

  pointer-events: none;

  opacity: .72;

}


.noise {

  position: fixed;

  inset: 0;

  z-index: 10;

  pointer-events: none;

  opacity: .045;

  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");

}


/* =========================
   HEADER
========================= */

.header {

  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  height: 74px;

  padding: 0 4vw;

  display: flex;

  align-items: center;

  justify-content: space-between;

  z-index: 30;

  border-bottom: 1px solid var(--line);

  background:
    linear-gradient(
      to bottom,
      rgba(5,5,5,.86),
      rgba(5,5,5,.2)
    );

}


.logo {

  font-family: var(--mono);

  font-size: 13px;

  letter-spacing: .14em;

}


.header-center {

  position: absolute;

  left: 50%;

  transform: translateX(-50%);

  font-family: var(--mono);

  font-size: 9px;

  color: var(--muted);

  letter-spacing: .16em;

}


.menu-button {

  width: 42px;

  height: 42px;

  display: grid;

  place-content: center;

  gap: 5px;

  border: 0;

  background: transparent;

  cursor: pointer;

}


.menu-button span {

  width: 26px;

  height: 1px;

  background: var(--foreground);

  display: block;

  transition: .25s;

}


/* =========================
   MENU
========================= */

.menu {

  position: fixed;

  top: 74px;

  right: 4vw;

  width: 320px;

  z-index: 25;

  padding: 10px 20px;

  border: 1px solid var(--line);

  background: rgba(5,5,5,.94);

  backdrop-filter: blur(20px);

  transform: translateY(-15px);

  opacity: 0;

  pointer-events: none;

  transition: .25s;

}


.menu.open {

  transform: translateY(0);

  opacity: 1;

  pointer-events: auto;

}


.menu a {

  display: grid;

  grid-template-columns: 45px 1fr;

  padding: 16px 0;

  border-bottom: 1px solid var(--line);

  font-family: var(--mono);

  font-size: 11px;

}


.menu a:last-child {

  border-bottom: 0;

}


.menu a span {

  color: var(--muted);

}


/* =========================
   MAIN
========================= */

main,
footer {

  position: relative;

  z-index: 2;

}


/* =========================
   HERO
========================= */

.hero {

  min-height: 100svh;

  padding: 120px 4vw 35px;

  position: relative;

  display: flex;

  align-items: center;

  overflow: hidden;

}


.hero-meta {

  position: absolute;

  top: 100px;

  left: 4vw;

  right: 4vw;

  display: flex;

  justify-content: space-between;

  font-family: var(--mono);

  font-size: 9px;

  letter-spacing: .14em;

  color: var(--muted);

}


.hero-content {

  width: 100%;

  max-width: 1300px;

}


.eyebrow {

  font-family: var(--mono);

  font-size: 10px;

  letter-spacing: .16em;

  color: var(--muted);

}


.hero h1 {

  margin: 12px 0 30px;

  font-size: clamp(55px, 12.5vw, 180px);

  line-height: .82;

  letter-spacing: -.075em;

  font-weight: 500;

}


.cursor {

  color: var(--accent);

  animation: blink 1.1s infinite;

}


@keyframes blink {

  50% {
    opacity: .2;
  }

}


.hero-description {

  max-width: 650px;

  font-size: clamp(18px, 2vw, 27px);

  line-height: 1.3;

  color: #d5d5d0;

}


.hero-links {

  display: flex;

  gap: 25px;

  margin-top: 45px;

}


.hero-links a {

  font-family: var(--mono);

  font-size: 10px;

  letter-spacing: .1em;

  padding-bottom: 9px;

  border-bottom: 1px solid var(--foreground);

}


.hero-links span {

  color: var(--accent);

  margin-left: 8px;

}


.hero-footer {

  position: absolute;

  bottom: 30px;

  left: 4vw;

  right: 4vw;

  display: flex;

  justify-content: space-between;

  font-family: var(--mono);

  font-size: 9px;

  color: var(--muted);

  letter-spacing: .14em;

}


/* =========================
   SECTIONS
========================= */

.section {

  min-height: 80vh;

  padding: 140px 4vw;

  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 50px;

  border-top: 1px solid var(--line);

}


.section-label {

  font-family: var(--mono);

  font-size: 10px;

  color: var(--muted);

  letter-spacing: .14em;

}


.section-body {

  width: 100%;

  max-width: 1150px;

}


.large-text {

  margin: 0;

  max-width: 1000px;

  font-size: clamp(34px, 5.8vw, 80px);

  line-height: .98;

  letter-spacing: -.055em;

}


.large-text em,
h2 em {

  font-family: Georgia, serif;

  font-weight: 400;

}


.about-grid {

  max-width: 850px;

  margin-top: 75px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 8vw;

}


.about-grid p {

  color: #858585;

  line-height: 1.7;

  font-size: 14px;

}


/* =========================
   SECTION HEADINGS
========================= */

.section-heading {

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 65px;

}


.section-heading h2 {

  margin: 0;

  font-size: clamp(42px, 7vw, 90px);

  line-height: .88;

  letter-spacing: -.065em;

  font-weight: 500;

}


.section-heading > span {

  font-family: var(--mono);

  font-size: 9px;

  color: var(--muted);

  letter-spacing: .14em;

}


/* =========================
   FOCUS
========================= */

.focus-grid {

  display: grid;

  grid-template-columns: 1fr 1fr;

  border-top: 1px solid var(--line);

}


.focus-item {

  min-height: 135px;

  padding: 25px 0;

  border-bottom: 1px solid var(--line);

  display: grid;

  grid-template-columns: 50px 1fr;

  transition: .25s;

}


.focus-item:hover {

  padding-left: 14px;

}


.focus-item small {

  font-family: var(--mono);

  font-size: 9px;

  color: var(--muted);

}


.focus-item strong {

  font-size: 19px;

  font-weight: 500;

}


.focus-item p {

  grid-column: 2;

  margin: 8px 0 0;

  color: #666;

  font-family: var(--mono);

  font-size: 9px;

  text-transform: uppercase;

}


/* =========================
   STATS
========================= */

.stats-grid {

  display: grid;

  grid-template-columns: repeat(5, 1fr);

  border-top: 1px solid var(--line);

  border-bottom: 1px solid var(--line);

}


.stat {

  padding: 35px 18px 35px 0;

  border-right: 1px solid var(--line);

}


.stat:not(:first-child) {

  padding-left: 18px;

}


.stat:last-child {

  border-right: 0;

}


.stat strong {

  display: block;

  font-size: clamp(42px, 5vw, 70px);

  letter-spacing: -.06em;

  font-weight: 500;

}


.stat span {

  display: block;

  margin-top: 10px;

  color: #777;

  font-family: var(--mono);

  font-size: 9px;

}


.proof-note {

  margin-top: 20px;

  color: #555;

  font-family: var(--mono);

  font-size: 9px;

  line-height: 1.6;

}


/* =========================
   WORK
========================= */

.work-category {

  margin-bottom: 70px;

}


.category-title {

  padding-bottom: 15px;

  border-bottom: 1px solid var(--line);

  font-family: var(--mono);

  font-size: 10px;

  letter-spacing: .15em;

  color: var(--accent);

}


.work-row {

  display: grid;

  grid-template-columns: 50px 1fr 30px;

  gap: 20px;

  padding: 28px 0;

  border-bottom: 1px solid var(--line);

  transition: .25s;

}


.work-row:hover {

  padding-left: 14px;

}


.work-row > span {

  font-family: var(--mono);

  font-size: 9px;

  color: var(--muted);

}


.work-row h3 {

  margin: 0 0 8px;

  font-size: clamp(21px, 3vw, 34px);

  font-weight: 500;

  letter-spacing: -.035em;

}


.work-row p {

  margin: 0;

  max-width: 650px;

  color: #777;

  font-size: 13px;

  line-height: 1.5;

}


.work-row .arrow {

  color: var(--accent);

  font-size: 17px;

}


/* =========================
   BUILDS
========================= */

.build-grid {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;

  margin-top: 70px;

}


.build-card {

  border: 1px solid var(--line);

  transition: .3s;

}


.build-card:hover {

  transform: translateY(-5px);

  border-color: rgba(255,255,255,.4);

}


.build-visual {

  height: 370px;

  position: relative;

  overflow: hidden;

  background: #080808;

}


.build-visual > span {

  position: absolute;

  top: 18px;

  left: 20px;

  z-index: 3;

  font-family: var(--mono);

  font-size: 9px;

  color: #777;

  letter-spacing: .12em;

}


/* KITCHEN SIMULATION */

.kitchen {

  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(255,117,67,.15),
      transparent 25%
    ),
    #070707;

}


.wire-grid {

  position: absolute;

  inset: -40%;

  background:
    linear-gradient(
      rgba(255,255,255,.12) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,.12) 1px,
      transparent 1px
    );

  background-size: 50px 50px;

  transform:
    perspective(600px)
    rotateX(62deg)
    rotateZ(-12deg);

  animation: gridMove 8s linear infinite;

}


@keyframes gridMove {

  to {

    transform:
      perspective(600px)
      rotateX(62deg)
      rotateZ(-12deg)
      translate(50px,50px);

  }

}


.build-orb {

  position: absolute;

  width: 140px;

  height: 140px;

  left: 50%;

  top: 50%;

  transform: translate(-50%,-50%);

  border-radius: 50%;

  border: 1px solid rgba(255,255,255,.55);

  box-shadow:
    0 0 80px rgba(255,117,67,.2);

}


/* FINANCE VISUAL */

.finance {

  background:
    radial-gradient(
      circle at 40% 40%,
      rgba(255,255,255,.08),
      transparent 30%
    ),
    #070707;

}


.finance-lines {

  position: absolute;

  inset: 0;

  background:
    repeating-radial-gradient(
      ellipse at 50% 50%,
      transparent 0,
      transparent 38px,
      rgba(255,255,255,.12) 39px,
      transparent 40px
    );

  transform: rotate(-12deg);

  animation: financeMove 12s linear infinite;

}


@keyframes financeMove {

  to {

    transform:
      rotate(-12deg)
      scale(1.1);

  }

}


.build-info {

  padding: 25px;

  display: grid;

  grid-template-columns: 45px 1fr 20px;

  gap: 20px;

}


.build-info small {

  color: var(--muted);

  font-family: var(--mono);

  font-size: 9px;

}


.build-info h3 {

  margin: 0 0 8px;

  font-size: 24px;

  font-weight: 500;

}


.build-info p {

  margin: 0;

  color: #777;

  font-size: 13px;

  line-height: 1.5;

}


.build-info strong {

  color: var(--accent);

}


/* =========================
   CURRENTLY
========================= */

.current {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 10vw;

}


.current-list {

  border-top: 1px solid var(--line);

}


.current-list p {

  margin: 0;

  padding: 18px 0;

  border-bottom: 1px solid var(--line);

  font-family: var(--mono);

  font-size: 10px;

  text-transform: uppercase;

  color: #999;

}


.current-list span {

  color: var(--accent);

  margin-right: 12px;

}


/* =========================
   CONTACT
========================= */

.contact {

  min-height: 85vh;

}


.contact h2 {

  margin: 25px 0 0;

  font-size: clamp(48px, 8vw, 105px);

  line-height: .85;

  letter-spacing: -.065em;

  font-weight: 500;

}


.contact-description {

  max-width: 500px;

  margin: 40px 0 55px;

  color: #777;

  line-height: 1.6;

}


.contact-links {

  display: flex;

  flex-wrap: wrap;

  gap: 10px;

}


.contact-links a {

  padding: 15px 17px;

  border: 1px solid var(--line);

  font-family: var(--mono);

  font-size: 9px;

  letter-spacing: .08em;

  transition: .25s;

}


.contact-links a:hover {

  border-color: var(--foreground);

  transform: translateY(-2px);

}


.contact-links span {

  margin: 0 10px;

  color: #666;

}


/* =========================
   FOOTER
========================= */

footer {

  padding: 25px 4vw;

  border-top: 1px solid var(--line);

  display: flex;

  justify-content: space-between;

  font-family: var(--mono);

  font-size: 9px;

  color: #555;

  letter-spacing: .12em;

}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

  .header-center {

    display: none;

  }


  .section {

    grid-template-columns: 1fr;

    gap: 30px;

    padding: 100px 5vw;

  }


  .hero {

    padding-left: 5vw;

    padding-right: 5vw;

  }


  .hero-meta,
  .hero-footer {

    left: 5vw;

    right: 5vw;

  }


  .hero h1 {

    font-size: 17vw;

  }


  .about-grid {

    grid-template-columns: 1fr;

    gap: 15px;

  }


  .focus-grid {

    grid-template-columns: 1fr;

  }


  .stats-grid {

    grid-template-columns: 1fr 1fr;

  }


  .stat:nth-child(2) {

    border-right: 0;

  }


  .stat:nth-child(n+3) {

    border-top: 1px solid var(--line);

  }


  .stat:nth-child(3) {

    padding-left: 0;

  }


  .build-grid {

    grid-template-columns: 1fr;

  }


  .current {

    grid-template-columns: 1fr;

    gap: 50px;

  }


  footer {

    flex-direction: column;

    gap: 15px;

  }

}


@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }

    }
