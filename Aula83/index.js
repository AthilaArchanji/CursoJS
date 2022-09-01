class ControleRemeto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume(){
        this.volume -= 2
    }
}