const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao pesquisar sobre profissões para o futuro, você descobre que muitas vagas agora exigem conhecimento em Inteligência Artificial. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Fico preocupado, pois prefiro carreiras mais tradicionais e humanas.",
                afirmacao:[
                    "Você iniciou sua jornada com receio das mudanças tecnológicas no mercado de trabalho.",
                    "Você não iniciou sua jornada com receio das mudanças tecnológicas no mercado de trabalho",
                ],
            },
            {
                texto: "Fico empolgado, adoro tecnologia e quero aprender mais sobre isso.",
                afirmacao: [
                    "Desde o início, você abraçou a inovação como uma oportunidade de crescimento.",
                    "Desde o início, você não abraçou a inovação como uma oportunidade de crescimento.",
                ]
            }           
        ]
    },
    {
        enunciado: "Seu professor pede um relatório avaliando o impacto da automação na sua área de interesse. Como você decide conduzir essa pesquisa?",
        alternativas: [
            {
                texto: "Uso uma IA para resumir artigos complexos e organizar os tópicos principais mais rápido.",
                afirmacao: "Na hora de estudar, você aprendeu a usar ferramentas digitais para acelerar sua produtividade."
            },
            {
                texto: "Consulto livros na biblioteca e entrevisto profissionais da área para ter visões reais.",
                afirmacao: "Você preferiu valorizar as conexões humanas e fontes clássicas para embasar seu conhecimento."
            }
        ]
    },
    {
        enunciado: "Durante um debate na sala, surge a questão: 'A IA vai substituir a criatividade humana nas artes e no design?'. Qual o seu posicionamento?",
        alternativas: [
            {
                texto: "Sim, os algoritmos já conseguem imitar qualquer estilo e vão dominar o mercado criativo.",
                afirmacao: "No debate sobre criatividade, você adotou uma postura realista sobre o avanço técnico das máquinas."
            },
            {
                texto: "Não, a máquina apenas combina dados, mas a emoção e a vivência humana são insubstituíveis.",
                afirmacao: "Você defendeu que a essência da arte depende exclusivamente da sensibilidade humana."
            }
        ]
    },
    {
        enunciado: "Você recebeu a tarefa de criar a identidade visual de um projeto escolar. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Faço um rascunho próprio no papel ou software de desenho para garantir algo 100% autoral.",
                afirmacao: "No momento prático, você escolheu expressar sua identidade através do seu próprio talento técnico."
            },
            {
                texto: "Utilizo um gerador de imagens por prompt para criar um conceito visual moderno e rápido.",
                afirmacao: "Você optou por atuar como um diretor de arte, guiando a tecnologia para materializar suas ideias."
            }
        ]
    },
    {
        enunciado: "No trabalho final do semestre, um colega de grupo copiou e colou um texto gerado por IA sem fazer nenhuma alteração ou checagem de fatos. O que você faz?",
        alternativas: [
            {
                texto: "Peço para revisarmos juntos, pois a IA pode inventar dados falsos e o trabalho precisa da nossa identidade.",
                afirmacao: "No fim das contas, você mostrou senso crítico e entendeu que o toque humano é o filtro antierros da tecnologia."
            },
            {
                texto: "Deixo como está, afinal o texto faz sentido e economizou o tempo de todo mundo.",
                afirmacao: "No fim das contas, você escolheu priorizar a eficiência prática e a entrega rápida dos resultados automatizados."
            }
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();