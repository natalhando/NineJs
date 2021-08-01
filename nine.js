const narrativa = document.querySelector(".container");

const TAMANHO_TITULO = "36px";
const TAMANHO_AUTOR = "24px";
const TAMANHO_SECAO = "26px";
const COR_AUTOR = "#3D3D3D";

let opcoes = {
  cor: "#000000",
  corDoFundo: "#FFFFFF",
  tamanhoFonte: "20px",
  autor: undefined,
  titulo: undefined,
}

const titulo = (valor) => {
  if (valor === undefined) return opcoes.titulo;

  var elemento = document.createElement("h1");
  elemento.style.fontSize = TAMANHO_TITULO;
  opcoes.titulo = valor;
  var elementoTexto = document.createTextNode(opcoes.titulo);
  elemento.appendChild(elementoTexto);    
  narrativa.appendChild(elemento);
}

const autor = (valor) => {
  if (valor === undefined) return opcoes.autor;

  var elemento = document.createElement("h2");
  elemento.style.fontSize = TAMANHO_AUTOR;
  elemento.style.color = COR_AUTOR;
  opcoes.autor = valor;
  var elementoTexto = document.createTextNode(opcoes.autor);
  elemento.appendChild(elementoTexto);    
  narrativa.appendChild(elemento);
}

const cor = (valor) => {
  if (valor === undefined) return opcoes.cor;

  opcoes.cor = valor;
}

const corDoFundo = (valor) => {
  if (valor == undefined) return opcoes.corDoFundo;

  opcoes.corDoFundo = valor;
  narrativa.style.backgroundColor = opcoes.corDoFundo;
}

const tamanhoFonte = (valor) => {
  if (valor === undefined) return opcoes.tamanhoFonte;

  opcoes.tamanhoFonte = valor;
}

const adicionarTexto = (valor) => {
  var elemento = document.createElement("p");
  elemento.style.fontSize = opcoes.tamanhoFonte;
  elemento.style.color = opcoes.cor;
  var elementoTexto = document.createTextNode(valor);
  elemento.appendChild(elementoTexto);    
  narrativa.appendChild(elemento);
}

const adicionarSecao = (valor) => {
  var elemento = document.createElement("h3");
  elemento.style.fontSize = TAMANHO_SECAO;
  var elementoTexto = document.createTextNode(valor);
  elemento.appendChild(elementoTexto);    
  narrativa.appendChild(elemento);
}

const adicionarImagem = (valor, largura, altura) => {
  var elemento = document.createElement("IMG");

  elemento.src = valor;

  if (altura == undefined) {
    largura == undefined ? elemento.style.maxWidth = "100%" : elemento.style.width = largura;
  } else {
    elemento.style.width = largura;
    elemento.style.height = altura;
  }

  narrativa.appendChild(elemento);
}



configuracoes();
historia();