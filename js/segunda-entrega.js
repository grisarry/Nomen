
 // database
class Product {
    constructor(name, price, imgPath) {
      this.name = name;
      this.price = price;
      this.imgPath = imgPath;

      this.id = Math.random() * 10;
    }
  }
  

  // APP

  var products;
  var productsMap = new Map();

     //   Parseo el string
  window.onload = () => {
    let objectFromJSON = JSON.parse(dbJSON);
    products = objectFromJSON.map((object) => {
      return new Product(object.name, object.price, object.imgPath);
    });
   
    products.forEach((product) => {
      document.getElementById("contenedorCards").appendChild(createCard(product))
    
      // Cargo los productos en el mapa
      productsMap.set(product, 0);
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

  // Listener en el boton 
  button.addEventListener("click", () => {
    addProductToCart(product);
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




// !! Agregar productos al carrito
function addProductToCart(product) {
  let counterElement = document.getElementById("cartCounter");
  let counter = 0;
  
  const productsOnCart = document.getElementById("cardsCarrito");

  // Agrego adentro del map una unidad al producto que se selecciono 
  productsMap.set(product, productsMap.get(product) + 1)

  productsOnCart.innerHTML = '';

  products.forEach(product => {
    let amountOfProducts = productsMap.get(product);

    if ( amountOfProducts > 0) {
      let productCard = document.createElement('div');
      productCard.innerHTML = 
            `<div class="productCarrito row">
              <div class="containerNombre col-6">
                  <img class="productCarritoImg " src="${product.imgPath}"></img>
                  <div class="productCarritoTitle ">${product.name}</div>
              </div>
              <div class="productCarritoPrice col-4">$${product.price}</div>
              <div class="row">
                    <button class="eliminarItem" onclick="eliminarCart(event)"> - </button>
                    <div id="carritoCounter" class="carritoCounter">${amountOfProducts}</div>
                    <button class="agregarItem" onclick="agregarCart(event)"> + </button>
                  </div>
            </div>`;
      
            counter += productsMap.get(product);

            // Agrego el producto a la vista del carrito
            productsOnCart.appendChild(productCard);
    }
          counterElement.innerHTML = counter;
          
  })

}




// !!!!!!! O.o
function createComponent(tag, classes) {
  let component = document.createElement(tag);
  component.classList = classes;
  return component;
}






// function createCardInCart(product) {
//   let carrito = createComponent("div", "productInCart");

//   carrito.innerHTML = `<img class="imgCarrito" src="${product.imgPath}">
//   <p class="precioCarrito">$${product.price}</p>
//   <p class="contadorCarrito">0</p>`;
//   return carrito;
// }



  // Menu
  function openNav() {
      document.getElementById("myNav").style.left = "0px";
  }
  function closeNav() {
      document.getElementById("myNav").style.left = "-100vw";
  }








