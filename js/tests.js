var expect = chai.expect;
describe("Test de la funcionalidad reservarHorario(horario)",function(){
    var restaurant;  
    beforeEach('Crear un nuevo restaurant para cada caso de prueba.',  
        function () {  
            restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);  
        })
    it("Dado un restaurante con horarios [13:00, 15:30, 18:00], al reservar horario de las 13:00, lo elimina del arreglo",function(){
        restaurant.reservarHorario("13:00");
        expect(restaurant.horarios).that.does.not.include("13:00")
    })
    it("Cuando se reserva el horario de las 17:00 que el restaurante no posee, el arreglo se mantiene igual",function(){
        let cantidadDeHorarios = restaurant.horarios.length;
        restaurant.reservarHorario("17:00");
        expect(restaurant.horarios.length).to.equal(cantidadDeHorarios); 
    })
    it("Al reservar al horario de un restaurante con [13:00, 15:30, 18:00] pero al no pasarle ningun parametro el arreglo sigue igual",function(){
        restaurant.reservarHorario("");
        expect(restaurant.horarios).to.eql(["13:00","15:30","18:00"]);
    })
})
describe("Test de la funcionalidad obtenerPuntuacion()",function(){
    it("Dadas las calificaciones del restaurant [8, 5, 5, 6, 5], se calcula correctamente su promedio(5.8)",function(){
        var restaurante = new Restaurant(3, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [8, 5, 5, 6, 5]);
        var resultado = restaurante.obtenerPuntuacion();
        expect(resultado).to.equal(5.8);
    })
    it("Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.",function(){
        var restaurante = new Restaurant(3, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        var resultado = restaurante.obtenerPuntuacion();
        expect(resultado).to.equal(0);
    })
})
describe("Test de la funcionalidad calificar()",function(){
    var restaurant;  
    beforeEach('Crear un nuevo restaurant para cada caso de prueba.',  
        function () {  
            restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5,7,8,9]);  
        })
    it("Al agregar una calificacion al restaurante de 7, deberia incluirse en el arreglo de calificaciones [5,7,8,9,7]",function(){
        restaurant.calificar(7);
        expect(restaurant.calificaciones[restaurant.calificaciones.length - 1]).to.equal(7);
    })
    it("Al agregar una calificacion vacia al restaurante, no deberia tener efecto teniendo como resultado [5,7,8,9]",function(){
        restaurant.calificar();
        expect(restaurant.calificaciones.length).to.equal(4)
    })
    it("Al agregar una calificacion invalida como calificar(12), no deberia tener efecto teniendo como resultado [5,7,8,9]",function(){
        restaurant.calificar(12);
        expect(restaurant.calificaciones).to.eql([5,7,8,9])
    })
})

describe("Test de la funcionalidad buscarRestaurante(id)",function(){
    it("Busco restaurante por id 1 y me devuelve el indicado con nombre TAO Uptown",function(){
        var restaurante = listado.buscarRestaurante(1);
        expect(restaurante.nombre).to.equal("TAO Uptown");
    })
    it("Busco restaurante por id incorrecto con numero 458 y devuelve un mensaje alertando que no ha encontrado ningun restaurante con ese id",function(){
        var mensaje = listado.buscarRestaurante(458);
        expect(mensaje).to.be.a('string',"No se ha encontrado ningún restaurant")
    })
})
describe("Test de la funcionalidad obtenerRestaurantes()",function(){
    it("Filtrar restaurante sólo por el rubro Hamburguesa y obtengo cuatro restaurantes de dicho rubro",function(){
        var restaurantesSeleccionados = listado.obtenerRestaurantes("Hamburguesa",null,null)
        expect(restaurantesSeleccionados.length).to.equal(4);
    })
    it("Filtrar restaurante sólo por la ciudad de Nueva York y devuelve siete restaurantes que cumplen dicha condición",function(){
        var restaurantesSeleccionados = listado.obtenerRestaurantes(null,"Nueva York",null)
        expect(restaurantesSeleccionados.length).to.equal(7);
    })
    it("Filtrar restaurante sólo por el horario de las 13:00 y obtengo 3 restaurantes en dicho horario",function(){
        var restaurantesSeleccionados = listado.obtenerRestaurantes(null,null,"13:00")
        expect(restaurantesSeleccionados.length).to.equal(3);
    })
    it("Filtrar un restaurante por filtro incorrecto de Sushi y no posea ningun restaurante en su lista",function(){
        var restaurantesSeleccionados = listado.obtenerRestaurantes("Sushi",null,null)
        expect(restaurantesSeleccionados.length).to.equal(0);
    })
})
describe("Test de la funcionalidad precioBase() de una reserva",function(){
    it("Calcular el precio base de Reserva1 correctamente esperando un monto de 2800",function(){
        var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
        expect(reserva.precioBase()).to.equal(2800);
    })
    it("Calcular el precio base de Reserva2 correctamente esperando un monto de 300",function(){
        var reserva =  new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        expect(reserva.precioBase()).to.equal(300);
    })
})
describe("Test de la funcionalidad precioFinal() de una reserva",function(){
    it("Calcular el precio final de Reserva1 correctamente con un total de 2590",function(){
        var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
        expect(reserva.precioTotal()).to.equal(2590);
    })
    it("Calcular el precio final de Reserva2 correctamente esperando un total de 100",function(){
        var reserva =  new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        expect(reserva.precioTotal()).to.equal(100);
    })
})
































