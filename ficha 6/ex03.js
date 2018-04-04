let array=[]

    class Filmes {
        constructor(titulo,ano,genero){
            this.titulo=titulo
            this.ano=ano
            this.genero=genero

        }
         // Propriedade TITULO
    get titulo() {
        return this._titulo
    }

    set titulo(titulo) {

        if (titulo=="") {
            console.log("titulo n ident")
           
            return this._titulo="erro"
        }

        this._titulo = titulo
    }

     // Propriedade ANO
     get ano() {
        return this._ano
    }
    set ano(ano) {
        this._ano = ano
    }
    // Propriedade GENERO
    get genero() {
        return this._genero
    }
    set genero(genero) {
        this._genero = genero
    }

    }
    

window.onload=function(){

    let boton=document.getElementById("mybtn")  

    boton.addEventListener("click",function(){

        let mytitulo=document.getElementById("myTxt")
        let myano=document.getElementById("mynumber")
        let myselect=document.getElementById("generos")

        let filmes = new Filmes(mytitulo.value,myano.value,myselect.value)
        array.push(filmes)

        let colunaTitulo=document.getElementById("titulo")
        let colunaGenero=document.getElementById("genero")
        let colunaAno=document.getElementById("ano")

        let tabelaTitulo=""
        let tabelaAno=""
        let tabelaGenero=""

       // Atualiza a tabela com os dados de todos os filmes
       atualizaTabela()

       // Previne do form não ser submetido (isso faria com que a página fizesse um refresh)
       event.preventDefault()
      
    })


}
 
    // Função que atualiza a tabela com os dados de todos os filmes no array
    function atualizaTabela() {
        let tabelaFilmes = document.getElementById("tabela")
        let str = ""
        str = "<thead class='thead-dark'><tr><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th><th>ACÕES</th></tr></thead><tbody>"
        for (let i = 0; i < array.length; i++) {
            str += "<tr>"        
            str += "<td>" + array[i].titulo + "</td>"
            str += "<td>" + array[i].ano + "</td>"
            str += "<td>" + array[i].genero + "</td>"
            str += "<td><a href='#' class='remove'><i class='fa fa-trash-o'></i></a></td>"
            str +="</tr>"
        }
        str += "<tbody>"
        tabelaFilmes.innerHTML = str
    
        // Obtem todos os <td> da tabela (coluna com o ícone de remoção)
        let Remove = document.getElementsByClassName("remove")
        // Para cada um deles adiciona um listener para o evento clique
        for (let i = 0; i < Remove.length; i++) {
            Remove[i].addEventListener("click", function() {
                // Ao clicar num determinado filme, remove-o do array
                filmes.splice(i, 1)
                // Atualiza de novo a tabela
                atualizaTabela()
            })        
        }
    }