
//colocar todo o codigo aqui
window.onload=function(){
    
let myP=document.getElementById("myP")
myP.innerHTML="bem vindo a minha pagina"

let myBtn=this.document.getElementById("myBtn")

myBtn.addEventListener("click",function(){

    let txt=document.getElementById("myTxt")

    if (txt.value=="") {
        myP.innerHTML="bem vindo a minha pagina"
       
    }else{
        myP.innerHTML="bem vindo, "+txt.value
    }
  
})
}

// criar listeners para o botao todas
let btnTodas=document.getElementById("btnTodas")
btnTodas.addEventListener("click",function(){

    let btns=document.getElementsByTagName("input")

    for (let i = 0; i < btns.length;i ++) {
       btns[i].style.backgroundColor="red"
    }


})