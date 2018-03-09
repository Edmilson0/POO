// alinea A
function funcA() {
    console.log("ola mundo")
}

// alinea B
function funcB() {
    let name = "ricardo"
    console.log("ola" + name + "!")
}

// alinea c
function funcC() {
    let lado = prompt("escreva o comprimento do primeiro lado")
    let lado1 = prompt("escreva o comprimento do segundo lado")
    let area = areaRetangulo(lado, lado1)

    console.log("a area do retangulo é " + area)

    console.log()
}

function areaRetangulo(lado, lado1) {
    return lado * lado1;
}
// alinea d
function funcD() {
    let num1 = parseInt(prompt("escreva o 1º numero"))
    let num2 = parseInt(prompt("escreva o 2º numero"))
    let oper = prompt("digite o operador")
    let result = 0
    //console.log(oper)

    switch (oper) {
        case "+": result = num1 + num2; break
        case "-": result = num1 - num2; break
        case "*": result = num1 * num2; break
        case "/": result = num1 / num2; break
        default: console.log("o resultado é invalido")
    }
    //return result;
    if (result != undefined) {
        console.log("o resultado é " + result)
    }

   

    
   
}
// alinea E
function funcE() {
    let peso = parseInt(prompt("escreva o seu peso em kg"))
    let altura = parseInt(prompt("escreva a sua altura em metros"))

    let imc= ((peso)/(altura*altura))

    if (imc<18.5) {
        console.log("abaixo do peso "+imc )
    }
    else if (imc>=18.5&&imc<24.9) {
        console.log("peso normal "+imc )
    }
    else if (imc>=24.9&&imc<=29.9) {
        console.log("sobre peso "+imc )
    }
    else if (imc>=30&&imc<=34.9) {
        console.log("obesidade de grau 1 "+imc )
    }
    else if (imc>=35&&imc<=39.9) {
        console.log("obesidade de grau 2 "+imc )
    }
    else{
        console.log("obesidade de grau 3 "+imc )
    }
}
// alinea G
function funcG(){
    let numero1 = parseInt(prompt("escreva um numero"))
    let numero2 = parseInt(prompt("escreva outro numero"))

    for (var index = numero1 + 1 ; index <numero2; index++) {
        
      console.log(index)
    }
}
// alinea F
function funcF(){
    let letra = (prompt("escreva uma letra"))
    let numero = parseInt(prompt("escreva um numero"))

    for (var index = 0; index < numero; index++) {
       
        console.log(letra)
    }
}
// alinea H
function funcH(){
  
    let numero = parseInt(prompt("escreva um numero"))
    let tabela=0
    for (var index = 1; index <= 10; index++) {
      console.log(numero+"*"+index+"="+numero*index)
    }
   
}
// alinea I
function funcI(){
    
      let numero = parseInt(prompt("escreva um numero"))
      let numero2 = parseInt(prompt("escreva um segundo numero"))
      let soma=0

      for (var index = numero+1; index < numero2; index++) {
        console.log(soma=soma+(3*index)) 

      }
  }
  // alinea J
function funcJ(){
    
      let numero = parseInt(prompt("escreva um numero"))
    let cont=0
      for (var index = 1; index <= numero; index++) {

        if (numero%index==0) {
          cont++
        }
      
      }
      if (cont==2) {
        console.log("sim o numero é primo")
    }
    else{
        console.log("não o numero não é primo")
    }
     
    
  }
  // alinea K
function funcK(){
    
      let numero = parseInt(prompt("escreva um numero para calcular o seu fatoriAL"))
     
      let fatorial=1

      for (var index = numero; index > 0; index--) {
        console.log(fatorial=fatorial*index) 
      }
     
  }
   // alinea L
function funcL(){
    
      let numero = parseInt(prompt("escreva um numero para calcular o seu fatoriAL"))
        let soma=0

      for (var index = 1; index < numero; index++) {

          if (numero%index==0) {

              soma=soma+index
              console.log(index)
          }

         
      }
      if (soma==numero) {
        console.log("o numero é perfeito")
        
    }
    else{
      console.log("o numero ñ é perfeito")
    }
     
  }
   // alinea M
function funcM(){
    
      let numero = parseInt(prompt("escreva um numero para ver se é bissesto"))
     
    if (numero%400==0 || numero%100 !=0 && numero%4 == 0 ) {
        console.log("o numero é bissexto")
    }
     else{
        console.log("o numero ñ é bissexto")
     }
  }

     // alinea N
function funcN(){
    
      let numero = parseInt(prompt("escreva um numero entre 100 e 999"))
     
      
        if ((numero.charAt(0))==(numero.charAt(2))) {
            console.log("o numero é uma capicua")
        }
        else{
            console.log("o numero ñ é uma capicua")
        }
  }

