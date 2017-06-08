class Formulario {

    constructor (pMin, pMax, pTime) {

        this.nMin = pMin
        this.nMax = pMax
        this.nTime = pTime

        this.oBtn = document.querySelector("#btn_1")
        this.oBarra = document.querySelector("#barra_1")

        console.dir (this.oBarra) 

        this.oBtn.addEventListener("click",
            this.progresa.bind(this));


    }

    progresa() {
        this.oBarra.value = this.nMin;
        this.oBarra.max = this.nMax;
        let nIncremento = (this.nMax - this.nMin) * 10 / this.nTime;
        
        let id = setInterval(frame.bind(this), 10);
        
        function frame() {
            if (this.oBarra.value == this.oBarra.max ) {
                clearInterval(id);
            } else {
                this.oBarra.value += nIncremento; 
            }
        }
    } // Fin del metodo
    

} // Fin de la clase Formulario
