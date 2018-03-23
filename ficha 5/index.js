function show(texto) {
    let meu_texto = document.querySelector("#txtresult")
    meu_texto.innerHTML = texto
}



//alinea 1A
function funcA() {
    class Retangulo {
        constructor(larguras, alturas) {
            this._largura = larguras,
                this._altura = alturas
        }

        get larguras() {
            return this._largura
        }
        get alturas() {
            return this._altura
        }

    }
    let retangulo = new Retangulo(1, 1)

    show("valor da altura: " + retangulo.alturas + "\n" + "valor da largura: " + retangulo.larguras)

}
//alinea 1B
function funcB() {
    class Retangulo {
        constructor(larguras, alturas, cores) {
            this._largura = larguras,
                this._altura = alturas
            this._cor = cores
        }

        get larguras() {
            return this._largura
        }
        get alturas() {
            return this._altura
        }
        get cores() {
            return this._cor
        }

    }
    let retangulo = new Retangulo(1, 1, "branco")

    show("valor da altura: " + retangulo.alturas + "\n" + "valor da largura: " + retangulo.larguras + "\n" + retangulo.cores)

}
//alinea 1CI
function funcCI() {
    let larg = parseInt(prompt("escreva a largura do triangulo"))
    let alt = parseInt(prompt("escreva a altura do triangulo"))

    class Retangulo {
        constructor(larguras, alturas) {
            this._largura = larguras,
                this._altura = alturas

        }

        get larguras() {
            return this._largura
        }
        get alturas() {
            return this._altura
        }


    }
    let retangulo = new Retangulo(larg, alt)

    show("valor da altura: " + retangulo.alturas + "\n" + "valor da altura: " + retangulo.larguras)

}
//alinea 1CII
function funcCII() {
    let larg = parseInt(prompt("escreva a largura"))
    let alt = parseInt(prompt("esreva a altura "))

    class Retangulo {
        constructor(larguras, alturas) {
            this.largura = larguras,
                this.altura = alturas

        }
        get larguras() {
            return this._largura
        }
        get alturas() {
            return this._altura
        }


        set altura(alt) {
            if (alt == 1) {

                return this._altura = alt
            }


        }
        set largura(larg) {
            if (larg == 1) {
                return this._largura = larg
            }

        }


    }
    let retangulo = new Retangulo(larg, alt)

    show("valor da altura: " + retangulo.alturas + "\n" + "valor da altura: " + retangulo.larguras)

}
//alinea 1D
function funcD() {
    let co = prompt("escreve uma cor")

    class Retangulo {
        constructor(larguras, alturas, cores) {
            this._largura = larguras,
                this._altura = alturas
            this._cor = cores

        }

        get larguras() {
            return this._largura
        }
        get alturas() {
            return this._altura
        }
        get cores() {
            return this._cor
        }

        set cores(co) {

            this._cor = co
        }

    }
    let retangulo = new Retangulo(3, 1, co)

    show("valor da altura: " + retangulo.alturas + "\n" + "valor da altura: " + retangulo.larguras + "\n" + "cor: " + retangulo.cores)

}
//alinea 1E
function func1E() {

    let larg = parseInt(prompt("escreva a largura"))
    let alt = parseInt(prompt("escreva a altura"))


    class Retangulo {
        constructor(larguras, alturas, cores) {
            this._largura = larguras,
                this._altura = alturas
            this._cor = cores

        }

        get larguras() {
            return this._largura
        }
        get alturas() {
            return this._altura
        }
        get cores() {
            return this._cor
        }

        getArea() {

            return this._altura * this._largura
        }

    }
    let retangulo = new Retangulo(larg, alt, "branco")

    show("valor da altura: " + retangulo.alturas + "\n" + "valor da altura: " + retangulo.larguras + "\n" + "cor: " + retangulo.cores + "\n" + "area: " + retangulo.getArea())

}
//alinea 1F
function func1F() {

    let larg = parseInt(prompt("escreva a largura"))
    let alt = parseInt(prompt("escreva a altura"))


    class Retangulo {
        constructor(larguras, alturas, cores) {
            this.largura = larguras,
                this.altura = alturas
            this.cor = cores

        }

        get larguras() {
            return this._largura
        }
        get alturas() {
            return this._altura
        }
        get cores() {
            return this._cor
        }

        getPerimetro() {

            return this._altura + this._altura + this._largura + this._largura
        }

    }
    let retangulo = new Retangulo(larg, alt, "branco")

    show("valor da altura: " + retangulo.alturas + "\n" + "valor da altura: " + retangulo.larguras + "\n" + "cor: " + retangulo.cores + "\n" + "perimetro: " + retangulo.getPerimetro())

}
