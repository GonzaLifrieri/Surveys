class Reserva{
    constructor(horario,cantPersonas,precioPorPersona,codigoDeDescuento){
        this.horario = horario;
        this.cantPersonas = cantPersonas;
        this.precioPorPersona = precioPorPersona;
        this.codigoDeDescuento = codigoDeDescuento;
    }
    precioBase = function(){
        return this.cantPersonas * this.precioPorPersona;
    }

    precioTotal = function(){
        var precioFinal = this.precioBase() + this.adicionales() - this.descuentos();
        return precioFinal;
    }
    descuentos = function(){
        var descuentoTotal = 0;
        if(this.cantPersonas >= 4 && this.cantPersonas <= 6){
           descuentoTotal += Math.round(this.precioBase() * 5) / 100;
        }
        if(this.cantPersonas == 7 || this.cantPersonas == 8){
            descuentoTotal += Math.round(this.precioBase() * 10) / 100;
        }
        if(this.cantPersonas > 8){
            descuentoTotal += Math.round(this.precioBase() * 15)/ 100;
        }
        if( this.codigoDeDescuento == "DES15"){
            descuentoTotal += Math.round(this.precioBase() * 15)/ 100;
        }
        if(this.codigoDeDescuento == "DES200"){
            descuentoTotal += 200;
        }
        if(this.codigoDeDescuento == "DES1"){
            descuentoTotal += this.precioPorPersona;
        }
        return descuentoTotal;
    }
    adicionales = function() {
        var adicionalTotal = 0;
        if(horarioCentral(this.horario)){
            adicionalTotal += Math.round(this.precioBase() * 5) / 100;
        }
        if(diaDeFinDeSemana(this.horario)){
            adicionalTotal += Math.round(this.precioBase() * 15)/ 100;
        }
        return adicionalTotal
    }

}
function horarioCentral(fecha){
    var hora = fecha.getHours()
    console.log(hora);
    if(hora >= 13 && hora <= 14 || hora >= 20 && hora <= 21 ){
        return true
    } else{
        return false
    }
}
function getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }
function diaDeFinDeSemana(fecha){
    var dia = getDayOfWeek(fecha);
    if(dia == "Friday" || dia == "Saturday" || dia == "Sunday"){
        return true
    }
}