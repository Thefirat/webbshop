
/*
git add wishlist.html 
git commit -m kommentar
git push origin julprojeckt/wishlist
*/

// En tom array för wishlist
const wListproduct = JSON.parse(localStorage.getItem("wListproduct")) || [];

function addProduct(e) {
e.preventDefault();




// Läser in data från produkters individuella HTML-fil
var priset = document.querySelectorAll(".card-price");
const src = document.querySelectorAll(".card-pic")
const productName= document.querySelectorAll(".card-title");
const id = e.target.getAttribute("id");

let visaWish = localStorage.getItem("wListproduct");

  let productObj= {
  product:productName[id].innerHTML,
  bild:src[id].getAttribute("src"),
  kostnad:priset[id].innerHTML,
} 
console.log(wListproduct)
 // Pushar in produkten i wListproduct-localStorage
 wListproduct.push(productObj);
 localStorage.setItem("wListproduct", JSON.stringify(wListproduct)); 

// Skriver ut produkten i wishlist.html genom att skapa nya div-taggar
 
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

