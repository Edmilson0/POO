window.onload=function(){

    let mySu=document.getElementById("mySubmit")

    mySu.addEventListener("click", function(){

       let nome=document.getElementById("myNome")
       let telemovel=document.getElementById("myTel")
       let email=document.getElementById("myEmail")
       let user=document.getElementById("myUser")
       let pass=document.getElementById("mypass")
       let conf=document.getElementById("myCpass")

       if (nome.value!="" && conf.value==pass.value) {
        alert("registo feito com secesso")
       }
       else{
        alert("Erro")
       }
       
      
    })
    
}