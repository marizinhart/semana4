const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Apos você sair da escola, tu se depara com uma tecnologia nova, isto é:",
        alternativas: [
            {
                 texto: "Surpriendente!",
                 afirmacao: "A tecnologia veio para facilitar nossa vida,"
            },
          {
             texto: "horrível!",
             afirmacao: "A tecnlogia é um problema nos dias de hoje,"
          }
        ]
    },
    {
        enunciado: "O que é uma ingteligencia artificial?",
        alternativas: [
            {
                texto:  "É a capacidade que uma máquina tem para produzir competências semelhantes ás humanas como raciocínio!",
                afirmacao: "nos auxiliando em tudo que precisamos,"
            },
            {
                texto:  "É uma capacidade que não trás benefício nenhum",
                afirmacao: "ela nos tira a concentração,"
            }
        ]
    },
    {
        enunciado: "Onde é usada essa tecnologia?",
        alternativas: [
            {
                texto: "Em sistemas de reconhecimento de imagem, como placas e etc!",
                afirmacao:"alem de ser uma forma mais pratica e facil de se conectar."
            },
            {
                texto: "Não é usada em nada!",
                afirmacao: "nos causam problemas na saude, entre outros."
            }
        ]
    },
    {
        enunciado: "O que ela pode fazer?",
        alternativas: [
            {
                texto: "Expressar emoções, empatia e ter sentimentos!",
                afirmacao:"errada."
            },
            {
                texto: "Avaliar dados, analisar imagens, ajudar em trabalhos!",
                afirmacao: "Resumindo a tecnologia veio para facilitar nossa vida."
            }
        ]
    },
    {
        enunciado:"Como ela pode mudar a maneira como trabalhamos?",
        alternativas: [
            {
                texto: "Ela não interfere em nada!",
                afirmacao:"Resumindo a tecnologia veio para atrasar nossa vida."
            },
            {
                texto: "Nos ajudando a fazer um trabalho, orgânizando nossos horarios!",
                afirmacao:"certa"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
