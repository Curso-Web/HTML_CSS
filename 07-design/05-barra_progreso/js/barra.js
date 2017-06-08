
function move() {
    let oElem = document.getElementById("myBar"); 
    var nAncho = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (nAncho >= 100) {
            clearInterval(id);
        } else {
            nAncho++; 
            oElem.style.nAncho = nAncho + '%'; 
        }
    }
}


function progresa(pMin, pMax, pTime) {
    let oElem = document.getElementById("myBar");
    oElem.value = pMin;
    oElem.max = pMax;
    let nIncremento = (pMax - pMin) * 10 / pTime;
    
    let id = setInterval(frame, 10);
    function frame() {
        if (oElem.value == oElem.max ) {
            clearInterval(id);
        } else {
            oElem.value += nIncremento; 
        }
    }
}



