
/*
git add wishlist.html 
git commit -m kommentar
git push origin julprojeckt/wishlist
*/

// EVENT LISTENERS
// För att hämta varan som finns i localStorage


const wListproduct = JSON.parse(localStorage.getItem("wListproduct")) || [];

function addProduct(e) {
e.preventDefault();

const wList = document.querySelectorAll("lägg-till-wishlist");
const src = localStorage.getItem("src");
const productName= localStorage.getItem("wListproduct");
const beskrivning = localStorage.getItem("beskrivning");
const kostnad = localStorage.getItem("kostnad");
const products = JSON.parse(productName); 

  let productObj= {
  productName:productName,
  img:src,
  bes:beskrivning,
  kos:kostnad,
} 

 let productObject = [
  {
      namn: 'Soffa',
      tag:'Soffa',
      pris: 7500,
      iKorg: 0
  },
  {
      namn: 'Badkar',
      tag:'Badkar',
      pris: 3500,
      iKorg: 0
  }, {
      namn: 'Stege',
      tag:'Stege',
      pris: 900,
      iKorg: 0
  },
  {
      namn: 'Spegel',
      tag:'Spegel',
      pris: 999,
      iKorg: 0
  },
  {
      namn: 'Vas',
      tag:'Vas',
      pris: 799,
      iKorg: 0
  }, {
      namn: 'Kruka',
      tag:'Kruka',
      pris: 500,
      iKorg: 0
  },
  {
      namn: 'Bokhylla',
      tag:'Bokhylla',
      pris: 800,
      iKorg: 0
  },
  {
      namn: 'Stol',
      tag:'Stol',
      pris: 699,
      iKorg: 0
  },
] 

 wListproduct.push(productObj);
localStorage.setItem("wListproduct", JSON.stringify(wListproduct)); 

 wListproduct.push(productObject);
localStorage.setItem("wListproduct", JSON.stringify(wListproduct));



products.map( (product)=> {

    document.querySelector(".wListproduct-container").innerHTML 
    += `<div class="ProdNamn"> name : ${product.productName} </span> 
     <span class="beskrivningDiv">  beskrivning: ${product.bes} </span> 
     <span class="prisDiv"> Pris: ${product.kos} </span> 
     <img src=${product.img} alt="produkt">
     </div>
    `

})
products.map( (product)=> {
document.querySelector(".wListproduct-container").innerHTML 
    += `<div class="produkter">
      <div class="style-varukorg"></div>
      <ion-icon class="close" name="close-circle"></ion-icon>
      <img src="./Bilder/${product.tag}.jpg" width="90px">
      <span class="change">${product.namn}</span>  
      </div>
      <div class="Pris">${product.pris} Kr</div>
      <div class="Antal"><span class="antalartiklar">${product.iKorg}</span>
      </div>
      `
})
}

document.querySelector(".lägg-till-wishlist").addEventListener("click" , addProduct);

addProduct(); 


// en empty array 
// ett object

// läs in id, name, besrkivning , price , bild länk 
// lägg detta i objektet 


// push objectet i array
// push arrayen till localstorage 


// wlist knapp - skapar nya localstorage - klart 
// queryselector de namnen
// 