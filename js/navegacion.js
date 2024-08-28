document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector('#header');
    const h1 = document.createElement('h1');
    const a = document.createElement('a');


    const menuItems = [{ name: 'Inicio', link: 'index', icon: '' },
    { name: 'Productos', link: 'products', icon: '' },
    { name: 'Contacto', link: 'contact', icon: '' },
    { name: 'Nosotros', link: 'about', icon: '' },
    { name: '', link: 'shoppingCart', icon: './img/compras.png' }

    ];



    const nav = document.createElement('nav');
    const ul = document.createElement('ul');


    h1.textContent = 'Date un Gustazo';

    a.appendChild(h1);
    header.appendChild(a);
    a.href = `${menuItems[0].link}.html`;
    header.appendChild(nav);
    header.className = "navbar";

    menuItems.forEach(item => {
        const li = document.createElement('li');



        if (item.icon === '') {
            li.innerHTML = `<a href="${item.link}.html">${item.name}</a>`;
        }
        else {

            li.innerHTML = `
        <a href="${item.link}.html">${item.name}
            <img alt="" src="${item.icon}" width="32" height="32" />
            <span class="cart-count" id="cartCount">0</span>
        </a>`;
        }


        ul.appendChild(li);

    })

    nav.appendChild(ul);

    function obtenerCarrito() {
        const shopingcart = localStorage.getItem('shopingcart');
        return shopingcart ? JSON.parse(shopingcart) : [];
    }
    function actualizarContador() {
        const cartCountElement = document.getElementById('cartCount');

        if (!cartCountElement) {
            return;
        }
        const shopping = obtenerCarrito();
        const totalAmount = shopping.reduce((total, producto) => total + producto.cantidad, 0);
        cartCountElement.innerHTML = totalAmount;
    }
    actualizarContador();
});


