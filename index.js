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

//const modelo = "Modelo do carro"
//const valor = Number "Valor do carro"
//const km = boolean "Se o carro é 0Km"

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

const modelo1 = "Chevrolet Onix 1.0 MT"
const valor1 = 78.699
const km1 = true
const cores1 = ["Preto", "Branco", "Cinza", "Prata", "Azul"]

const modelo2 = "Hyundai HB20 Sense 1.0"
const valor2 = 76.699
const km2 = true
const cores2 = ["Preto", "Prata", "Branco", "Cinza"]

const modelo3 = "Renault Logan Authentique Flex 1.0 2018"
const valor3 = 46.367
const km3 = false
const cores3 = ["Preto", "Prata", "Branco", "Vermelho"]

3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
💡A média deve ser igual à soma dos itens, dividida pelo total de itens.*/

//const media = ((valor1 + valor2 + valor3)/3)
//console.log(media) //67.255


/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se 
todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
💡 Exemplo
const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
console.log(verificaEmails);*/
// nesse caso, vai imprimir false, pois verificouEmail1 === false*/

//const kms = Boolean(km1 & km2 & km3)
//console.log(kms) //false


/*5. Crie pelo menos mais uma característica para o item que você criou. 
Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, 
isto é, se é um array de strings, só deve receber strings.
const nome; //string
const idade; //number
const verificouEmail; //boolean
const projetos; //array de strings*/

//Suas cores

/*6. Exiba um relatório utilizando console.log(), mostrando todos os dados de 
cada um dos itens criados até aqui

  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"]

console.log(`
${modelo1.toUpperCase()}
Valor: R$${valor1}
O Carro é 0Km? ${km1}
Suas cores são: ${cores1}

${modelo2.toUpperCase()}
Valor: R$${valor2}
O Carro é 0Km? ${km2}
Suas cores são: ${cores2}

${modelo3.toUpperCase()}
Valor: R$${valor3}
O Carro é 0Km? ${km3}
Suas cores são: ${cores3}`)

Semana 2

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


carro1 = {
modelo1: "Chevrolet Onix 1.0 MT",
valor1: 78.699,
km1: true,
cores1: ["Preto", "Branco", "Cinza", "Prata", "Azul"]
}

carro2 = {
modelo2: "Hyundai HB20 Sense 1.0",
valor2: 76.699,
km2: true,
cores2: ["Preto", "Prata", "Branco", "Cinza"]
}

carro3 = {
modelo3: "Renault Logan Authentique Flex 1.0 2018",
valor3: 46.367,
km3: false,
cores3: ["Preto", "Prata", "Branco", "Vermelho"]
}


//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const carros = []


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

//carros.push(carro1, carro2, carro3)

//console.log(carros)

/*4. Altere o item “Adicione os novos objetos no array de objetos, 
utilizando o push()” (item 3), para criar uma verificação antes de dar o push. 
A caraterística booleana do objeto deve ser validada. 
Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

5. Crie uma condição else, que, em caso de valor false na condição acima, 
exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push*/

if(carro1.km1) {
  carros.push(carro1)
  alert(`${carro1.modelo1} foi adicionado ao array`)
}else {
  alert(`${carro1.modelo1} não foi adicionado ao array`)
}

if(carro2.km2) {
  carros.push(carro2)
  alert(`${carro2.modelo2} foi adicionado ao array`)
}else {
  alert(`${carro2.modelo2} não foi adicionado ao array`)
}

if(carro3.km3) {
  carros.push(carro3)
  alert(`${carro3.modelo3} foi adicionado ao array`)
}else {
  alert(`${carro3.modelo3} não foi adicionado ao array`)
}

