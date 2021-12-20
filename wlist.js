
/*
git add wishlist.html 
git commit -m kommentar
git push origin julprojeckt/wishlist
*/

// EVENT LISTENERS


// läsa in data från wishlist och loopa igenom och visa i wishlist sida

// En tom array för wishlist
const wListproduct = JSON.parse(localStorage.getItem(".wListproduct")) || [];

function addProduct(e) {
e.preventDefault();




// Läser in data från produkters individuella HTML-fil
var priset = document.querySelectorAll(".card-price");
const src = document.querySelectorAll(".card-pic")
const productName= document.querySelectorAll(".card-title");
const id = e.target.getAttribute("id");

  let productObj= {
  product:productName[id].innerHTML,
  bild:src[id].getAttribute("src"),
  kostnad:priset[id].innerHTML,
} 

 // Pushar in produkten i wListproduct-localStorage
 wListproduct.push(productObj);
 localStorage.setItem("wListproduct", JSON.stringify(wListproduct)); 

// Skriver ut produkten i wishlist.html genom att skapa nya div-taggar
 wListproduct.map( (product)=> {
  document.querySelector(".wListproduct-container").innerHTML
    += `
     <div> 
     <h5 class="card-title"> name : ${product.product} </h5> 
     <img class="card-pic" src="./bilder/${product.bild}" alt="${product.product}">
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

// läs in id, name, price , bild länk 
// lägg detta i objektet 


// push objectet i array
// push arrayen till localstorage 


// wlist knapp - skapar nya localstorage - klart 

