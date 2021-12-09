/* const src = localStorage.getItem("src")

console.log(src)

const product = JSON.parse(src)

console.log(product)
document.querySelector(".product-container").innerHTML = `<div> name : ${product.namn} 
</div>  <div> ${product.beskrivning}</div>

<img src= ${product.img} alt="dummy prd" />` */







const src = localStorage.getItem("src");

const productName= localStorage.getItem("productList");

const beskrivning = localStorage.getItem("beskrivning");

const kostnad = localStorage.getItem("kostnad");



const products = JSON.parse(productName);




products.map( (product)=> {

document.querySelector(".product-container").innerHTML

+= `<div class="ProdNamn"> name : ${product.productName} </div>

<div class="beskrivningDiv"> beskrivning: ${product.bes}

</div> <div class="prisDiv"> Pris: ${product.kos} </div>

<img src=${product.img} alt="hej" >`

})