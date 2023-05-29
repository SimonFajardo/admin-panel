import { obtenerproductos, eliminarproducto} from './api.js';

(function() {
    const listado = document.querySelector('#listado-Productos');
    listado.addEventListener('click', confirmarEliminar);


    document.addEventListener('DOMContentLoaded', mostrarproductos);

    async function mostrarproductos() {
        const productos = await obtenerproductos();
        
        productos.forEach( producto => {
            const { nombre, precio, categoria, id } = producto;
            const row = document.createElement('tr');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="leading-5 text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${precio}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${categoria}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);
        })
    }

    async function confirmarEliminar(e){
        if(e.target.classList.contains('eliminar')){
            const productoId = parseInt(e.target.dataset.producto);
            console.log(productoId);

            const confirmar = confirm('Quieres eliminar este producto?');

            if(confirmar){
                await eliminarproducto(productoId)
            }
        }
    }


})();