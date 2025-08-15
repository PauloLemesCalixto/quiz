const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = [
    {
        enunciado: "Qual animal você mais gosta?",
        alternativas: ["Gato",
            "Cahorro"
        ]
    },
    {
        enunciado: "Você toma banho?",
        alternativas: ["Sim",
            "Não"
        ]

    },
      {
        enunciado: "Você gosta de cozinhar",
        alternativas: ["Sim",
            "Não"
        ]

    },
      {
        enunciado: "Você sai de casa com que frequêcia?",
        alternativas: ["2 vezes ao dia",
            "4 vezes ao dia"
        ]

    },


];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();