const src = localStorage.getItem("src")

console.log(src)

const product = JSON.parse(src)

console.log(product)
document.querySelector(".product-container").innerHTML = `<div> name : ${product.namn} </div>  <div> ${product.beskrivning}</div>

<img src= ${product.src} alt="dummy prd" /> `