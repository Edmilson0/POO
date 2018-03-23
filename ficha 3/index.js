function show(texto) {
    let meu_texto=document.querySelector("#txtresult")
    meu_texto.innerHTML=texto
}
//alinea A
function funcA(){
    let palavra=prompt("escreva uma palavra")

    let numero_de_elementos=string(palavra)
    show(numero_de_elementos)
}

function string(palavra){

    let numero_de_string=palavra.length

  
    return(numero_de_string)
}
//alinea B
function funcB(){
    let nome=prompt("escreva um nome")
    let apelido=prompt("escreva um apelido")

    show(apelido+','+nome)
}
//alinea C
function funcC(){
    let palavra=prompt("escreva uma palavra")
   
    let numero_de_vogais=calcular_vogais(palavra)
   show(numero_de_vogais)
}
function calcular_vogais(palavra){
    let quantiadde=0

    for (let i = 0; i < palavra.length; i++) {
       
        if (palavra[i]=='a'||palavra[i]=='A'||palavra[i]=='e'||palavra[i]=='E'||palavra[i]=='i'||palavra[i]=='I'||palavra[i]=='o'||palavra[i]=='O'||palavra[i]=='u'||palavra[i]=='U') {
            quantiadde++
        }
    }
    return(quantiadde)
}
//alinea D
function funcD(){
    let frase=prompt("escreva uma frase")
   let numero=numero_de_palavras(frase)
   
   show(numero+1)
}
function numero_de_palavras(frase){
    let quantiadde=0

    for (let i = 0; i < frase.length; i++) {
       
      if (frase[i]==" ") {
          quantiadde++
      }
    }
    return(quantiadde)
}
//alinea E
function funcE(){
    let frase=prompt("escreva uma frase")
   let nova_frase=invertido(frase)
   
   show(nova_frase)
}
function invertido(frase){
   let new_fraco=""

    for (let i = frase.length; i >=0; i--) {
       new_fraco=new_fraco+frase[i]
     
    }
    return(new_fraco)
}
//alinea F
function funcF(){
    let frase=prompt("escreva uma frase")
    let carater=prompt("escreva uma caracter")

   let vezes2=caracter(frase,carater)
   
   show(vezes2)
}
function caracter(frase,carater){
   let vezes=0

    for (let i = 0; i < frase.length; i++) {
      if (frase[i]==carater) {
          vezes++
      }
     
    }
    return(vezes)
}
//alinea G
function funcG(){
    let frase=prompt("escreva uma frase")
    let numero=3

   let new_texto=codigo_cesar(frase,numero)
   
   show(new_texto)
}
function codigo_cesar(frase,numero){
    let texto_final=""

    for (let i = 0; i < frase.length; i++) {
     let code=parseInt(frase[i])
     code=code+numero
        texto_final=texto_final+ code.toString()
    }
    return(texto_final)
}