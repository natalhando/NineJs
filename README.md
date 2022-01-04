# NINE - Narrativas Interativas No Ensino

[NineJs](https://github.com/natalhando/NineJs) é uma biblioteca que visa facilitar a construção de narrativas interativas com programação.

Aqui um recorte de programa escrito em NineJs

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

# Documentação do NineJs

A linguagem de programação do NINE é formada por funções que fornecem mecanismos para construir narrativas interativas visuais.

- [configuracoes()](#configuracoes)
- [historia()](#historia)
- [autor()](#autor)
- [titulo()](#titulo)
- [cor()](#cor)
- [corDeFundo()](#corDeFundo)
- [tamanhoFonte()](#tamanhoFonte)
- [adicionarTexto()](#adicionarTexto)
- [adicionarSecao()](#adicionarSecao)
- [adicionarImagem()](#adicionarImagem)
- [criarOpcao()](#criarOpcao)
- [adicionarOpcoes()](#adicionarOpcoes)
- [ler()](#ler)

## configuracoes()
A função configuracoes() é chamada quando a execução da narrativa inicia. Use-a para inicializar variáveis, configurar o visual da narrativa etc. A função configuracoes() será executada apenas uma vez.

    configuracoes() {
	    autor("NATALIA");
	    titulo("A Supremacia Knight");
    }

## historia()
Depois de criar uma função configuracoes(), a qual inicializa e atribui os valores iniciais, a função historia() faz precisamente o que seu nome sugere, ela é a função onde deve ser escrita a narrativa.

    historia() {
	    adicionarTexto("Era uma vez...");
    }

## autor()
A função autor() define o nome do autor da história. Essa função é usada dentro de configuracoes(). Quando não é definido um autor, o componente de texto da interface do usuário que exibe o nome do autor é ocultada.
Se um único argumento é fornecido, o valor passado por este é definido como o nome do autor. Se não houver argumentos, a função retorna o nome do autor, caso haja, ou undefined, caso este não tenha sido definido.

    autor("Natalia Pinheiro");

## titulo()
A função titulo() define o título da história. Essa função é usada dentro de configuracoes(). Quando não é definido um título, o componente de texto da interface do usuário que exibe o título da história é ocultada.
Se um único argumento é fornecido, o valor passado por este é definido como o título da história. Se não houver argumentos, a função retorna o título da história, caso haja, ou undefined, caso este não tenha sido definido.

    titulo("A Supremacia Knight");

## cor()
A função cor() define a cor do texto da história. Essa função é tipicamente usada dentro de configuracoes(), mas pode ser usada em historia(). Nesse último caso, ela define a cor do texto para todos os textos abaixo de sua declaração. O valor padrão da cor do texto é #000, ou preto.
Se um único argumento é fornecido, o valor passado por este é definido como a cor do texto. Se não houver argumentos, a função retorna a cor do texto.

    cor("#111");

## corDeFundo()
A função corDeFundo() define a cor de fundo do texto da história. Essa função é usada dentro de configuracoes(). O valor padrão da cor do fundo é #FFF, ou branco.
Se um único argumento é fornecido, o valor passado por este é definido como a cor de fundo. Se não houver argumentos, a função retorna a cor de fundo.

    corDeFundo("#CCC");

## tamanhoFonte()
A função tamanhoFonte() define o tamanho da fonte do texto. Essa função é tipicamente usada dentro de configuracoes(), mas pode ser usada em historia(). Nesse último caso, ela define o tamanho da fonte para todos os textos abaixo de sua declaração. O tamanho padrão da fonte do texto é 20px.
Se um único argumento é fornecido, o valor passado por este é definido como o tamanho da fonte. Se não houver argumentos, a função retorna o tamanho da fonte.

    tamanhoFonte("16px");

## adicionarTexto()

A função adicionarTexto() adiciona um texto na sequência da história. Essa função é usada dentro da função historia(), e recebe um argumento: o texto a ser adicionado na narrativa.

    adicionarTexto("Era de manhã. " + PERSONAGEM + " estava caminhando pela floresta, carregando sua cesta de frutas vermelhas.");

## adicionarSecao()
A função adicionarSecao() adiciona um título de seção na sequência da história. Essa função é usada dentro da função historia(), e recebe um argumento: o título da seção a ser criada.

    adicionarSecao("Parte I - O pesadelo de Charlotte")

## adicionarImagem()
A função adicionarImagem() adiciona uma imagem na sequência da história. Essa função é usada dentro da função historia(), e recebe até três argumentos: o caminho ou url da imagem, largura da imagem (opcional) mantendo a proporção automaticamente, e, a altura da imagem (opcional).

    adicionarImagem("porta_trancada.png");
    adicionarImagem("porta_trancada.png", largura);
    adicionarImagem("porta_trancada.png", largura, altura);


## criarOpcao()
A função criarOpcao() cria uma opção para a narrativa. Essa função é usada dentro da função historia(), e recebe pelo menos dois argumentos: o label da opção, que é um texto descritivo de como a opção desenvolveria a história, e uma função, que será executada caso essa opção seja escolhida.
Ainda, a função criarOpcao() pode receber um terceiro argumento opcional, as opções, que é um objeto com atributos da opção. As opções atualmente suportadas são:
- inativa: recebe false caso a opção esteja ativa, interagível, e true caso contrário.
- cor: define a cor do label do botão.
- corDeFundo: define a cor de fundo do botão.

      const opcaoAtacar = criarOpcao("Atacar", atacarUrso, {
    	  cor: "#000",
    	  corDeFundo: "#FFF",
    	  inativa: personagem.forca < 6,
      });

## adicionarOpcoes()
A função adicionarOpcoes() adiciona botões com opções na sequência da história. Essa função é usada dentro da função historia(), e recebe um vetor de opções, que devem ser criadas com a função criarOpcao().

    adicionarOpcoes([opcao1, opcao2]);

## ler()
A função ler() permite a entrada de dados na narrativa, ela adiciona um label, um input e um botão na sequência da história. Essa função é usada dentro da função historia(), e recebe dois argumentos: um texto, que é colocado como o rótulo explicativo de qual dado deve ser fornecido, e uma função.
Após o leitor inserir um dado e apertar o botão, a função passada como argumento é chamada e o parâmetro dessa função é o dado entrado pelo usuário.

    ler(“Qual é o seu nome?”, continuacao);
    
    function continuacao(nome) {
    	adicionarTexto(“O seu nome era ” + nome);
    }

# Colaborando com o NineJs
NineJs é um projeto gratuito que busca, em primeiro lugar, ensinar programação de uma forma criativa. Criado a partir de um projeto de pesquisa e iniciação tecnológica da [Universidade Estadual do Sudoeste da Bahia](http://www.uesb.br/noticias/software-desenvolvido-na-uesb-propoe-nova-forma-de-ensinar-programacao/), o NineJs foi e está sendo construído por alunos da universidade, membros do laboratórios LARA, mas você é mais do que bem vindo para colaborar com esse projeto. [Entre em contato com o LARA](mailto:lara@uesb.edu.br?subject=[NINE]%20Sobre%20o%20projeto), crie uma `issue`, ou até mesmo a sua própria `branch`. Juntos, podemos tornar a programação acessível e democratizada.
