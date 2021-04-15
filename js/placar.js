$(".btn-placar").click(mostraPlacar);

// Inserir placar no Body
function inserePlacar() {
  let corpoTabela = $(".placar").find("tbody");
  let nome = window.prompt("informe seu nome");
  let usuario = nome;
  let numPalavras = $("#contador-palavras").text();

  let linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha);

  $(".placar").slideDown(500);
  scrollPlacar();
}

// Deletar uma linha
function removeLinha() {
  event.preventDefault();
  $(this).parent().parent().remove();
}

// função para "scrollar" placar usando o animate
function scrollPlacar() {
  let posicaoPlacar = $(".placar").offset().top;

  $("body").animate(
    {
      scrollTop: posicaoPlacar + "px",
    },
    1000
  );
}

// mostrar/esconder placar de forma suave obs: O stop é responsável pela incômoda animação ao usuário ao dar diversos cliques no botao de mostrar placar.
function mostraPlacar() {
  $(".placar").stop().slideToggle(600);
}

// Criar uma linha
function novaLinha(usuario, palavras) {
  // criando elemento html com Jquery
  let linha = $("<tr>");
  let colunaUsuario = $("<td>").text(usuario);
  let colunaPalavras = $("<td>").text(palavras);
  let colunaRemover = $("<td>");

  let link = $("<a>").addClass("botao-remover").attr("href", "#");
  let icone = $("<i>").addClass("material-icons").text("delete");
  // colocar o ícone como filho de anchor
  link.append(icone);
  // colocar o anchor como filho da variavel colunaRemover
  colunaRemover.append(link);
  // colocar os 3 Td´s como filhos de TR
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}
