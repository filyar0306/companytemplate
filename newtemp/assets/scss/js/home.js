let products = document.getElementById("products");

let page = 1;
let limit = 4;

const renderProducts = async () => {
  try {
    const response = await axios.get(
      `https://655c8cc025b76d9884fd82fe.mockapi.io/products?page=${page}&limit=${limit}`
    );
    const data = response.data;
    db = data;
    console.log(data);
    db.map((item) => {
      if (item.count == undefined) {
        item.count = 1;
      }
      let myDiv = document.createElement("div");
      myDiv.className = "myDiv";
      myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <h1>${item.title}</h1>
        <p>${item.price}</p>
        <div class="twobtn">
        <button onclick="addToCart(${item.id})"> + Add to Cart</button>
        <button  onclick="addToWish(${item.id})"><i class="fa-regular fa-heart"></i></button>
        </div>

        `;
      products.appendChild(myDiv);
    });
  } catch (error) {
    console.log(error);
  }
};

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productItem = cart.find((item) => item.id == index);
  if (productItem) {
    productItem.count = (productItem.count || 1) + 1;
  } else {
    cart.push(db.find((item) => item.id == index));
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToWish(index) {
  let wish = JSON.parse(localStorage.getItem("wish")) || [];
  let productItem = wish.find((item) => item.id == index);

  if (productItem) {
    alert("add edilib");
  } else {
    wish.push(db.find((item) => item.id == index));
    localStorage.setItem("wish", JSON.stringify(wish));
  }
}

window.onload = () => {
  renderProducts();
};

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { 
      header.style.backgroundColor = "yellow";
    } else {
      header.style.backgroundColor = "";
    }
  });
});
