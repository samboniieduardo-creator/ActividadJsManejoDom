console.log("=== EXPLORANDO EL DOM ===");

// Selección de elementos
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector(".descripcion");
const catalogo = document.getElementById("catalogo");
const productos = document.querySelectorAll(".producto");

//  1 - SELECCIONAR

// A.
console.log(titulo.textContent);

// B.
console.log("Cantidad de productos:", productos.length);

// C.
productos.forEach((producto, index) => {
    console.log(`Producto ${index + 1}: ${producto.querySelector("h2").textContent}`);
});


//  2 - NAVEGAR EL DOM

const primerProducto = productos[0];

// 1. Nombre del producto
console.log("Nombre:", primerProducto.firstElementChild.textContent);

// 2. Precio
console.log("Precio:", primerProducto.firstElementChild.nextElementSibling.textContent);

// 3. Botón
console.log("Botón:", primerProducto.children[2].textContent);

// 4. Elemento padre
console.log("Padre:", primerProducto.parentElement);

// 5. Hijos
console.log("Hijos:", primerProducto.children);

//  3 - MODIFICAR CONTENIDO

// Cambiar título
titulo.textContent = "TechStore — Tecnología para todos";

// Cambiar descripción
descripcion.textContent = `${productos.length} productos disponibles`;

// Cambiar segundo producto
productos[1].children[0].textContent = "Monitor LG UltraWide";

// 4 - ATRIBUTOS

productos.forEach((producto, index) => {

    // Leer data-id
    console.log(producto.dataset.id);

    // Agregar data-stock
    producto.dataset.stock = (index + 1) * 10;
});

//  5 - ESTILOS

// Primer producto
primerProducto.classList.add("destacado");
primerProducto.style.backgroundColor = "#FFF8DC";
primerProducto.style.border = "2px solid blue";


// Función
function destacarProducto(producto){

    producto.classList.add("destacado");
    producto.style.backgroundColor = "#D9F7BE";
    producto.style.border = "2px solid green";
}

// Utilizar la función
destacarProducto(productos[1]);
destacarProducto(productos[2]);