function show(texto) {
    let meu_texto = document.querySelector("#txtresult")
    meu_texto.innerHTML = texto
}

function funcA() {
    let ola = "ola mundo"
    console.log(ola)

}
function funcB() {
    let nome = "iaca"
    console.log("ola " + nome)

}

function funcC() {
    let lado1 = prompt("escreva um numero-lado1")
    let lado2 = prompt("escreva um numero-lado2")

    let Area = area(lado1, lado2)
    console.log(Area)

}
function area(lado1, lado2) {
    return lado1 * lado2
}

function funcD() {
    let num1 = parseInt(prompt("escreva um numero"))
    let num2 = parseInt(prompt("escreva um numero"))
    let opera = prompt("escreva uma operação a usar")

    switch (opera) {
        case "+": console.log(num1 + num2)

            break;
        case "-": console.log(num1 - num2)

            break;
        case "*": console.log(num1 * num2)

            break;
        case "/": console.log(num1 / num2)

            break;

        default:
            console.log("valor invalido")
            break;
    }

}

function funcE() {
    let peso = parseInt(prompt("escreva o seu peso"))
    let altura = parseInt(prompt("escreva a sua altura"))

    let imc = ((peso) / (altura * altura))

    console.log(imc)

}

function funcG() {
    let a = prompt("escreva um numero")
    let b = prompt("escreva um outro numero")


    for (let i = a; i < b; i++) {
        console.log(i)
    }

}

function funcH() {
    let a = prompt("escreva um numero")


    for (let i = 0; i <= 10; i++) {


        console.log(a + "*" + i + "=" + a * i)
    }

}

function funcI() {
    let a =parseInt(prompt("escreva um numero")) 
    let b=parseInt(prompt("esreva um outro numero"))
    let soma=0 

    for (let i = a; i <=b; i++) {

        if (i%3==0) {
            soma=soma+i
           
        }
     
    }
    console.log(soma)
    
}

function funcJ() {
    let a = prompt("escreva um numero")
    let cont=0
  
    for (let i = 1; i <=a; i++) {
        if (a%i==0) {
            cont++
          
        }
      
    }
    if (cont<=2) {
            console.log("sim")
    }
    else{
        console.log("não")
    }

}

function funcK() {
    let a = prompt("escreva um numero")
    let fat=1

    for (let i = a; i >= 1; i--) {
        fat=fat*i

      
    }
    console.log(fat)

}

function funcL() {
    let a = prompt("escreva um numero")
    let fat=1

    for (let i = a; i >= 1; i--) {
        fat=fat*i

      
    }
    console.log(fat)

}