const cards = document.querySelectorAll(".flip-card");
const input = document.getElementById("input");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("score");
let imagenes = [];
let nombres = [];
let score = [];
//input.disabled = true;
enviar.addEventListener("click", botonEnviar);

const grid = document.getElementById("grid");
grid.addEventListener("click", cartas);

function cartas(e) {
  let carta = e.target;

  if (!carta.matches("img")) {
    return;
  }

  if (carta.classList.contains("imagen")) {
    imagenes.push(carta.alt);
    console.log(imagenes);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  if (this.classList.contains("flip")) {
    this.classList.remove("flip");
  } else {
    input.disabled = false;
    this.classList.add("flip");
  }
}

function botonEnviar() {
  nombres.push(input.value);
  console.log(nombres);
  if (nombres[0] == imagenes[0]) {
    score.push(input.value);
    console.log(score);
    resultado.textContent = score.length;
    alert("Muy bien!");
  } else {
    alert("No!");
  }
  nombres = [];
  imagenes = [];
}

/*
cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  if (this.classList.contains("flip")) {
    this.classList.remove("flip");
  } else {
    input.disabled = false;
    this.classList.add("flip");
  }
}

function comparar() {} */
