document.addEventListener('DOMContentLoaded', () => {
    const divCarrito = document.querySelector('#carrito');
    let totalAPagar = 0;

    function showCart() {

        let shopingcart = JSON.parse(localStorage.getItem('shopingcart')) || [];

        divCarrito.innerHTML = '';
        totalAPagar = 0;


        shopingcart.forEach(arepa => {

            const divarepa = document.createElement('div');
            divarepa.classList = "articule-cart";
            const nombre = document.createElement('span');
            nombre.textContent = `${arepa.nombre}`;

            const cantidad = document.createElement('span');
            cantidad.innerHTML = `Cantidad: ${arepa.cantidad} Precio: ${arepa.precio} Subtotal: ${arepa.cantidad * arepa.precio}`;

            totalAPagar = totalAPagar + (arepa.cantidad * arepa.precio);


            const buttonShopping = document.createElement('button');
            buttonShopping.innerHTML = "Eliminar";
            buttonShopping.className = "boton-eliminar";
            buttonShopping.onclick = () => {
                deleteShopping(arepa.id);
            }

            divarepa.appendChild(nombre);
            divarepa.appendChild(cantidad);

            divarepa.appendChild(buttonShopping);

            divCarrito.appendChild(divarepa);

        });
        const total = document.createElement('h2');
        total.textContent = `Total a Pagar: ${totalAPagar}`;
        divCarrito.appendChild(total);
    }


    function deleteShopping(id) {

        let shopingcart = JSON.parse(localStorage.getItem('shopingcart')) || [];


        const newShoping = shopingcart.filter(n => n.id != id);

        localStorage.setItem('shopingcart', JSON.stringify(newShoping));
        showCart();

    }
    showCart();
});