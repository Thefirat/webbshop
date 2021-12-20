
/*
git add wishlist.html 
git commit -m kommentar
git push origin julprojeckt/wishlist
*/

// EVENT LISTENERS
// För att hämta varan som finns i localStorage




// läsa in data från wishlist och loopa igenom och visa i wishlist sida

// En tom array för wishlist
const wListproduct = JSON.parse(localStorage.getItem(".card-title")) || [];

function addProduct(e) {
e.preventDefault();

// var titel = document.querySelectorAll(".card-title").forEach
var priset = document.querySelector(".card-price").innerHTML;

//var bilden = document.querySelector("card-pic").innerHTML; 
//console.log(bilden);
// console.log(titel);
console.log(priset);


// läsa in med inneHTML
//  från innerHTML till localStorage
// vart ska localstorage.setItem 

const src = localStorage.getItem(".card-pic");
const productName= localStorage.getItem(".card-title");
const kostnad = localStorage.getItem(".card-price");

const products = JSON.parse(productName) || []; 


  let productObj= {
  product:productName,
  bild:src,
  kostnad:kostnad,
} 

 wListproduct.push(productObj);

localStorage.setItem("wListproduct", JSON.stringify(wListproduct)); 

// Skriver ut produkten i wishlist.html genom att skapa nya div-taggar
products.map( (product)=> {

  const x = document.querySelector(".wListproduct-container");
    document.querySelector(".wListproduct-container").innerHTML 
    += `
     <div> 
     <h5 class="card-title"> name : ${product.product} </h5> 
     <img class="card-pic" src="./bilder/${product.bild}" alt="${product.product}>
     <h3 class="card-price"> Pris: ${product.kostnad} SEK </h3> 
     </div>
    `
   
})
}


// wList-knappen, för att den ska koppla till alla knappar lägger man till .forEach.  
 document
.querySelectorAll(".lägg-till-wishlist")
.forEach( btn => btn.addEventListener("click" , addProduct));  



// en empty array 
// ett object

// läs in id, name, besrkivning , price , bild länk 
// lägg detta i objektet 


// push objectet i array
// push arrayen till localstorage 


// wlist knapp - skapar nya localstorage - klart 
// queryselector de namnen
// 
