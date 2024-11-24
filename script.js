// script.js
const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

const steps = [
  { 
    text: "Você encontra um mapa antigo no chão. Seguir o mapa ou explorar ao redor?",
    choices: [
      { text: "Seguir o mapa", nextStep: 1 },
      { text: "Explorar ao redor", nextStep: 2 }
    ]
  },
  {
    text: "O mapa leva a uma caverna. Entrar ou voltar atrás?",
    choices: [
      { text: "Entrar na caverna", nextStep: 3 },
      { text: "Voltar atrás", nextStep: 4 }
    ]
  },
  {
    text: "Você encontra uma vila. Conversar com os aldeões ou continuar explorando?",
    choices: [
      { text: "Conversar", nextStep: 5 },
      { text: "Explorar mais", nextStep: 6 }
    ]
  },
  {
    text: "Dentro da caverna, você encontra um baú mágico. Abrir ou ignorar?",
    choices: [
      { text: "Abrir o baú", nextStep: 7 },
      { text: "Ignorar o baú", nextStep: 8 }
    ]
  },
  {
    text: "Você decide voltar, mas é atacado por lobos! Lutar ou fugir?",
    choices: [
      { text: "Lutar", nextStep: 9 },
      { text: "Fugir", nextStep: 10 }
    ]
  },
  {
    text: "Os aldeões lhe dão comida e um amuleto de proteção. Você venceu a aventura!",
    choices: []
  },
  {
    text: "Explorando mais, você cai em uma armadilha! Fim da aventura.",
    choices: []
  },
  {
    text: "O baú contém um tesouro! Você se torna rico. Parabéns!",
    choices: []
  },
  {
    text: "Ignorando o baú, você se perde na caverna e nunca mais é visto.",
    choices: []
  },
  {
    text: "Você luta bravamente, mas é derrotado pelos lobos. Fim da aventura.",
    choices: []
  },
  {
    text: "Você foge para a segurança da vila. Lá, é ajudado pelos aldeões. Fim feliz!",
    choices: []
  }
];

function startAdventure() {
  showStep(0);
}

function showStep(stepIndex) {
  const step = steps[stepIndex];
  storyText.textContent = step.text;
  choicesDiv.innerHTML = "";

  step.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showStep(choice.nextStep);
    choicesDiv.appendChild(button);
  });
}

startAdventure();