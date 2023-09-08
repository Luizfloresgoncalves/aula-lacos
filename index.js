//exercicio de interpretacao de codigo
//1. o codigo vai somando cada indice em que passa ate o indice 4 ,resultando 10

// 2. 
//a. ele imprime todos os numeros da lista que são maiores que 18 
//b. não é possivel

//3. vai aparecer *,**,***,**** 

//exercicio escrita de código
/*1.
const pets = prompt("Quantos pets vc tem?")
let nomes = []
if (pets <= 0) {
    console.log("Que pena! Você pode adotar um pet!")
}else {
    for(let i = 0 ;i < pets; i++ ){
    nomes [i] = prompt("Digite o nome dele()")
}
}
  for(let i = 0 ; i < pets ; i++) {
   console.log(`O nome dele é : ${nomes[i]}`)
  }
*/

//exer 2
//a.
/*const arrayOriginal = [6, 9, 13, 16, 18, 21]
const numerosArrays = (arrayOriginal) =>{
for (let i = 0; i < arrayOriginal.length ; i++) { 
    console.log(`O número é: ${arrayOriginal[i]}`)
}
}
numerosArrays(arrayOriginal)

//b.
const divisao = (arrayOriginal) => {
for (let i = 0 ; i < arrayOriginal.length; i++){
    const retorno = arrayOriginal[i] / 10
    console.log(`O resultado é: ${retorno}`)
}
}
divisao(arrayOriginal)

//c.
const numerosPares = (arrayOriginal) => {
let pares = []
for (let i = 0 ; i < arrayOriginal.length; i++){
   const retorno = Number(arrayOriginal[i]) % 2 === 0
   if(retorno){
    pares.push(arrayOriginal[i])
   }
}
console.log(pares)
}
numerosPares(arrayOriginal)

//d.
const elementoIndex = (arrayOriginal) => {
let  strings= []
for (let i = 0 ; i < arrayOriginal.length; i++){
   const frase = `Elemento do index ${i} é: ${arrayOriginal[i]}`
    strings.push(frase)
}
console.log(strings)
}
elementoIndex(arrayOriginal)
*/
/*e.
const devolveMaiorMenor = (arrayOriginal) => {
  let maiorNumero = 0
  let menorNumero = arrayOriginal[0]
for (let i = 0; i < arrayOriginal.length; i++) {

  if (menorNumero > arrayOriginal[i]) {
    menorNumero = arrayOriginal[i]
  }else if(maiorNumero < arrayOriginal[i]) {
    maiorNumero = arrayOriginal[i]
}
}
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
}
devolveMaiorMenor(arrayOriginal)
*/