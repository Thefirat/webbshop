const wListproduct = JSON.parse(localStorage.getItem("wListproduct") ) || []
    
wListproduct.map( (product)=> {
   

   console.log(document.querySelector(".wListproduct-container"))
    document.querySelector(".wListproduct-container").innerHTML
     += `
      <div class="product-container"> 
      <h5 class="card-title"> name : ${product.product} </h5> 
      <img class="card-pic" src="./bilder/${product.bild}" alt="${product.product}">
      <h3 class="card-price"> Pris: ${product.kostnad} </h3> 
      </div>
     `
 }) 