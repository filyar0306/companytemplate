let nameinp = document.getElementById("nameinp");
let priceinp = document.getElementById("priceinp");
let titleinp = document.getElementById("titleinp");

myform.addEventListener("submit", function (event) {
  event.preventDefault();
  axios
    .post("https://655c8cc025b76d9884fd82fe.mockapi.io/products", {
      name: nameinp.value,
      title: titleinp.value,
      price: priceinp.value,
    })
    .then((res) => {
      myform.reset();
    });
});


let addPageDiv = document.getElementById("addPageDiv")

const renderProducts = () => {
  addPageDiv.innerHTML = ""
  axios
    .get(`https://655c83b725b76d9884fd6e9b.mockapi.io/products`)
    .then((res) => {
      db = res.data;
      db.map((item) => {
        let miniDiv = document.createElement("tr");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `

                    <td>  <h2>Title:${item.title}</h2></td>
                    <td><h2>Name:${item.name}</h2></td>
                    <td>  <h2>Price:${item.price}</h2></td>
                    <td>                <button onclick = "deleteFromAdd(${item.id})">Delete</button></td>
              
                
              

                `;
        addPageDiv.append(miniDiv);
      });
    });
};

function deleteFromAdd(id) {
  axios
    .delete(`https://655c83b725b76d9884fd6e9b.mockapi.io/products/${id}`)
    .then((res) => {
      renderProducts();
      console.log(deleteFromAdd);
    });
}

window.onload = () => {
  renderProducts();
};
