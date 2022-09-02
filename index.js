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

//const carro = "Modelo do carro"
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
const verificouEmail3 = true;*/

const carro1 = "Chevrolet Onix 1.0 MT"
const valor1 = 78.699
const km1 = true
const cores1 = ["Preto", "Branco", "Cinza", "Prata", "Azul"]

const carro2 = "Hyundai HB20 Sense 1.0"
const valor2 = 76.699
const km2 = true
const cores2 = ["Preto", "Prata", "Branco", "Cinza"]

const carro3 = "Renault Logan Authentique Flex 1.0 2018"
const valor3 = 46.367
const km3 = false
const cores3 = ["Preto", "Prata", "Branco", "Vermelho"]

/*3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
💡A média deve ser igual à soma dos itens, dividida pelo total de itens.*/

const media = ((valor1 + valor2 + valor3)/3)
console.log(media) //67.255


/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se 
todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
💡 Exemplo
const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
console.log(verificaEmails);
// nesse caso, vai imprimir false, pois verificouEmail1 === false*/

const kms = Boolean(km1 & km2 & km3)
console.log(kms) //false


/*5. Crie pelo menos mais uma característica para o item que você criou. 
Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, 
isto é, se é um array de strings, só deve receber strings.
const nome; //string
const idade; //number
const verificouEmail; //boolean
const projetos; //array de strings*/



/*6. Exiba um relatório utilizando console.log(), mostrando todos os dados de 
cada um dos itens criados até aqui

  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] */

console.log(`
${carro1.toUpperCase()}
Valor: R$${valor1}
O Carro é 0Km? ${km1}
Suas cores são: ${cores1}

${carro2.toUpperCase()}
Valor: R$${valor2}
O Carro é 0Km? ${km2}
Suas cores são: ${cores2}

${carro1.toUpperCase()}
Valor: R$${valor3}
O Carro é 0Km? ${km3}
Suas cores são: ${cores3}`)