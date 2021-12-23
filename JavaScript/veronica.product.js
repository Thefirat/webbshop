//Samlade variabler
const src = localStorage.getItem("src");
const productName= localStorage.getItem("productList");
const beskrivning = localStorage.getItem("beskrivning");
const kostnad = localStorage.getItem("kostnad");
const products = JSON.parse(productName);



products.map( (product)=> {

document.querySelector(".productWrap").innerHTML

+= `
<div class= "styleContainer">
<img class="card-pic" src=${product.img} width="250px" alt="${product.productName}" id="9" >

<h5 class="ProdNamn">  ${product.productName} </h5>

<p class="card-title">  ${product.bes} </p> 
<br>
<a class="lägg-till cart8" href="#"><ion-icon name="basket"></ion-icon></a>
<a class="lägg-till-wishlist heart8" href="#"><ion-icon name="heart" id="7"></ion-icon></a>

<h3 class="card-price"> ${product.kos}kr </h3>

</div>
`
})



//src=${product.img} alt="${product.productName}
