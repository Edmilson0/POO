class Personality {
    constructor(name, year, nationality, work, photo) {

        this.name = name
        this.year = year
        this.nationality = nationality
        this.work = work
        this.photo = photo
    }

    //propriety nname
    get name() {
        return this._name
    }

    set name(newName) {

        this._name = newName
    }
    //propriety year
    get year() {
        return this._year
    }

    set year(newYear) {

        this._year = newYear
    }
    //propriety nationality
    get nationality() {
        return this._nationality
    }

    set nationality(newNationality) {

        this._nationality = newNationality
    }
    //propriety work
    get work() {
        return this._work
    }

    set work(newWork) {

        this._work = newWork
    }
    //propriety photo
    get photo() {
        return this._photo
    }

    set photo(newPhoto) {

        this._photo = newPhoto
    }

}


window.onload = function () {
    let array = []


    let frm = document.getElementById("frmPersonalities")
    let btnSub=document.getElementById("btnSub")

    frm.addEventListener("submit", function (event) {


        let nome = document.getElementById("inputName").value
        let yearr = document.getElementById("inputYear").value
        let natio = document.getElementById("inputNationality").value
        let mainWork = document.getElementById("inputWork").value
        let photo = document.getElementById("inputPhoto").value
        let personality = new Personality(nome, yearr, natio, mainWork, photo)

        array.push(personality)
     

       

        console.log("array")


        renderTable()
        event.preventDefault()

    })



    function renderTable() {
        let tblPersonalities = document.getElementById("tblPersonalities")

        let strHtml = "<thead><tr><th >#</th>" +
            "<th>Name</th>" +
            "<th>Year</th>" +
            "<th>Nationality</th>" +
            "<th>Work</th>" +
            "<th>Photo</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < array.length; i++) {
            strHtml += "<tr>" +
                "<th>" + (i + 1) + "</th>" +
                "<td>" + array[i].name + "</td>" +
                "<td>" + array[i].year + "</td>" +
                "<td>" + array[i].nationality + "</td>" +
                "<td>" +  array[i].work + "</td>" +
                "<td>" + array[i].photo + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblPersonalities.innerHTML = strHtml



    }

}