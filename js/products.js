const arepas = [
    { id: 1, imagen: "./img/arepa_patapata.png", nombre: "PataPata", descripcion: "Caraota Queso rallado y Aguacate en lonjas", precio: 1200 },
    { id: 2, imagen: "./img/arepa_domino.png", nombre: "Domino", descripcion: "Carne Porotos negros y Queso Blanco", precio: 1500 },
    { id: 3, imagen: "./img/arepa_perico.png", nombre: "Perico", descripcion: "Huevos revueltos con vegetales", precio: 1320 },
    { id: 4, imagen: "./img/arepa_pabellon.png", nombre: "Pabellón", descripcion: "Carne Porotos platano y Queso Blanco", precio: 1700 },
    { id: 5, imagen: "./img/Arepa-de-pollo.jpg", nombre: "Pollo", descripcion: "Pollo", precio: 1000 },
    { id: 6, imagen: "./img/arepa_pelua.png", nombre: "Pelua", descripcion: "Carne Mechada y Queso Amarillo", precio: 7900 }

]

const contenedorproductos = document.getElementById("contenedor-productos");

arepas.forEach(arepa => {

    const divarepa = document.createElement('div');

    divarepa.classList.add('arepas');
    divarepa.dataset.id = arepa.id;

    const imagen = document.createElement('img');
    imagen.src = arepa.imagen;
    imagen.alt = arepa.nombre;
    divarepa.appendChild(imagen);
    const h2 = document.createElement('h2');
    h2.textContent = arepa.nombre;
    divarepa.appendChild(h2);
    const h3 = document.createElement('h3');
    h3.textContent = arepa.descripcion;
    divarepa.appendChild(h3);

    const precio = document.createElement('p');
    precio.textContent = `$${arepa.precio.toFixed(2)}`;
    divarepa.appendChild(precio);

    const buttonCarrito = document.createElement('input');
    buttonCarrito.type = 'button';
    buttonCarrito.value = 'Agregar al Carrito';




    buttonCarrito.addEventListener('click', () => {
        agregarCarrito(arepa);
    });
    divarepa.appendChild(buttonCarrito);

    contenedorproductos.appendChild(divarepa);

});



function agregarCarrito(producto) {
    let shopingcart = localStorage.getItem('shopingcart');
    shopingcart = shopingcart ? JSON.parse(shopingcart) : [];

    const index = shopingcart.findIndex(item => item.id === producto.id);
    console.log(index);
    if (index != -1) {
        shopingcart[index].cantidad++;
    }
    else {
        producto.cantidad = 1;
        shopingcart.push(producto);
    }


    localStorage.setItem('shopingcart', JSON.stringify(shopingcart));

}
