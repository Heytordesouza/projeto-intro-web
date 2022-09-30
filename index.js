/*Pense em alguma coisa do cotidiano que seja contável e estruturada. 
Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir 
nossas lógicas e evoluir no projeto através das semanas. 
Pode ser qualquer coisa que possa ser descrita com características escritas. 
Alguns exemplos abaixo

1. Para o item que você decidiu, pense nas características que são importantes 
para construí-lo. Vamos usar estas características para definir exemplos destes 
objetos usando o código. Você precisará criar pelo menos:

  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
  
Exemplos abaixo
const nome; //string
const idade; //number 
const verificouEmail; //boolean 

Recomendamos, pensando no futuro, que você também pense em dados que podem 
receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais 
pra frente, mas é legal já ter uma ideia.*/

//const Filme = "Nome do Filme"
//const anoLancamento = "Ano de lançamento"
//const BilheteriaUS$ = Number "Bilheteria"
//const indicadoOscar = boolean "Se concorreu ao oscar"

/*2. Agora, crie três conjuntos de variáveis utilizando as características 
que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, 
com três conjuntos de dados diferentes.

Exemplo:
const nome1 = "Fulano";
const idade1 = 33;
const verificouEmail1 = false;

const nome2 = "Sicrano";
const idade2 = 41;
const verificouEmail2 = true;

const nome3 = "Beltrano";
const idade3 = 27;
const verificouEmail3 = true;
_______________________________________________________________________________


const filme1 = "Homem de Ferro"
const anoLancamento1 = 2008
const bilheteriaUS$1 = 585796247.00
const indicadoOscar1 = true
const genero1 = ["Ação", "Aventura", "Ficção Científica"]


const filme2 = "Homem de Ferro 2"
const anoLancamento2 = 2010
const bilheteriaUS$2 = 623933331.00
const indicadoOscar2 = true
const genero2 = ["Ação", "Aventura", "Ficção Científica"]


const filme3 = "Capitão América: O Primeiro Vingador"
const anoLancamento3 = 2011
const bilheteriaUS$3 = 370569774.00
const indicadoOscar3 = false
const genero3 = ["Ação", "Aventura", "Ficção Científica", "Guerra"]


const filme4 = "Thor"
const anoLancamento4 = 2011
const bilheteriaUS$4 = 449326618.00
const indicadoOscar4 = false
const genero4 = ["Ação", "Aventura", "Fantasia"]


const filme5 = "Os Vingadores"
const anoLancamento5 = 2012
const bilheteriaUS$5 = 1518815515.00
const indicadoOscar5 = true
const genero5 = ["Ação", "Aventura", "Ficção Científica"]


3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
💡A média deve ser igual à soma dos itens, dividida pelo total de itens.*/

//const media = ((bilheteriaUS$1 + bilheteriaUS$2 + bilheteriaUS$3 + bilheteriaUS$4 + bilheteriaUS$5)/5)
//console.log(media) //709.688.297,00


/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se 
todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
💡 Exemplo
const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
console.log(verificaEmails);*/
// nesse caso, vai imprimir false, pois verificouEmail1 === false*/

//const indicadoOscar = Boolean(indicadoOscar1 & indicadoOscar2 & indicadoOscar3 & indicadoOscar4 & indicadoOscar5)
//console.log(indicadoOscar) //false


/*5. Crie pelo menos mais uma característica para o item que você criou. 
Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, 
isto é, se é um array de strings, só deve receber strings.
const nome; //string
const idade; //number
const verificouEmail; //boolean
const projetos; //array de strings*/

//Seus generos

/*6. Exiba um relatório utilizando console.log(), mostrando todos os dados de 
cada um dos itens criados até aqui

  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"]
*/


/*console.log(`
${filme1.toUpperCase()}
Ano de Lançamento: ${anoLancamento1}
Bilheteria: US$ ${bilheteriaUS$1}
Indicado ao Oscar: ${indicadoOscar1}
Gênero: ${genero1}

${filme2.toUpperCase()}
Ano de Lançamento: ${anoLancamento2}
Bilheteria: US$ ${bilheteriaUS$2}
Indicado ao Oscar: ${indicadoOscar2}
Gênero: ${genero2}

${filme3.toUpperCase()}
Ano de Lançamento: ${anoLancamento3}
Bilheteria: US$ ${bilheteriaUS$3}
Indicado ao Oscar: ${indicadoOscar3}
Gênero: ${genero3}

${filme4.toUpperCase()}
Ano de Lançamento: ${anoLancamento4}
Bilheteria: US$ ${bilheteriaUS$4}
Indicado ao Oscar: ${indicadoOscar4}
Gênero: ${genero4}

${filme5.toUpperCase()}
Ano de Lançamento: ${anoLancamento5}
Bilheteria: US$ ${bilheteriaUS$5}
Indicado ao Oscar: ${indicadoOscar5}
Gênero: ${genero5}

/*Semana 2

1. Transforme os itens que criamos nas últimas semanas em objetos.

Exemplo:

//ANTES
const nome1 = "Fulano";
const idade1 = 33;
const verificouEmail1 = false; 
//DEPOIS
objeto1 = { 
  nome: "Fulano", 
  idade: 33,
  verificouEmail: false
} */

filme1 = {  
  filme: "Homem de Ferro",
  anoLancamento: 2008,
  bilheteriaUS$: 585796247.00,
  indicadoOscar: true,
  genero: ["Ação", "Aventura", "Ficção Científica"]
}

filme2 = {
 filme: "Homem de Ferro 2",
 anoLancamento: 2010,
 bilheteriaUS$: 623933331.00,
 indicadoOscar: true,
 genero: ["Ação", "Aventura", "Ficção Científica"]
}

filme3 = {
 filme: "Capitão América: O Primeiro Vingador",
 anoLancamento: 2011,
 bilheteriaUS$: 370569774.00,
 indicadoOscar: false,
 genero: ["Ação", "Aventura", "Ficção Científica", "Guerra"]
}

filme4 = {
 filme: "Thor",
 anoLancamento: 2011,
 bilheteriaUS$: 449326618.00,
 indicadoOscar: false,
 genero: ["Ação", "Aventura", "Fantasia"]
}

filme5 = {
 filme: "Os Vingadores",
 anoLancamento: 2012,
 bilheteriaUS$: 1518815515.00,
 indicadoOscar: true,
 genero: ["Ação", "Aventura", "Ficção Científica"]
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const filmes = []


/*3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, 
utilizando o push()

Ao fim, você deve ter algo parecido com isso:
[
  { 
    nome: "Fulano", 
    idade: 33,
    verificouEmail: false
  },
  { 
    nome: "Beltrano", 
    idade: 41,
    verificouEmail: true
  },
  { 
    nome: "Fulano", 
    idade: 27,
    verificouEmail: true
  },
]*/

//filmes.push(filme1, filme2, filme3, filme4, filme5)



/*4. Altere o item “Adicione os novos objetos no array de objetos, 
utilizando o push()” (item 3), para criar uma verificação antes de dar o push. 
A caraterística booleana do objeto deve ser validada. 
Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

5. Crie uma condição else, que, em caso de valor false na condição acima, 
exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push*/

// if(filme1.indicadoOscar===true) {
//   filmes.push(filme1)
//   alert(`${filme1.filme} foi adicionado ao array`)
// }else {
//   alert(`${filme1.filme} não foi adicionado ao array`)
// }

// if(filme2.indicadoOscar===true) {
//   filmes.push(filme2)
//   alert(`${filme2.filme} foi adicionado ao array`)
// }else {
//   alert(`${filme2.filme} não foi adicionado ao array`)
// }

// if(filme3.indicadoOscar===true) {
//   filmes.push(filme3)
//   alert(`${filme3.filme} foi adicionado ao array`)
// }else {
//   alert(`${filme3.filme} não foi adicionado ao array`)
// }

// if(filme4.indicadoOscar===true) {
//   filmes.push(filme4)
//   alert(`${filme4.filme} foi adicionado ao array`)
// }else {
//   alert(`${filme4.filme} não foi adicionado ao array`)
// }

// if(filme5.indicadoOscar===true) {
//   filmes.push(filme5)
//   alert(`${filme5.filme} foi adicionado ao array`)
// }else {
//   alert(`${filme5.filme} não foi adicionado ao array`)
// }

//console.log(filmes)


//Semana 3

/*1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, 
altere a forma que a característica de array dos itens seja escrita como um laço que guarde 
todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
💡 Chamamos este processo de reescrever um código já escrito, de refatoração.

Exemplo:
//ANTES 
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 

//DEPOIS
FULANO
idade: 33
verificou email?: false
projetos: "Projeto de HTML,Projeto de CSS,Projeto React" */

// for(let i of filmes){
// i.genero = i.genero.join(", ")
// }

// console.log(filmes)


/*2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. 
Ou seja, você não deve mais imprimir individualmente cada item do relatório. 
Cada item deve ser exibido a partir de uma iteração do laço. 
Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

//ANTES 
console.log(elementos[0].item);

//DEPOIS
FULANO
for(elemento in elementos){
  console.log(elemento.item);
}*/

/*for(let i in carros){
  carros[i].cores += ", Vermelho";
}*/


// for(let filme of filmes){
//   for(descricao in filme){
//     console.log(`${descricao}: ${filme[descricao]}`)
//   }
//}


//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

/*function criarString(objeto){
  for(let i of objeto){
    for(descricao in i){
      console.log(`${descricao}: ${i[descricao]}`)
    }
  }
}

criarString(filmes)*/

/*4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, 
e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.*/

/*function retornarObjeto(array, prompt){
  for(let i in array){
    let maiuscula = array[i].filme.toUpperCase()
    if(maiuscula === prompt){
      console.log(array[i])
      return alert(`O filme ${array[i].filme} foi encontrado`)
    }
  }
  return alert("Nenhum item foi encontrado")
}

retornarObjeto(filmes, prompt("Digite um filme").toUpperCase())*/






// function pesquisa (array,  busca){
//   const result = arrayStep.find( resposta => resposta.tipo === 'Quimico' )
//   console.log(result)
//   return result
//   }