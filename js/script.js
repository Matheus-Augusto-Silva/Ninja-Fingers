// Variáveis usadads por mais de uma função
let campo = $(".campo-digitacao");
let tempoInicial = $("#tempo-digitacao").text();

//função para chamar todas as outras funções de uma vez
$(document).ready(function () {
  $(".btn-reset").click(reiniciaJogo);
  $("#botao-frase").click(novafrase);
  inicializaContadores();
  inicializaCronometro();
  comparaFrase();
});
// função para dividir palavras do Texto
function palavrasTexto() {
  let frase = $("#frase").text();
  let fraseDividida = frase.split(" ");
  let conteudoFrase = $("#numero-de-palavras");
  conteudoFrase.text(fraseDividida.length);
}

// Função para inserir contador de palavras enquanto digita
function inicializaContadores() {
  campo.on("input", function () {
    let conteudo = campo.val();

    let qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    let qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

// função para iniciar o cronômetro de forma decrescente
function inicializaCronometro() {
  let tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
    let cronometroID = setInterval(function () {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante <= 0) {
        clearInterval(cronometroID);
        finalizaJogo();
      }
    }, 1000);
  });
}
// função para comparar a frase original com a digitada
function comparaFrase() {
  let frase = $("#frase").text();
  campo.on("input", function () {
    let digitado = campo.val();
    let comparavel = frase.substr(0, digitado.length);
    if (digitado == comparavel) {
      campo.removeClass("borda-vermelha");
      campo.addClass("borda-verde");
    } else {
      campo.removeClass("borda-verde");
      campo.addClass("borda-vermelha");
    }
  });
}

// função responsável pelo comportamento do campo text após finalizar o jogo
function finalizaJogo() {
  campo.attr("disabled", true);
  campo.addClass("campo-desativado");
  inserePlacar();
}

// Função responsável por reiniciar o jogo
function reiniciaJogo() {
  let tempoRestante = $("#tempo-digitacao").text();
  if (tempoRestante < 1) {
    campo.attr("disabled", false);
    campo.val("");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
    campo.removeClass("campo-desativado");
    campo.addClass("campo-digitacao");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);

    inicializaCronometro();
  }
}
