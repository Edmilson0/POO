function funcA() {

    let string = prompt("Digite uma frase")
    let palavra = string[0] + string[string.length - 1];

    for (let i = 1; i < string.length - 1; i++) {

        palavra += string[i];

    }
    console.log(palavra)
}

function funcB() {
    let N = parseInt(prompt("Digite o tamanho do array"))
    let array = []
    let arrayString = []
    let arrayFinal = []
    var cont = 0;

    for (let i = 0; i < N; i++) {
        array[i] = parseInt(prompt("Digite os numeros do array"))
    }
    for (let i = 0; i < N; i++) {
        arrayString[i] = prompt("Digite as letras do array")
    }

    

    for (let i = 0; i < array.length; i++) {
        let x = array[i]
        for (let j = 0; j < x; j++) {
            arrayFinal.push(arrayString[j])
        }

    }
    arrayFinal.sort()
    console.log(arrayFinal)
}