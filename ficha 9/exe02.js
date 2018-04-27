class Games {
    constructor(nome, genero, plataforma, photo) {
        this.nome = nome
        this._genero = genero
        this._plataforma = plataforma
        this._photo = photo
    }

    //propriedade do nome

    get nome() {
        return this._nome
    }
    set nome(newName) {
        return this._nome = newName
    }

    //propriedade do genero

    get genero() {
        return this._genero
    }
    set genero(newGenero) {
        return this._genero = newGenero
    }

    //propriedade do plataforma
    get plataforma() {
        return this._plataforma
    }
    set plataforma(newPlataforma) {
        return this._plataforma = newPlataforma
    }

    //propriedade do photo
    get photo() {
        return this._photo
    }
    set photo(newphoto) {
        return this._photo = newphoto
    }

}
window.onload = function () {

    let frm = document.getElementById("frmPersonalities")

    let name = document.getElementById("inputName")
    let generoo = document.getElementById("myGenero")
    let plataform = document.getElementsByClassName("form-check-input")
    let foto = document.getElementById("myUrl")

    frm.addEventListener("submit", function (event) {

        let platforms = []


        let cont = 0

        //verefica se tem algum check box selecionado
        for (let i = 0; i < plataform.length; i++) {

            if (plataform[i].checked == true) {
            
             platforms.push(plataform[i].value)
               cont ++

            }
          
           
        }
        if (cont<1) {
            alert("escolha pelo menos uma plat...")
            event.preventDefault()
        }

        
       

    })
}