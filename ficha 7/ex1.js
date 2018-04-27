

window.onload=function(){

    let mySu=document.getElementById("mySubmit")
    
    let myEm=document.getElementById("myEmail")
    let myPa=document.getElementById("myPass")

    mySu.addEventListener("click", function(event){
      
        alert(myEm.value+"#"+myPa.value)
        event.preventDefault()
       
      
    })
    let myLi=document.getElementById("myLimpar")

    myLi.addEventListener("click", function(){
    
        myEm.focus()
      
    })
   

}
