import productdata from './product.json' assert {type: 'json'}
console.log(productdata)

for (let i = 0; i < productdata.length; i++) {
  document.getElementById("card-row-body").innerHTML += `
      <div class="card m-2" style="width: 18rem;">
    <img src="${productdata[i].productimg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${productdata[i].productName}</h5>
      <p class="card-text">Some quick example text to build  card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price : ${productdata[i].productPrice}</li>
      <li class="list-group-item">Rating : ${productdata[i].productRating}</li>
    </ul>
    
  </div>`;
}