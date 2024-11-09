fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                
let productEl=""
for (let products of json){
   
productEl += `
    <div class="col-md-3 col-sm-6">
        <div class="card" style="width: 18rem;">
            <img src="${products.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">"${products.title} "</h5>
               <p class="card-text"> ${products.description}.</p
              <p class="card-text">$ ${products.price}.</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
    </div> `
    let productList = document.getElementById("rows")

    productList.innerHTML = productEl

}
            })









