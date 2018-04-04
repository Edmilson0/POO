

window.onload=function(){

    let mySu=document.getElementById("mySubmit")

    mySu.addEventListener("submit", function(){

        let myEm=document.getElementById("myEmail")
        let myPa=document.getElementById("myPass")
       
        alert(myEm.value+"#"+myPa.value)
    })

    let myLi=document.getElementById("myLimpar")

    myLi.addEventListener("reset", function(){

        let myEm=document.getElementById("myEmail").value=""
        let myPa=document.getElementById("myPass").value=""
      
    })

}