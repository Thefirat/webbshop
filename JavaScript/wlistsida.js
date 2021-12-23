// Gör en ny div-tag där sätter in produkten läggs in på html-filen
const wListproducts = JSON.parse(localStorage.getItem("wListproduct") ) || [];
    
wListproducts.map( (product)=> {
   
    document.querySelector(".wListproduct-container").innerHTML
     += `
      <div class="product-container"> 
      <img class="card-pic" src="${product.bild}" width="90px" alt="${product.product}">
      <h5 class="card-title"> ${product.product} </h5> 
      <h3 class="card-price"> ${product.kostnad} </h3> 
      </div>
     `
 }) 
 
 