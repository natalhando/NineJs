function configuracoes() {
  titulo("Mais Procurado");
  autor("Natalia Pinheiro");
}

let personagem = {
  nome: "Cesar",
  sobrenome: "Cairo",
}

let vilao = {};

function historia() {
  ler("Qual é o seu nome?", sequencia);
}

function sequencia(nome) {
  vilao.nome = nome;
  adicionarTexto("Era como se os ventos pudessem sentir.");
  adicionarTexto("À simples menção de que " + vilao.nome + " entraria no prédio foi o suficiente para que os ventos mudassem de direção, tornassem-se mais fortes, mais intensos, a fim de tornar o momento especialmente memorável.");
  adicionarTexto("Ele tinha uma presença excepcionalmente marcante. Talvez fosse o seu chapéu, ou a sua postura. Não. Definitivamente o chapéu. Um fedora cinza escuro levemente inclinado para a direita. Dava ao homem um ar misterioso e suspeito. Certamente era de propósito.");
  adicionarSecao("Parte I");
  adicionarTexto("Ao entrar nas instalações da agência de segurança nacional, " + vilao.nome + " foi imediatamente reconhecido. Como poderia ter sido diferente? O número três da lista dos mais procurados da ASN não passaria despercebido.");
  adicionarTexto(`Entre as dezenas de homens e mulheres armados que o abordaram, estava você. ${personagem.nome} ${personagem.sobrenome}. O novato. Inexperiente. Havia se juntado à força tarefa havia apenas, como, cinco ou seis semanas.`);

  const _agirConfiante = criarOpcao("Agir com confiança", agirConfiante);
  const _agirNervoso = criarOpcao("Agir com nervosismo", agirNervoso);

  adicionarOpcoes([_agirConfiante, _agirNervoso]);
}

function agirConfiante() {
  personagem.confiante = true;

  adicionarTexto("– Parado! Coloque as mãos onde eu possa ver! – Disse você, assumindo a liderança armada.");
  vilaoSeAjoelha();
}

function agirNervoso() {
  personagem.confiante = false;

  adicionarTexto("Um dos outros agentes assumiu a liderança, dando passos confiantes para a frente, e apontando a arma para " + vilao.nome + ".");
  vilaoSeAjoelha();
}

function vilaoSeAjoelha() {
  adicionarTexto(`Praticamente sem se sentir amedrontado, ${vilao.nome} apenas deu um sorriso debochado. Ele depositou as duas mãos na nuca e ajoelhou-se, em sinal de rendição. ${personagem.confiante ? "Você" : "O agente"} assumiu sua posição na frente do criminoso, removendo suas algemas do cinto e prendendo de forma bruta os pulsos de ${vilao.nome}, um no outro.`);
  adicionarTexto("– Você está preso.");
  adicionarTexto("Novamente, o riso debochado.");
  adicionarTexto("– Vocês não me capturaram – ele garantiu. – Eu estou me entregando, é completamente diferente. E espero que saibam que posso escapar mais rápido do que vocês podem engatilhar uma arma.");
  adicionarTexto("Alguns dos agentes se entreolharam, enquanto silenciosamente se perguntavam do motivo da súbida rendição do criminoso. Ele, que havia passado seus últimos 20 anos fugindo graciosamente da polícia.");
  adicionarTexto("– Imagino que vocês tenham muitas perguntas. É simplesmente natural. – Comentou " + vilao.nome + " enquanto era levado. – E estou disposto a respondê-las. Com apenas uma condição.");
  adicionarTexto("Fez uma pausa dramática antes de completar.");
  adicionarTexto(`– Eu só falo com ${personagem.nome} ${personagem.sobrenome}.`);
}