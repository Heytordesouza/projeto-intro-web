const filmes = [
  filme1 = {  
   filme: "Homem de Ferro",
   dataDeLancamento: "30 de Abril de 2008",
   bilheteriaUS$: 585796247.00,
   notaIMDB: 7.9,
   notaAcimaDe6: true,
   genero: "Ação, Aventura, Ficção Científica",
   posterImg: "./Imagens/Homem_de_Ferro.jpg",
   linkTrailer: "https://www.youtube.com/watch?v=Vo9l81vSZn0",
   linkFilme: "https://www.disneyplus.com/pt-br/movies/homem-de-ferro-da-marvel-studios/6aM2a8mZATiu",
   streamingImg: "./Imagens/Disney.jpg"
  },

  filme2 = {  
    filme: "O Incrível Hulk",
    dataDeLancamento: "11 de Junho de 2008",
    bilheteriaUS$: 264770996.00,
    notaIMDB: 6.6,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "/Imagens/O Incrível Hulk.webp",
    linkTrailer: "https://www.youtube.com/watch?v=HomRcxrJISI",
    linkFilme: "https://www.netflix.com/br/title/70087537",
    streamingImg: "./Imagens/Netflix.gif"
  },

  filme3 = {
    filme: "Homem de Ferro 2",
    dataDeLancamento: "28 de Abril de 2010",
    bilheteriaUS$: 623933331.00,
    notaIMDB: 6.9,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Homem de ferro 2.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=kY60tKj1UM4",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/homem-de-ferro-2-da-marvel-studios/lXjCr9QmGGQJ",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme4 = {
    filme: "Thor",
    dataDeLancamento: "21 de Abril de 2011",
    bilheteriaUS$: 449326618.00,
    notaIMDB: 7,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Fantasia",
    posterImg: "./Imagens/Thor.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=GI-NJq82kH8&t=78s",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/thor-da-marvel-studios/1p4vdKzTuhzr",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme5 = {
    filme: "Capitão América: O Primeiro Vingador",
    dataDeLancamento: "22 de Julho de 2011",
    bilheteriaUS$: 370569774.00,
    notaIMDB: 6.9,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica, Guerra",
    posterImg: "./Imagens/Capitao America O Primeiro Vingador.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=nrcF4S8Z2Lw",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/capitao-america-o-primeiro-vingador-da-marvel-studios/6xvB6xZ4r95O",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme6 = {
    filme: "Os Vingadores",
    dataDeLancamento: "25 de Abril de 2012",
    bilheteriaUS$: 1518815515.00,
    notaIMDB: 8,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Os Vingadores.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=Bw2qhZ42AHQ",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/the-avengers-os-vingadores-da-marvel-studios/2h6PcHFDbsPy",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme7 = {
    filme: "Homem de Ferro 3",
    dataDeLancamento: "24 de Abril de 2013",
    bilheteriaUS$: 1214811252.00,
    notaIMDB: 7.1,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Homem de Ferro 3.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=ruFW4s_ZF-4",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/homem-de-ferro-3-da-marvel-studios/3s4Ihq7P2c6e",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme8 = {
    filme: "Thor: O Mundo Sombrio",
    dataDeLancamento: "30 de Outubro de 2013",
    bilheteriaUS$: 644783140.00,
    notaIMDB: 6.8,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Fantasia",
    posterImg: "./Imagens/Thor-2-o-mundo-sombrio.webp",
    linkTrailer: "https://www.youtube.com/watch?v=BmCT2nQu90A",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/thor-o-mundo-sombrio-da-marvel-studios/ZHk7aM5xTbW7",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme9 = {
    filme: "Capitão América: O Soldado Invernal",
    dataDeLancamento: "26 de Março de 2014",
    bilheteriaUS$: 714421503.00,
    notaIMDB: 7.8,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica, Mistério",
    posterImg: "./Imagens/Capitão America O Soldado Invernal.webp",
    linkTrailer: "https://www.youtube.com/watch?v=BmCT2nQu90A",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/capitao-america-soldado-invernal-da-marvel-studios/TVme5whcowSy",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme10 = {
    filme: "Guardiões da Galáxia",
    dataDeLancamento: "30 de Julho de 2014",
    bilheteriaUS$: 773350147.00,
    notaIMDB: 8,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Guardioes da Galaxia.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=8VN_l57QWyQ",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/guardioes-da-galaxia-da-marvel-studios/1S4WM9h3KRR6",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme11 = {
    filme: "Vingadores: Era de Ultron",
    dataDeLancamento: "22 de Abril de 2015",
    bilheteriaUS$: 1402809540.00,
    notaIMDB: 7.3,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Vingadores Era de Ultron.webp",
    linkTrailer: "https://www.youtube.com/watch?v=I4lgl7ImHSg",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/vingadores-era-de-ultron-da-marvel-studios/76IUxY0rNHzt",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme12 = {
    filme: "Homem Formiga",
    dataDeLancamento: "17 de Julho de 2015",
    bilheteriaUS$: 519311965.00,
    notaIMDB: 7.3,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Comédia",
    posterImg: "./Imagens/Homem Formiga.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=wITUolzfkwI",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/homem-formiga-da-marvel-studios/5c92KVf1zgUX",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme13 = {
    filme: "Capitão América: Guerra Civil",
    dataDeLancamento: "06 de Maio de 2016",
    bilheteriaUS$: 1153337496.00,
    notaIMDB: 7.8,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Capitao America Guerra Civil.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=FRLYZn5PGuA",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/capitao-america-guerra-civil-da-marvel-studios/4ovfyKnnIBCg",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme14 = {
    filme: "Doutor Estranho",
    dataDeLancamento: "04 de Novembro de 2016",
    bilheteriaUS$: 677718395.00,
    notaIMDB: 7.5,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Fantasia",
    posterImg: "./Imagens/Doutor Estranho.webp",
    linkTrailer: "https://www.youtube.com/watch?v=YUfWrIcX4zw",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/doutor-estranho-da-marvel-studios/4GgMJ1aHKHA2",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme15 = {
    filme: "Guadiões da Galáxia Vol. 2",
    dataDeLancamento: "05 de Maio de 2017",
    bilheteriaUS$: 863756051.00,
    notaIMDB: 7.6,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Comédia",
    posterImg: "./Imagens/Guardioes da Galaxia Vol 2.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=4-i8nTNSQFI",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/guardioes-da-galaxia-vol2-da-marvel-studios/ZdRX4mMbp1gM",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme16 = {
    filme: "Homem Aranha: De Volta ao Lar",
    dataDeLancamento: "07 de Julho de 2017",
    bilheteriaUS$: 880166924.00,
    notaIMDB: 7.4,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Homem Aranha de Volta ao Lar.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=ntE5Jmsol70",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/homem-aranha-de-volta-ao-lar/4cLMEzWGqQaG",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme17 = {
    filme: "Thor: Ragnarok",
    dataDeLancamento: "24 de Outubro de 2017",
    bilheteriaUS$: 853983879.00,
    notaIMDB: 7.9,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica, Comédia",
    posterImg: "./Imagens/Thor Ragnarok.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=FMYVZ0JwfeI",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/thor-ragnarok-da-marvel-studios/3XqAT8UV8ojS",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme18 = {
    filme: "Pantera Negra",
    dataDeLancamento: "13 de Fevereiro de 2018",
    bilheteriaUS$: 1347597973.00,
    notaIMDB: 7.3,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Pantera Negra.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=wL4a4MafSjQ",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/pantera-negra-da-marvel-studios/1GuXuYPj99Ke",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme19 = {
    filme: "Vingadores: Guerra Infinita",
    dataDeLancamento: "25 de Abril de 2018",
    bilheteriaUS$: 2048359754.00,
    notaIMDB: 8.4,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Vingadores Guerra Infinita.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=3BXq73F2_z4",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/vingadores-guerra-infinita-da-marvel-studios/1WEuZ7H6y39v",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme20 = {
    filme: "Homem Formiga e a Vespa",
    dataDeLancamento: "04 de Julho de 2018",
    bilheteriaUS$: 622674139.00,
    notaIMDB: 7,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Comédia",
    posterImg: "./Imagens/Homem-Formiga e a Vespa.webp",
    linkTrailer: "https://www.youtube.com/watch?v=0HGBv7s1Y7E",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/homem-formiga-e-a-vespa-da-marvel-studios/5D7wkVHmlCKU",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme21 = {
    filme: "Capitã Marvel",
    dataDeLancamento: "08 de Março de 2019",
    bilheteriaUS$: 1128462972.00,
    notaIMDB: 6.8,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Capita Marvel.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=FV7AxLbHcrE",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/capita-marvel/38xJGlLAQy9a",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme22 = {
    filme: "Vingadores: Ultimato",
    dataDeLancamento: "24 de Abril de 2019",
    bilheteriaUS$: 2797501328.00,
    notaIMDB: 8.4,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica, Drama",
    posterImg: "./Imagens/Vingadores Ultimato.webp",
    linkTrailer: "https://www.youtube.com/watch?v=PgrmbRID0eY",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/vingadores-ultimato-da-marvel-studios/aRbVJUb2h2Rf",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme23 = {
    filme: "Homem Aranha: Longe de Casa",
    dataDeLancamento: "02 de Julho de 2019",
    bilheteriaUS$: 1131927996.00,
    notaIMDB: 7.4,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Homem Aranha Longe de Casa.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=bTZucJi2Z3A",
    linkFilme: "https://www.netflix.com/br/title/81055822",
    streamingImg: "./Imagens/Netflix.gif"
  },

  filme24 = {
    filme: "Viúva Negra",
    dataDeLancamento: "07 de Julho de 2021",
    bilheteriaUS$: 379751655.00,
    notaIMDB: 6.7,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Ficção Científica",
    posterImg: "./Imagens/Viuva Negra.webp",
    linkTrailer: "https://www.youtube.com/watch?v=uNAxHLp7wv8",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/viuva-negra/3VfTap90rwZC",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme25 = {
    filme: "Shang-Chi e a Lenda dos Dez Anéis",
    dataDeLancamento: "01 de Setembro de 2021",
    bilheteriaUS$: 432243292.00,
    notaIMDB: 7.4,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Fantasia",
    posterImg: "./Imagens/Shang-Chi e a Lenda dos Dez Anéis.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=AfHiUtxrmiY",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/shang-chi-e-a-lenda-dos-dez-aneis/5GyV9sf9Y041",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme26 = {
    filme: "Eternos",
    dataDeLancamento: "03 de Novembro de 2021",
    bilheteriaUS$: 402064899.00,
    notaIMDB: 6.3,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Fantasia",
    posterImg: "./Imagens/Eternos.jpeg",
    linkTrailer: "https://www.youtube.com/watch?v=zgdDOLMSsVs",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/eternos/5cmhJAtkt6Jk",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme27 = {
    filme: "Homem Aranha: Sem Volta para Casa",
    dataDeLancamento: "15 de Dezembro de 2021",
    bilheteriaUS$: 1920544470.00,
    notaIMDB: 8.3,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Fantasia",
    posterImg: "./Imagens/Home Aranha Sem Volta Para Casa.jpeg",
    linkTrailer: "https://www.youtube.com/watch?v=CyiiEJRZjSU",
    linkFilme: "https://play.hbomax.com/page/urn:hbo:page:GYqeASQeezEo8igEAAACK:type:feature?source=googleHBOMAX&action=open",
    streamingImg: "./Imagens/HBO.png"
  },

  filme28 = {
    filme: "Doutor Estranho no Multiverso da Loucura",
    dataDeLancamento: "04 de Maio de 2022",
    bilheteriaUS$: 955775804.00,
    notaIMDB: 7,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Fantasia",
    posterImg: "./Imagens/Doutor Estranho no Multiverso da Loucura.jpg",
    linkTrailer: "https://www.youtube.com/watch?v=X23XCFgdh2M",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/doutor-estranho-no-multiverso-da-loucura/27EiqSW4jIyH",
    streamingImg: "./Imagens/Disney.jpg"
  },

  filme29 = {
    filme: "Thor: Amor e Trovão",
    dataDeLancamento: "06 de Julho de 2022",
    bilheteriaUS$: 760679406.00,
    notaIMDB: 6.4,
    notaAcimaDe6: true,
    genero: "Ação, Aventura, Comédia",
    posterImg: "./Imagens/Thor Amor e Trovao.webp",
    linkTrailer: "https://www.youtube.com/watch?v=For4aoTAurQ",
    linkFilme: "https://www.disneyplus.com/pt-br/movies/thor-amor-e-trovao/3htR8mRAZMoT",
    streamingImg: "./Imagens/Disney.jpg"
  }
]

let soma = 0;

for(let i in filmes){
  soma += filmes[i].bilheteriaUS$
  console.log(`
  Filme: ${filmes[i].filme.toUpperCase()}
  Data de Lançamento: ${filmes[i].dataDeLancamento}
  Bilheteria: US$ ${filmes[i].bilheteriaUS$.toLocaleString('en-US',{ minimumFractionDigits: 2})}
  Nota IMDB: ${filmes[i].notaIMDB}
  Nota IMDB acima de 6: ${filmes[i].notaAcimaDe6}
  Gênero: ${filmes[i].genero}
  `)
}

soma = soma/29
console.log(`Média de Bilheteria: US$ ${soma.toLocaleString('en-US',{ minimumFractionDigits: 2})},00`)


const insereFilmes = (objeto) => {
  const novaSection = document.getElementById("container-filme");
  const criarSection = document.createElement("section");
  const adicionaSection = novaSection.appendChild(criarSection);
  criarSection.classList.add("filme");

  const novoPoster = document.createElement("img");
  const poster = adicionaSection.appendChild(novoPoster);
  novoPoster.classList.add("poster");
  novoPoster.setAttribute("src", objeto.posterImg);

  const novaDiv = document.createElement("div");
  const div = adicionaSection.appendChild(novaDiv);
  novaDiv.classList.add("bloco");

  const novoTitulo = document.createElement("a");
  const titulo = div.appendChild(novoTitulo);
  novoTitulo.classList.add("titulo");
  novoTitulo.innerHTML = objeto.filme;

  const novoUl = document.createElement("ul");
  const ul = div.appendChild(novoUl);

  const novoTrailer = document.createElement("a");
  const trailer = novoUl.appendChild(novoTrailer);
  novoTrailer.classList.add("trailer");
  novoTrailer.setAttribute("target", "_blank");
  novoTrailer.setAttribute("href", objeto.linkTrailer);
  
  const assistaTrailer = document.createElement("h1")
  const assisTrailer = novoTrailer.appendChild(assistaTrailer)
  novoTrailer.innerHTML = "Assista ao Trailer"

  const novaDiv2 = document.createElement("div");
  const div2 = novoUl.appendChild(novaDiv2);
  novaDiv2.classList.add("linkDisney");

  const novoAssista = document.createElement("h1")
  const assista = novaDiv2.appendChild(novoAssista)
  novoAssista.classList.add("assista");
  novoAssista.innerHTML = "Assista ao filme >"

  const linkAssista = document.createElement("a");
  const linkA = novaDiv2.appendChild(linkAssista);
  linkAssista.classList.add("logo");
  linkAssista.setAttribute("target", "_blank");
  linkAssista.setAttribute("href", objeto.linkFilme);
  
  const novoLogo = document.createElement("img");
  const logo = linkAssista.appendChild(novoLogo);
  novoLogo.setAttribute("src", objeto.streamingImg);
  
  const novoLi = document.createElement("li");
  const li = novoUl.appendChild(novoLi);
  novoLi.innerHTML = "Data de Lançamento: " + objeto.dataDeLancamento;

  const novoLi2 = document.createElement("li");
  const li2 = novoUl.appendChild(novoLi2);
  novoLi2.innerHTML = "Bilheteria: US$ " + objeto.bilheteriaUS$.toLocaleString('en-US',{ minimumFractionDigits: 2});

  const novoLi3 = document.createElement("li");
  const li3 = novoUl.appendChild(novoLi3);
  novoLi3.innerHTML = "Nota IMDB: " + objeto.notaIMDB;

  const novoLi4 = document.createElement("li");
  const li4 = novoUl.appendChild(novoLi4);
  novoLi4.innerHTML = "Gênero: " + objeto.genero;
}

insereFilmes(filme1);
insereFilmes(filme2);
insereFilmes(filme3);
insereFilmes(filme4);
insereFilmes(filme5);
insereFilmes(filme6);
insereFilmes(filme7);
insereFilmes(filme8);
insereFilmes(filme9);
insereFilmes(filme10);
insereFilmes(filme11);
insereFilmes(filme12);
insereFilmes(filme13);
insereFilmes(filme14);
insereFilmes(filme15);
insereFilmes(filme16);
insereFilmes(filme17);
insereFilmes(filme18);
insereFilmes(filme19);
insereFilmes(filme20);
insereFilmes(filme21);
insereFilmes(filme22);
insereFilmes(filme23);
insereFilmes(filme24);
insereFilmes(filme25);
insereFilmes(filme26);
insereFilmes(filme27);
insereFilmes(filme28);
insereFilmes(filme29);

function enviar(){
  let input = document.getElementById("nome").value
  console.log(input)
  input = input.toLowerCase();
  let filme = document.getElementsByClassName("filme")
  

  if(input===""){
    alert("A pesquisa está em branco!")
  }

  for(i in filme){
    
    if(!filme[i].innerHTML.toLowerCase().includes(input)){
     filme[i].style.display = "none";
    }
    else {
     filme[i].style.display = "flex";
    }
  }
}

function limpar(){
  let input = document.getElementById("nome").value
  input = input.toLowerCase();
  let filme = document.getElementsByClassName("filme")

  for(i in filme){
    if(input===""){
      filme[i].style.display = "flex";
    }
  }
}