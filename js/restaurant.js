var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
            var nuevosHorarios = this.horarios.filter(horario => horario != horarioReservado)
            return this.horarios = nuevosHorarios;

}


Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion >= 0 && nuevaCalificacion <= 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}


function sumatoriaCalificaciones(numeros){
        return numeros.reduce((acumulador,valorActual)=> acumulador + valorActual);
}

function promedioCalificaciones(numeros){
    if(numeros.length === 0){
        return 0
    } else{
        return Math.round((sumatoriaCalificaciones(numeros) / numeros.length)* 10) / 10;
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
        return promedioCalificaciones(this.calificaciones);

}

