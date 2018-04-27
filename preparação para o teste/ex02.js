function show(texto) {
    let meu_texto = document.querySelector("#txtresult")
    meu_texto.innerHTML = texto
}

function funcA(){
    let array=[]
    let soma=0
    let media=0

    for (let i = 0; i < 5; i++) {
       array[i]=parseInt(prompt("escreva os numeros"))
    }

    for (let i = 0; i < array.length; i++) {
      soma=soma+array[i]
    }
    media=soma/array.length

  show(media)
}

function funcB(){
    let array=[]
    let menor=0
    let media=0

    for (let i = 0; i < 5; i++) {
       array[i]=parseInt(prompt("escreva os numeros"))
    }
    menor=array[0]

    for (let i = 0; i < array.length; i++) {
        if (menor>=array[i]) {
            menor=array[i]
        }
      
        
    }

     show(menor)

}

function funcC(){
    let array=[]
    let novoArray=[]

    let numero=parseInt(prompt("escreva um numero"))
   

    for (let i = 0; i < 5; i++) {
       array[i]=parseInt(prompt("escreva os numeros"))
    }
   

    for (let i = 0; i < array.length; i++) {
      if (numero!=array[i]) {
       novoArray.push(array[i])
      }
        
    }
    show(novoArray)

}

function funcD(){
    let string= ["Vermelho", "Verde", "Branco", "Preto"] 
    let pal=""

    for (let i = 0; i <string.length; i++) {
       pal=pal+string[i]
        
    }
    show(pal)
}

function funcE(){
    let string= ["Vermelho", "Verde", "Branco", "Preto"] 
   
    string.sort()
    
    show(string)
}

function funcE(){
    let string= ["Vermelho", "Verde", "Branco", "Preto"] 
   
    string.sort()
    
    show(string)
}