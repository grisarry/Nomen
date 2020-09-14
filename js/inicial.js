// var BancoElegido = new Object () 
// BancoElegido.marca = "Nomen"
// BancoElegido.modelo = "Peble"
// BancoElegido.material1 = "Cemento"
// BancoElegido.material2 = "Madera"
// BancoElegido.precio = "25000"

// function Banco(marca, modelo, material1, material2, precio){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.material1 = material1;
//     this.material2 = material2;
//     this.precio - precio;
// }

// var BancoElegido = new Banco("Nomen","Peble","cemento","madera","2500");

var producto_ofrecido = ['Banco', 'Cesto', 'Cenicero', 'Macetero', 'Mesa', 'Bicicletero'];
var tipologia = ['Interior', 'Exterior', 'Sala de espera'];
var cuerpos = ['1 cuerpo', '2 cuerpos', '3 cuerpos', '4 cuerpos'];
var materiales = ['Chapa', 'Chapa perforada', 'Madera', 'Hormigon', 'Tubo estructural de acero', 'Acero inoxidable', 'Funcion de aluminio'];
var componentes = ['Respaldo', 'Sin respaldo', 'Apoyabrazos', 'Puerto USB']

class Banco {
    constructor(producto_ofrecido, nombre, tipologia, cuerpos, materiales, componentes) {
        this.producto_ofrecido = producto_ofrecido;
        this.nombre = nombre;
        this.tipologia = tipologia;
        this.cuerpos = cuerpos;
        this.materiales = materiales;
        this.componentes = componentes;

        // this.getMateriales = function() {
        //     if (this.materiales.length > 1) {
        //         for (var i = 0; i < materiales.length; i++) {
        //             console.info(this.materiales[i]);
        //         }
        //     }
        // }

        this.elegido = function(){
            mensaje = 'El producto seleccionado es: ' + this.producto + this.nombre + 'de ' + this.tipologia; 
            alert(mensaje);
        }


    }

}

var venta = new Banco(producto_ofrecido[0], 'Peble', tipologia[1]); 







