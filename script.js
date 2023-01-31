// console.log("hello DOM")

const products = [
  {
    name: "product 1",
    price: 100,
    imgURL:
      "https://media.wired.com/photos/621980b1aaf30ea1c35e400a/125:94/w_1822,h_1370,c_limit/Gear-Samsung-S22-Series.jpg",
  },
  {
    name: "product 2",
    price: 100,
    imgURL:
      "https://i.pcmag.com/imagery/reviews/03POP0TjDjuXonJXI16Omn2-1..v1663720055.jpg",
  },
];

const cart = [];

// console.log(products)
const container = document.querySelector("#productsList");

products.forEach((product) => {
  const theProductElement = document.createElement("div");
  const theProductTitle = document.createElement("h4");
  const theProductImage = document.createElement("img");
  const theProductBTN = document.createElement("button");

  theProductTitle.innerHTML = product.name;
  theProductImage.setAttribute("src", product.imgURL);

  theProductBTN.innerText = "Buy";

  theProductElement.appendChild(theProductTitle);
  theProductElement.appendChild(theProductImage);
  theProductElement.appendChild(theProductBTN);
  theProductElement.classList.add("product");

  container.appendChild(theProductElement);
  // theProductElement.

  theProductBTN.onclick = (e) =>
    addProductToCart(e.target.parentElement.childNodes[0].innerText);
});

function addProductToCart(productName) {
  cart.push(products.find((product) => product.name == productName));
  buildCartDOM();
}

function buildCartDOM() {
    const exist = document.querySelector('ul');
    exist && exist.remove()
  const cartList = document.createElement("ul");
  cart.forEach((productBuyed) => {
    const theProductElement = document.createElement("li");
    const theProductTitle = document.createElement("h4");

    theProductTitle.innerHTML = productBuyed.name;

    theProductElement.appendChild(theProductTitle);
    theProductElement.classList.add("productBuyed");

    cartList.appendChild(theProductElement);
  });
  document.body.appendChild(cartList);
}






