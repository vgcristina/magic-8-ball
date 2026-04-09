const responses = [
  "Sí, definitivamente",
  "Es cierto",
  "Las señales son favorables",
  "Sin duda",
  "Mira el futuro con esperanza",
  "Así será",
  "Todo indica que sí",
  "La fortuna te sonríe",

  "No creo",
  "Poco probable",
  "Los astros dicen que no",
  "Mala suerte",
  "Definitivamente no",
  "Olvídalo",
  "Las probabilidades no te favorecen",

  "Pregunta más tarde",
  "No se puede saber ahora",
  "Muy confuso",
  "Necesitas más tiempo",
  "Las fuerzas son inciertas",
  "Concentra tu energía",
  "Tal vez",
  "No estoy segura",
  "Los misterios del universo son profundos",
];

const form = document.querySelector(".form-ball");
const inputQuestion = document.getElementById("question");
const btnQuestion = document.getElementById("btnQuestion");
const resultOutput = document.getElementById("result");
const magicBall = document.getElementById("magicBall");
const botonesTema = document.querySelectorAll(".btn-tema");
let isAnimating = false;
let temaSeleccionado = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isAnimating || !inputQuestion.value.trim()) {
    return;
  }

  isAnimating = true;
  resultOutput.textContent = "...";

  if (resultOutput != "8") {
    resultOutput.classList.remove("hide");
    resultOutput.classList.add("show");
  }

  magicBall.classList.add("shake");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const answer = responses[randomIndex];

    resultOutput.textContent = answer;
    magicBall.classList.remove("shake");
    magicBall.classList.add("glow");

    setTimeout(() => {
      magicBall.classList.remove("glow");
      isAnimating = false;
    }, 600);
  }, 800);

  inputQuestion.value = "";

  // Quitar selección
  botonesTema.forEach((b) => b.classList.remove("active"));
  temaSeleccionado = null;
});

inputQuestion.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    form.dispatchEvent(new Event("submit"));
  }
});

botonesTema.forEach((boton) => {
  boton.addEventListener("click", () => {
    // quitar active de todos
    botonesTema.forEach((b) => b.classList.remove("active"));

    // añadir al clicado
    boton.classList.add("active");

    // guardar tema
    temaSeleccionado = boton.id;
  });
});
