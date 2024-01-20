const wishlist = document.getElementById("wishlist");


const getpro = () => {
    wishlist.innerHTML = ``
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.innerHTML = `
    <img src="${item.image}" alt="">
    <h1>${item.title}</h1>
    <p>${item.price}</p>
    <button onclick="removeWish(${index})">delete</button>
        </div>
        `;
        wishlist.appendChild(myDiv);
  });
};

function removeWish(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getpro();
}
 
 getpro()
