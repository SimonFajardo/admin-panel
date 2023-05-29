import {obtenerproducto, editarproducto } from './api.js';
import { mostrarAlerta } from './alerta.js';

(function() {


    const nombreInput = document.querySelector('#nombre');
    const precioInput = document.querySelector('#precio');
    const categoriaInput = document.querySelector('#categoria');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        // Verificar si el producto existe
        const parametrosURL = new URLSearchParams(window.location.search);
        const idProducto = parseInt( parametrosURL.get('id') );
        
        const producto = await obtenerproducto(idProducto)
        mostrarProducto(producto);
       
        // registra el formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarProducto);
       
    });

    function mostrarProducto(producto) {
        const { nombre, precio, categoria, id} = producto;

        nombreInput.value = nombre;
        precioInput.value = precio;
        categoriaInput.value = categoria;
        idInput.value = id;
    }


    async function validarProducto(e) {
        e.preventDefault();
        const producto = {
            nombre: nombreInput.value, 
            precio: precioInput.value, 
            categoria: categoriaInput.value,
            id: parseInt(idInput.value)
        }
        if( validar(producto) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        await editarproducto(producto);
        window.location.href = 'index.html';
    }


    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }
})();