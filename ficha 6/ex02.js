window.onload=function(){

    //botão CAMPUS1
    let btn1=document.getElementById("CAMPUS1")

    btn1.addEventListener("click",function(){
    
        let btns1=document.getElementsByClassName("campus1")
        let btns2=document.getElementsByClassName("campus2")
        let btns3=document.getElementsByClassName("campus3")
    
        for (let i = 0; i < btns1.length; i++) {
          btns1[i].style.backgroundColor="green"
        }
        for (let i = 0; i < btns2.length; i++) {
           
            btns2[i].style.visibility='hidden'
           
        }
        for (let i = 0; i < btns3.length; i++) {
            btns3[i].style.visibility='hidden'
        }
    
    })

     //botão CAMPUS2

     let btn2=document.getElementById("CAMPUS2")

     btn2.addEventListener("click",function(){

        btns2=document.getElementsByClassName("campus2")
        let btns1=document.getElementsByClassName("campus1")
        let btns3=document.getElementsByClassName("campus3")

        for (let i = 0; i < btns2.length; i++) {
            
            btns2[i].style.backgroundColor="green"
        }
        for (let i = 0; i < btns1.length; i++) {
           
            btns1[i].style.visibility='hidden'
           
        }
        for (let i = 0; i < btns3.length; i++) {
            btns3[i].style.visibility='hidden'
        }
     })

      //botão CAMPUS3

      let btn3=document.getElementById("CAMPUS3")

      btn3.addEventListener("click",function(){

        let btns1=document.getElementsByClassName("campus1")
        let btns2=document.getElementsByClassName("campus2")
 
         btns3=document.getElementsByClassName("campus3")
 
         for (let i = 0; i < btns3.length; i++) {
             
             btns3[i].style.backgroundColor="green"
         }
         for (let i = 0; i < btns2.length; i++) {
            
            btns2[i].style.visibility='hidden'
        }
        for (let i = 0; i < btns1.length; i++) {
           
            btns1[i].style.visibility='hidden'
           
        }
      })

       //botão TODAS

       let todas=document.getElementById("TODAS")

       todas.addEventListener("click",function(){
  
          btnsT=document.getElementsByTagName("input")
  
          for (let i = 0; i < btnsT.length; i++) {
              
              btnsT[i].style.backgroundColor="green"
          }
       })

}
