function verificarcalificacion(){
    let grado= parseInt(document.getElementById("grado").value);
    let mensaje= "";
    if (grado>=0 && grado<=100){
        if (grado>=90) {
            mensaje = "aprobado con honores";
           }else if(grado>=70){
            mensaje = "aprobado";
           } else {
            mensaje = "reprobado";
           }
    } else{
        mensaje= "valor incorrecto";
    }
    document.getElementById("gradoSalida").innerText = mensaje;

}



function determinarParidad() {
    let parImpar = parseInt(document.getElementById("parImpar").value);
    let mensaje= "";
    if (parImpar % 2 ===0) {
        mensaje = "El numero es par";
    } else{
        mensaje= "El numero es impar";
    } 
    document.getElementById ("parimparSalida").innerText = mensaje;
    } 

 
 function evaluarDescuento(){
    let descuento = parseInt (document.getElementById("descuento").value);
    let preciofinal = descuento;
    if (descuento > 100000){
        preciofinal = descuento *0.9
    } 
    document.getElementById ("descuentoSalida").innerText = `monto final a pagar: $${preciofinal}`;

}   



    function jugarAdivinanza(){
        let adivinar = parseInt (document.getElementById("adivinar").value);
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        let mensaje = "";
        if (adivinar === numeroAleatorio){
            mensaje = "felicidades, adivinaste el numero!";
            }else {
                mensaje = `lo siento, el numero era ${numeroAleatorio}`;
            }
            document.getElementById("adivinarSalida").innerText = mensaje;
        
    }