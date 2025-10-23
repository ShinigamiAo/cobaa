// Animasi sederhana huruf I LOVE YOU menggunakan mo.js
const letters = document.querySelectorAll(".lttr");

// Animasi masuk huruf satu per satu
letters.forEach((lttr, i) => {
  const delay = i * 200;
  new mojs.Html({
    el: lttr,
    x: { [-100]: 0 },
    opacity: { 0: 1 },
    duration: 1000,
    delay: delay,
    easing: "elastic.out",
  }).play();
});

// Efek garis tengah (line animation)
new mojs.Shape({
  parent: ".svg-container",
  shape: "line",
  stroke: "white",
  strokeWidth: 4,
  x1: -200,
  x2: 200,
  y: 0,
  strokeDasharray: "100%",
  strokeDashoffset: { "100%": "0%" },
  duration: 1200,
  delay: 500,
}).play();
