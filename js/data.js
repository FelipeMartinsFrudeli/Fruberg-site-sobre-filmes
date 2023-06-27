const filmes = [
  {
    "nome": "Homen Aranha através do aranhaverso",
    "tipo":"Filme",
    "descricao": "Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso, onde ele encontra uma equipe encarregada de proteger sua própria existência.",
    "avaliacao": "3.8",
    "data":"2h21min",
    "tempo_duracao":"01/06/2023",
    "imagem":"../images/homemAranha.jpg",
    "trailer":"https://www.youtube.com/embed/_4is7I_ZxTg",
    "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/_4is7I_ZxTg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
  },

  {
    "nome": "Elementos",
    "tipo":"Filme",
    "descricao": "Em uma cidade onde os habitantes de fogo, água, terra e ar convivem, uma jovem mulher flamejante e um rapaz que vive seguindo o fluxo descobrem algo surpreendente, porém elementar: o quanto eles têm em comum.",
    "avaliacao": "2.8",
    "data":"23/06/2023",
    "tempo_duracao":"1h47min",
    "imagem":"../images/elementos.jpeg",
    "trailer":"https://www.youtube.com/embed/BydjQP2aFd0",
    "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/BydjQP2aFd0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
  },

  {
      "nome": "Transformers",
      "tipo":"Filme",
      "descricao": "Uma nova ameaça capaz de destruir todo o planeta surge fazendo com que Optimus Prime e os Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra.",
      "avaliacao": "2.4",
      "data":"08/06/2023",
      "tempo_duracao":"2h08min",
      "imagem":"../images/transformers.jpg",
      "trailer":"https://www.youtube.com/embed/itnqEauWQZM",
      "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/itnqEauWQZM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
  },

  {
      "nome": "John Wick 4",
      "tipo":"Filme",
      "descricao": "Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim.",
      "avaliacao": "4.0",
      "data":"23/03/2023",
      "tempo_duracao":"2h50min",
      "imagem":"../images/johnWick4.jpeg",
      "trailer":"https://www.youtube.com/embed/qEVUtrk8_B4",
      "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qEVUtrk8_B4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
  },

  {
      "nome":"The Super Mario Bros",
      "tipo":"Filme",
      "descricao": "Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão parar no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado pelo rei dos Koopas, que faz de tudo para conseguir reinar em todos os lugares.",
      "avaliacao": "3.1",
      "data":"06/04/2023",
      "tempo_duracao":"1h32min",
      "imagem":"../images/theSuperMarioBros.jpg",
      "trailer":"https://www.youtube.com/embed/TnGl01FkMMo",
      "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TnGl01FkMMo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
      "nome":"Guardiões da Galaxia",
      "tipo":"Filme",
      "descricao": "Peter Quill deve reunir sua equipe para defender o universo e proteger um dos seus. Se a missão não for totalmente bem-sucedida, isso pode levar ao fim dos Guardiões.",
      "avaliacao": "3.4",
      "data":"04/05/2023",
      "tempo_duracao":"2h30min",
      "imagem":"../images/guardioesDaGalaxia.jpg",
      "trailer":"https://www.youtube.com/embed/tqot0Ws2wFs",
      "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/tqot0Ws2wFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
    "nome":"O Auto da Copadecida",
    "tipo":"Filme",
    "descricao": "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "avaliacao": "4.7",
     "data":"10/09/2000",
     "tempoDuraçao":"1h35min",
     "imagem":"../images/autoDaCompadecida.jpg",
     "trailer":"https://www.youtube.com/embed/XPuMu_ENzlg",
     "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/XPuMu_ENzlg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
  },

  {
    "nome":"Wall-e",
    "tipo":"Filme",
    "descricao": "Após entulhar a Terra de lixo e poluir a atmosfera com gases tóxicos, a humanidade deixou o planeta e passou a viver em uma gigantesca nave. O plano era que o retiro durasse alguns poucos anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último destes robôs, e sua vida consiste em compactar o lixo existente no planeta. Até que um dia surge repentinamente uma nave, que traz um novo e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve segui-la por toda a galáxia",
    "avaliacao": "4.6",
    "data":"27/06/2008",
    "tempoDuraçao":"1h37min",
    "imagem":"../images/wall-e.jpg",
    "trailer":"https://www.youtube.com/embed/CZ1CATNbXg0",
    "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CZ1CATNbXg0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
  "nome":"Jurrasic Park 1",
  "tipo":"Filme",
  "descricao": "Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura. Mas após uma queda de energia, os visitantes descobrem, aos poucos, que vários predadores ferozes estão soltos e à caça.",
  "avaliacao": "5.0",
  "data":"13/06/1993",
  "tempoDuraçao":"2h02min",
  "imagem":"../images/jurasicPark.jpg",
  "trailer":"https://www.youtube.com/embed/QWBKEmWWL38",
  "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QWBKEmWWL38\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
  "nome":"Titanic",
  "tipo":"Filme",
  "descricao": "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.",
  "avaliacao": "5.0",
  "data":"16/01/1998",
  "tempoDuraçao":"3h14min",
  "imagem":"../images/titanic.jpg",
  "trailer":"https://www.youtube.com/embed/IH6_CA_ocqY",
  "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/IH6_CA_ocqY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
  "nome":"The Walking Dead",
  "tipo":"Serie",
  "descricao": "The Walking Dead conta a história de um grupo de sobreviventes, liderados pelo xerife Rick Grimes, após um apocalipse zumbi. Toda a população da Terra é infectada por um vírus misterioso que transforma os mortos em zumbis.",
  "avaliacao": "4.7",
  "data":"31/09/2010 a 20/11/2022",
  "tempoDuraçao":"11 Temporadas",
  "imagem":"../images/theWalkingDead.jpg",
  "trailer":"https://www.youtube.com/embed/R1v0uFms68U",
  "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/R1v0uFms68U\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
  "nome":"Game of Thrones",
  "tipo":"Serie",
  "descricao": "Game of Thrones conta a história de um lugar onde uma força destruiu o equilíbrio das estações, há muito tempo. Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, as reivindicações e as forças sobrenaturais correm as portas do Reino dos Sete Reinos. A irmandade da Patrulha da Noite busca proteger o reino de cada criatura que pode vir de lá da Muralha, mas já não tem os recursos necessários para garantir a segurança de todos. Depois de um verão de dez anos, um inverno rigoroso promete chegar com um futuro mais sombrio. Enquanto isso, conspirações e rivalidades correm no jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",
  "avaliacao": "4.8",
  "data":"17/04/2011 a 19/05/2019",
  "tempoDuraçao":"11 Temporadas",
  "imagem":"../images/got.jpg",
  "trailer":"https://www.youtube.com/embed/KPLWWIOCOOQ",
  "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/KPLWWIOCOOQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
  "nome":"The Wither",
  "tipo":"Serie",
  "descricao":"Em The Witcher, série original da Netflix, Geralt de Rivia (Henry Cavill) é um solitário caçador de monstros, que luta para encontrar seu lugar num mundo onde pessoas são mais crueis que criaturas. Mas seu caminho irá cruzar com duas figuras que mudarão sua vida: a feiticeira Yennefer de Vengerberg (Anya Chalotra) e a princesa poderosa Cintran Ciri (Freya Allan). A trama acompanha os três em linhas do tempo diferentes até que finalmente suas vidas são conectadas quando se juntam na Batalha de Sodden Hill contra os invasores de Nilfgaard. Ciri e Geralt estão conectados pelo destino mesmo sem saberem já que, antes mesmo dela nascer, ele havia cumprido uma tarefa para seus pais e como recompensa \"recebeu\" a jovem princesa, tendo seus caminhos conectados magicamente. Mas Geralt acaba ficando encarregado de ajudá-la a combater aqueles que querem destruir seu reino e, assim, impedir que seus poderes sejam corrompidos.",
  "avaliacao": "4.6",
  "data":"20/12/2019 - Em produção",
  "tempoDuraçao":"3 Temporadas",
  "imagem":"../images/theWitcher.jpg",
  "trailer":"https://www.youtube.com/embed/TN-_xS4Kdpg",
  "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TN-_xS4Kdpg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
  "nome":"The Big Bang Teory",
  "tipo":"Serie",
  "descricao":"Na sitcom The Big Bang Theory, Leonard Hofstadter (Johnny Galecki) e Sheldon Cooper (Jim Parsons) são dois físicos brilhantes que trabalham no Instituto de Tecnologia da Califórnia e dividem um apartamento em Pasadena. Leonard vem de uma família cheia de prodígios e tem de lidar com a expectativa opressora de seus parentes. Por outro lado, Sheldon frequentou faculdade desde cedo, é o garoto de ouro do Texas com dois doutorados, mestrados e, mesmo assim, tem pouquíssimo traquejo social para se relacionar com outros seres humanos. Leonard e Sheldon passam a maior parte do tempo com os amigos Howard (Simon Helberg) e Raj (Kunal Nayyar), dois cientistas que também amam cinema, quadrinhos e videogames. A dinâmica do quarteto muda quando Penny (Kaley Cuoco), uma jovem atraente e aspirante a atriz, se muda para o apartamento da frente, encantando Leonard logo de cara. Apesar de ser muito diferente dos rapazes, aos poucos Penny se aproxima dos Geeks. ",
  "avaliacao": "4.6",
  "data":"24/09/2007 a 16/05/2019",
  "tempoDuraçao":"12 Temporadas",
  "imagem":"../images/theBigBangTeory.jpg",
  "trailer":"https://www.youtube.com/embed/rCj-Fb1OmXg",
  "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rCj-Fb1OmXg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  },

  {
  "nome":"Greys Anatomy",
  "tipo":"Serie",
  "descricao":"Em Grey's Anatomy, os médicos do Grey Sloan Memorial Hospital/Seattle Grace Hospital lidam diariamente com casos de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e até mesmo amor. Juntos, eles se esforçam para conciliar os dramas profissionais com os pessoais, descobrindo que ambos podem – e vão – se misturar no meio do caminho. Entre os funcionários do local está Meredith Grey (Ellen Pompeo), filha de um cirurgião conceituado e recém-chegada ao programa de residência. Ela divide as preocupações do ofício com os internos Cristina Yang (Sandra Oh), Izzie Stevens (Katherine Heigl), Alex Karev (Justin Chambers) e George O'Malley (T. R. Knight). Todos passam pela supervisão de três renomados doutores: Miranda Bailey (Chandra Wilson), uma residente sênior que trabalha para ajudar Derek Shepherd (Patrick Dempsey), chefe de neurocirurgia e interesse amoroso de Grey; Preston Burke (Isaiah Washington), chefe do departamento de cardio e futuro noivo de Yang; e Richard Webber (James Pickens Jr.), chefe de cirurgia e cirurgião geral adjunto. Cada um deles luta para sobreviver em meio a longos expedientes e agitados treinamentos, dando o melhor de si nessa carreira tão importante quanto difícil.",
  "avaliacao": "4.7",
  "data":"24/09/2007 a 16/05/2019",
  "tempoDuraçao":"20 Temporadas",
  "imagem":"../images/greysAnatomy.jpg",
  "trailer":"https://www.youtube.com/embed/q1pcpgREQ5c",
  "trailer_embed":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/q1pcpgREQ5c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"   
  }
]