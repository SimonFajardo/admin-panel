import { nuevoproducto } from "./api.js";
import {mostrarAlerta} from "./alerta.js";

(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarProducto);

    async function validarProducto(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const precio = document.querySelector('#precio').value;
        const categoria = document.querySelector('#categoria').value;

        const producto = {
            nombre,
            precio,
            categoria
        }

        //console.log(producto.nombre, producto.precio, producto.categoria)

        if(validacion(producto)){
            //console.log('esta vacio')
            mostrarAlerta('Todos los campos deben ser obligatorios');
            return;
        }
        await nuevoproducto(producto);
        window.location.href = 'index.html';

        
    }

    function validacion(obj){
        return !Object.values(obj).every(i => i !== '');
    }
})();

