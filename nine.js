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

let adicionarImagem = (valor, wi, he) => {
  var elemento = document.createElement("IMG");
  
  if(wi == undefined && he == undefined){
    elemento.src = valor;
    elemento.style.height = "250px"; 
    elemento.style.width = "500px";
    narrativa.appendChild(elemento);     
      
  }else if(he == undefined){
    elemento.src = valor;
    elemento.addEventListener("load", function () {
      let newheight = (elemento.height/ elemento.width) * wi; //Formula para manter a proporcao. 
      elemento.style.height = newheight + "px";
      elemento.style.width = wi;
      narrativa.appendChild(elemento);
    });   

  }else{
    elemento.src = valor;
    elemento.style.width = wi + "px";
    elemento.style.height = he + "px";
    narrativa.appendChild(elemento);
  }  
}



configuracoes();
historia();