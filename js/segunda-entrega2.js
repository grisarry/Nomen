class Product {
    constructor(name, price, imgPath, pagePath) {
      this.name = name;
      this.price = price;
      this.imgPath = imgPath;
      this.pagePath = pagePath;
    }
  }
  
  var bancos;

  window.onload = () => {
    let objectFromJSON = JSON.parse(dbJSON);
    bancos = objectFromJSON.map((object) => {
      return new Product(object.name, object.price, object.imgPath, object.pagePath);
    });

    const productsContainer = document.getElementById("contenedorCards");

    bancos.forEach((product) => {
      productsContainer.appendChild(createCard(product));
    });
  };

  function createComponent(tag, classes) {
    let component = document.createElement(tag);
    component.classList = classes;
    return component;
  }

function createCard(product) {
    let container = createComponent("div", "col-4 col-md-4 col-lg-4 col-xl-4");
  
    container.innerHTML = `<div class="col-4 col-md-4 col-lg-4 col-xl-4>
            <div id="${product.id}" class="productCard">
                <img class="productCardImg" src="${product.imgPath}"></img>
                <a class="productCardTitle " href="${product.pagePath}">${product.name}</a>
                <div class="productCardPrice">$${product.price}</div>
                <button id="addButton" class="addToCart">Agregar a carrito</button>
            </div>
        </div>`;
  
    let button = container.querySelector('#addButton');
    button.addEventListener("click", () => {
      addToCartPlus(product);
    });
  
    return container;
  }