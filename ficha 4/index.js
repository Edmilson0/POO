let student = {
    name: "David silva",
    course: "poo",
    grade: 12
}
let student1 = Object.create(student)

let grades = [
    {
        name: 'Rui',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }]
let grade1 = Object.create(grades)

function carros(marca,matricula,cor,combustivel,tipo_combustivel) {
    this.marca=marca
    this.matricula=matricula
    this.cor=cor
    this.combustivel=combustivel
    this.tipo=tipo_combustivel
    

}

 let car=[]


function show(texto) {
    let meu_texto = document.querySelector("#txtresult")
    meu_texto.innerHTML += texto
}

function funcAI() {
    let propriedades = ""

    for (const x in student) {
        propriedades = propriedades + x + " "


    }
    show(propriedades)
}
//alinea AII
function funcAII() {
    let propriedades = ""
    let propriedades2 = ""

    for (const x in student) {
        propriedades = propriedades + x + " " + student[x] + "\n"
    }

    show(propriedades)

    delete student.grade

    for (const x in student) {
        propriedades2 = propriedades2 + x + " " + student[x] + "\n"
    }
    show(propriedades2)

}
//alinea AIII
function funcAIII() {

    let quantidade = 0

    for (const x in student) {

        quantidade++
    }

    show(quantidade)

}
//alinea BI
function funcBI() {

    let nome = prompt("escreva o seu nome")
    let nota = parseInt(prompt("escreva a sua nota"))

    let informação = {
        name: nome,
        grade: nota
    }


    grades.push(informação)

    /*let grades2 = ""
    for (let i = 0; i < grades.length; i++) {
        for (const x in grades) {
            console.log(grades[i])
            //grades2=grades2+x+" "+grades[x]+"\n"
        }
    }*/
    let result = ""
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].name) {
            result +=grades[i].name + " " + grades[i].grade + "\n";
        }
    }

    console.log(result)

    show(result)
    //console.log(grades2)

}
//alinea BII
function funcBII() {

    let quantidade = 0

    let result = 0
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade) {
            result +=grades[i].grade;
        }
    }
    let media=result/grades.length

    show(media)

}
//alinea BIII
function funcBIII() {

   

    let result = ""
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade>=10) {
            result+=grades[i].name+"\n"
        }
    }
    

    show(result)

}
//alinea CI
function funcCI() {

    let carro1=new carros("Ford", "91-GH-15", "verde", 40, "Gasóleo" )

    let carro2=new carros("Opel", "23-AB-23", "branco", 50, "Gasolina" )
    car.push(carro1)
    car.push(carro2)

    let result = ""
    for (let i = 0; i < car.length; i++) {
        if (car[i].marca) {
            result +=car[i].marca + " " + car[i].matricula +" " + car[i].cor +" " + car[i].combustivel +" " + car[i].tipo + "\n";
        }
    }
    
    show(result)
    console.log(car)
}

//alinea CII
function funcCII() {

    let cor = prompt("escreva a cor")

    let info={
        color:cor
    }
    
    
    show(result)

}




