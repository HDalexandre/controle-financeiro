async function carregarDados(){

const response =
await fetch(URL_PLANILHA);

const dados =
await response.json();

processarDados(dados);

}

carregarDados();

