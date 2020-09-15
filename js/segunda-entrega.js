
class Product {
    constructor(name, price, imgPath) {
      this.name = name;
      this.price = price;
      this.imgPath = imgPath;

      this.id = Math.random() * 10;
    }
  }
  
  var products;

  window.onload = () => {
    let objectFromJSON = JSON.parse(dbJSON);
    products = objectFromJSON.map((object) => {
      return new Product(object.name, object.price, object.imgPath);
    });
   
    products.forEach((product) => {
      document.getElementById("contenedorCards").appendChild(createCard(product))
    });
  };



function createCard(product) {
  let container = createComponent("div", "col-4 col-md-4 col-lg-4 col-xl-4");

  let productCard = createComponent("div", "productCard");
  productCard.id = product.id;

  let img = createComponent("img", "productCardImg");
  img.src = product.imgPath;

  let title = createComponent("a", "productCardTitle");
  title.innerHTML = product.name;

  let price = createComponent("div", "productCardPrice");
  price.innerHTML = `$${product.price}`;

  let button = createComponent("button", "addToCart");
  button.innerHTML = `Agregar al carrito`;

  // Creo el Listener en el boton y
  button.addEventListener("click", () => {
    addToCartPlus(product);
  });

  // Agrego todos los items a la carta
  productCard.appendChild(img);
  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(button);

  // Agrego la carta al contenedor
  container.appendChild(productCard);
  return container;
}

// Funcion al clickear el boton
function addToCartPlus(product) {
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) + 1;

}

// !!!!!!! O.o
function createComponent(tag, classes) {
  let component = document.createElement(tag);
  component.classList = classes;
  return component;
}



// 

{/* <div class="productInCart">
  <img class="imgCarrito" src="imagenes-mobiliario-bancos/banco_anglo_01.jpg" alt="">
  <p class="precioCarrito">$1500</p>
</div> */}



function createCardInCart(product) {
  let carrito = createComponent("div", "productInCart");

  carrito.innerHTML = `<img class="imgCarrito" src="${product.imgPath}">
  <p class="precioCarrito">$${product.price}</p>
  <p class="contadorCarrito">0</p>`;
  return carrito;
}


// boton dentro de card

  button.addEventListener("click", () => {
    addToCartPlus(product);
  });











