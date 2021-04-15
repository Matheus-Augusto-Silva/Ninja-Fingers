let frases = [
  "Talvez a saudade seja uma das mais belas formas de afinidade, sem ela não teríamos a alegria do abraço de alguém que mesmo distante nos faz bem. - Agatha Sthefanini",
  "Seja você quem for, seja qual for a posição social que você tenha na vida, a mais alta ou a mais baixa, tenha sempre como meta muita força, muita determinação e sempre faça tudo com muito amor e com muita fé em Deus, que um dia você chega lá. De alguma maneira você chega lá. - Ayrton Senna",
  "Todos aqueles, cuja alma é sufocada pela soberba e a arrogância, sempre estão fazendo se identificar também pela ingratidão, um dos mais baixos sentimentos que assolam a humanidade.- Ivan Teorilang",
  "O avarento, por mais dinheiro que tenha guardado, aparenta viver sempre na pobreza. Ele nunca vai demonstrar o que possui, para deixar claro o fato de nada ter para doar - Ivan Teorilang",
  "Se compadecer com o sofrimento alheio, sofrer junto com ele, e ajuda-lo a aliviar sua dor, e de forma parecida, se comover com o sofrimento, causado pelo homem aos animais, é a mais bela definição de humanidade que se poderia ser vivida. - Ivan Teorilang",
  "Devem buscar-se amigos como os bons livros. Não está a felicidade em que sejam muitos nem muito curiosos; e sim poucos, bons e bem conhecidos. Mateo Alemán",
  "Ciúme é um dos mais infelizes sentimentos inerentes ao ser humano. Ele magoa, fere, destrói e mata, e se pode ter estas características, como associar a isto o amor?- Ivan Teorilang",
];

function novafrase() {
  // Irá mudar a frase de maneira aleatória
  let frase = $("#frase");
  let aleatorio = Math.floor(Math.random() * frases.length);
  frase.text(frases[aleatorio]);
  palavrasTexto();
  comparaFrase();
}
