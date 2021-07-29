const narrativa = document.querySelector(".container");

const TAMANHO_TITULO = "36px";
const TAMANHO_AUTOR = "24px";
const TAMANHO_SECAO = "26px";
const COR_AUTOR = "#3D3D3D";
const COR_DO_FUNDO_OPCAO = "#CCCCCC";
const COR_OPCAO = "#000000";

let preferencias = {
  cor: "#000000",
  corDoFundo: "#FFFFFF",
  tamanhoFonte: "20px",
  autor: undefined,
  titulo: undefined,
}

const titulo = (valor) => {
  if (valor === undefined) return preferencias.titulo;

  var elemento = document.createElement("h1");
  elemento.style.fontSize = TAMANHO_TITULO;
  preferencias.titulo = valor;
  var elementoTexto = document.createTextNode(preferencias.titulo);
  elemento.appendChild(elementoTexto);    
  narrativa.appendChild(elemento);
}

const autor = (valor) => {
  if (valor === undefined) return preferencias.autor;

  var elemento = document.createElement("h2");
  elemento.style.fontSize = TAMANHO_AUTOR;
  elemento.style.color = COR_AUTOR;
  preferencias.autor = valor;
  var elementoTexto = document.createTextNode(preferencias.autor);
  elemento.appendChild(elementoTexto);    
  narrativa.appendChild(elemento);
}

const cor = (valor) => {
  if (valor === undefined) return preferencias.cor;

  preferencias.cor = valor;
}

const corDoFundo = (valor) => {
  if (valor == undefined) return preferencias.corDoFundo;

  preferencias.corDoFundo = valor;
  narrativa.style.backgroundColor = preferencias.corDoFundo;
}

const tamanhoFonte = (valor) => {
  if (valor === undefined) return preferencias.tamanhoFonte;

  preferencias.tamanhoFonte = valor;
}

const adicionarTexto = (valor) => {
  var elemento = document.createElement("p");
  elemento.style.fontSize = preferencias.tamanhoFonte;
  elemento.style.color = preferencias.cor;
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

const criarOpcao = (valor, funcao, {
  cor = COR_OPCAO,
  corDoFundo = COR_DO_FUNDO_OPCAO,
  inativa = false,
} = {}) => {
  return {
    rotulo: valor,
    comportamento: funcao,
    opcoes: {
      cor: cor,
      corDoFundo: corDoFundo,
      inativa: inativa,
    }
  }
}

const adicionarOpcoes = (lista) => {
  lista.map((valor) => {
    var elemento = document.createElement("button");
    elemento.innerHTML = valor.rotulo
    elemento.onclick = valor.comportamento;
    elemento.setAttribute("style", `
      background-color: ${valor.opcoes.corDoFundo};
      color: ${valor.opcoes.cor};
    `);
    elemento.disabled = valor.opcoes.inativa;
    narrativa.appendChild(elemento);
  })
}

configuracoes();
historia();