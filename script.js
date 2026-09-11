const canvas = document.getElementById("systemCanvas");
const ctx = canvas.getContext("2d");

let width;
let height;

let nodes = [];

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};


const reducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;



/* =========================
   CANVAS
========================= */

function resizeCanvas() {

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  ctx.setTransform(
    devicePixelRatio,
    0,
    0,
    devicePixelRatio,
    0,
    0
  );


  nodes = [];

  for (let i = 0; i < 45; i++) {

    nodes.push({

      x: Math.random() * width,

      y: Math.random() * height,

      vx: (Math.random() - .5) * .25,

      vy: (Math.random() - .5) * .25,

      radius: Math.random() * 1.5 + .5

    });

  }

}


resizeCanvas();

window.addEventListener(
  "resize",
  resizeCanvas
);



/* =========================
   MOUSE
========================= */

window.addEventListener(
  "pointermove",
  event => {

    mouse.x = event.clientX;

    mouse.y = event.clientY;

  }
);



/* =========================
   DRAW
========================= */

function drawSystem() {

  ctx.clearRect(
    0,
    0,
    width,
    height
  );


  const time =
    performance.now() * 0.00015;



  /*
    ORBITAL SYSTEM
  */

  ctx.lineWidth = 1;

  ctx.strokeStyle =
    "rgba(255,255,255,.07)";


  for (let i = 0; i < 5; i++) {

    const centerX =
      width * .55 +
      Math.sin(time + i) * 100;

    const centerY =
      height * .52 +
      Math.cos(time + i) * 70;


    ctx.beginPath();

    ctx.ellipse(

      centerX,

      centerY,

      width * .28 + i * 40,

      height * .20 + i * 25,

      -.12,

      0,

      Math.PI * 2

    );

    ctx.stroke();

  }



  /*
    NODES
  */

  nodes.forEach(node => {

    if (!reducedMotion) {

      node.x += node.vx;

      node.y += node.vy;

    }


    if (node.x < -20 || node.x > width + 20) {

      node.vx *= -1;

    }


    if (node.y < -20 || node.y > height + 20) {

      node.vy *= -1;

    }

  });



  /*
    CONNECTIONS
  */

  for (let i = 0; i < nodes.length; i++) {

    const a = nodes[i];


    for (
      let j = i + 1;
      j < nodes.length;
      j++
    ) {

      const b = nodes[j];


      const dx =
        a.x - b.x;

      const dy =
        a.y - b.y;

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );


      if (distance < 155) {

        const opacity =
          (1 - distance / 155) * .12;


        ctx.strokeStyle =
          `rgba(255,255,255,${opacity})`;

        ctx.beginPath();

        ctx.moveTo(
          a.x,
          a.y
        );

        ctx.lineTo(
          b.x,
          b.y
        );

        ctx.stroke();

      }

    }

  }



  /*
    NODE DOTS
  */

  nodes.forEach(node => {

    ctx.fillStyle =
      "rgba(255,255,255,.25)";

    ctx.beginPath();

    ctx.arc(
      node.x,
      node.y,
      node.radius,
      0,
      Math.PI * 2
    );

    ctx.fill();

  });



  /*
    CURSOR NODE
  */

  ctx.fillStyle =
    "#ff7543";

  ctx.beginPath();

  ctx.arc(
    mouse.x,
    mouse.y,
    3,
    0,
    Math.PI * 2
  );

  ctx.fill();


  ctx.strokeStyle =
    "rgba(255,117,67,.25)";

  ctx.beginPath();

  ctx.arc(
    mouse.x,
    mouse.y,
    18 + Math.sin(time * 20) * 3,
    0,
    Math.PI * 2
  );

  ctx.stroke();


  requestAnimationFrame(
    drawSystem
  );

}


drawSystem();



/* =========================
   MENU
========================= */

const menuButton =
  document.getElementById(
    "menuButton"
  );


const menu =
  document.getElementById(
    "menu"
  );


menuButton.addEventListener(
  "click",
  () => {

    menu.classList.toggle(
      "open"
    );

  }
);



/* CLOSE MENU AFTER CLICK */

menu
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        menu.classList.remove(
          "open"
        );

      }
    );

  });



/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      menu.classList.remove(
        "open"
      );

    }

  }
);
