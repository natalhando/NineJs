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
  var escolhas = document.createElement("div");
  lista.map((valor) => {
    var elemento = document.createElement("button");
    elemento.innerHTML = valor.rotulo;
    elemento.classList.add("escolha");
    elemento.onclick = () => {
      valor.comportamento();
      elemento.style.opacity = 1;
      elemento.style.borderLeft = "2px solid black";
      elemento.style.paddingLeft = "10px";
      escolhas.style.pointerEvents = "none";
    };
    elemento.setAttribute("style", `
      background-color: ${valor.opcoes.corDoFundo};
      color: ${valor.opcoes.cor};
      font-size: ${preferencias.tamanhoFonte};
      ${valor.opcoes.inativa && 'cursor: unset;'}
    `);
    elemento.disabled = valor.opcoes.inativa;
    escolhas.appendChild(elemento);
  })
  narrativa.appendChild(escolhas);
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

const ler = (rotulo, sequencia) => {
  var elemento = document.createElement("h4");

  var elementoTexto = document.createTextNode(rotulo);
  elemento.style.fontSize = preferencias.tamanhoFonte;
  elemento.style.color = preferencias.cor;
  elemento.appendChild(elementoTexto);

  var campo = document.createElement("input");
  campo.style.fontSize = preferencias.tamanhoFonte;
  var botao = document.createElement("button");
  botao.innerHTML = "Prosseguir";
  botao.style.fontSize = preferencias.tamanhoFonte;
  botao.onclick = () => {
    campo.disabled = true;
    botao.remove();
    sequencia(campo.value);
  }

  var grupo = document.createElement("div");

  grupo.appendChild(campo);
  grupo.appendChild(botao);

  narrativa.appendChild(elemento);
  narrativa.appendChild(grupo);
}

configuracoes();
historia();