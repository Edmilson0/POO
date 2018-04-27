window.onload=function(){

let btn=document.getElementById("btnAdicionar")


btn.addEventListener("click",function(){

    function atualizaTabela() {
        let tabela = document.getElementById("myTable")
        let str = tabela.value
        let array=[str]

        console.log(str)

        //str = "<thead class='thead-dark'><tr><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th><th>ACÕES</th></tr></thead><tbody>"
        for (let i = 0; i < str.length; i++) {
            str += "<tr>"        
            str += "<td>" +str+ "</td>"
            str += "<td>" +str  + "</td>"
            str += "<td>" + str + "</td>"
           // str += "<td><a href='#' class='remove'><i class='fa fa-trash-o'></i></a></td>"
            str +="</tr>"
        }
        str += "<tbody>"
       
    }
})


}