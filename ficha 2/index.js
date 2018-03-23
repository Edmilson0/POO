
function show(texto) {
    let meu_texto=document.querySelector("#txtresult")
    meu_texto.innerHTML=texto
}


// alinea A
function funcA() {
    console.log("merda")

    let array_numerico = [7, 3, 6, 12, 5]
   let media=medias(array_numerico)

   show(media)

}
function medias(array_numerico){
    let soma = 0;
    let media1=0
    for (let index = 0; index < array_numerico.length; index++) {
        soma = soma + array_numerico[index]
    }
    media1=soma/array_numerico.length
    return(media1)

}

// alinea B
function funcB(){
    let array_numerico = [7, 3, 6, 12, 5]
    let maior=array_numerico[0]

    for (let index = 0; index < array_numerico.length; index++) {
        

      if (maior<=array_numerico[index]) {
        maior =array_numerico[index]
      }
    
    }

    console.log(parseInt( maior))
}
// alinea C
function funcC(){

    let numero=parseInt(prompt("escreva um numero"))
    let array_numerico = [7, 3, 6, 12, 5]
    let new_array=[]

    for (let index = 0; index < array_numerico.length; index++) {
       if (numero!=array_numerico[index]) {
           new_array.push(array_numerico[index])
       }
    }

    for (let index = 0; index < new_array.length; index++) {
       console.log(new_array[index])
    }
   
}
// alinea D
function funcD(){
    let array=["vermelho","verde","branco","preto"]
    let palavras="";

    for (let index = 0; index < array.length; index++) {
    palavras=palavras+array[index]
    }
    console.log(palavras)
}
// alinea E
function funcE(){
    let array=["vermelho","verde","branco","preto"]
    
    array.sort()

    for (let index = 0; index < array.length; index++) {
        console.log(array[index])
    }
}
// alinea F
function funcF(){

    let array=["vermelho","verde","branco","preto"]
    
    for (let index = array.length; index >=0; index--) {
        console.log(array[index])
    }
}
// alinea H
function funcH(){
    
    let array=["vermelho","verde","branco","preto"]
    let parlavra=prompt("escreva uma cor")
    let contador=0
    
    for (let index = 0; index <array.length; index++) {
        
        if (parlavra==array[index]) {
            contador++
        }
       
    }
    console.log(contador)
}
// alinea G
function funcG(){
    
    let array=["asi","verde","branco","preto"]
    let maior=array[0]
    
    
    for (let index = 0; index <array.length; index++) {
        
        if (maior.length<array[index].length) {
            maior=array[index]
        }
       
       
    }
    console.log(maior)
}
// alinea I
function funcI(){
    
    let confirmação=["assi","verde"]
    let password=["vermelho","verde"]
    
    for (let index = 0; index < confirmação.length; index++) {
       
        if (confirmação[index]==password[index]) {
            console.log("1")
        }
        else{
            console.log("0")
        }
    }
   
   
}
// alinea J
function funcJ(){
    
    let confirmação=["vermelho","verde","branco","preto"]
  

    let p=parseInt(prompt("escreva um numero"))
    
   let elemento_do_array=confirmação[p]
   console.log(elemento_do_array)
   
}
// alinea K
function funcK(){
    
    let confirmação=[1,2,3,4,5,6,7,8,9]
  

    let p=parseInt(prompt("escreva um numero"))
    
    for (let index = 0; index < confirmação.length; index++) {
       
        if (p<confirmação[index]) {
            console.log(confirmação[index])
        }
    }
  
}
// alinea L
function funcL(){
    
    let confirmação=[1,2,3,4,5,6,7,8,9]
  
    
    for (let index = 0; index < confirmação.length; index++) {
       
        if (confirmação[index]%2==0) {
            console.log(confirmação[index])
        }
    }
  
}
// alinea M
function funcM(){
    
    let numbers=[1,2,3,4,5,6,7,8,9]
    let new_array=incrementa(numbers)
    show(new_array)
  
}

function incrementa(numeros) {
     let novo_array=[]
    
    for (let index = 0; index < numeros.length; index++) {
       
      novo_array.push(numeros[index]+1)
    }

    return(novo_array)
}
// alinea N
function funcN(){
    
    let numeros1=[1,2,3,4,5,6,7,8,9]
    let numeros2=[1,2,3,4,5,6,7,8,9]

    let novo_array=soma(numeros1,numeros2)
    show(novo_array)
  
}

function soma(numeros, numeros2) {
     let novo_array=[]

    for (let index = 0; index < numeros.length; index++) {
       
      novo_array.push(numeros[index]+numeros2[index])
      
    }

    return(novo_array)
}

