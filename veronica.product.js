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
<h5 class="ProdNamn"> Namn: ${product.productName} </h5>

<p class="beskrivningDiv"> Beskrivning: ${product.bes} </p> 

<h3 class="prisDiv"> Pris: ${product.kos} </h3>

<img class="picContainer"> src=${product.img} alt="${product.productName}" id="9" >
</div>
`
})