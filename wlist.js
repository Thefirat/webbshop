
/*
git add wishlist.html 
git commit -m kommentar
git push origin julprojeckt/wishlist
*/

/* // list.push(artikelEtt); 
  let productObj= {
  productName:productName,
  img:src,
  bes:beskrivning,
  kos:kostnad,
} 
*/ 

// EVENT LISTENERS
// För att hämta varan som finns i localStorage
let wList = document.querySelector('.lägg-till-wishlist');
const src = localStorage.getItem("src");
const productName= localStorage.getItem("productList");
const beskrivning = localStorage.getItem("beskrivning");
const kostnad = localStorage.getItem("kostnad");
const produktNamn = localStorage.getItem("namn");
const produktTag = localStorage.getItem("tag");
const pris = localStorage.getItem("pris");
const products = JSON.parse(produktNamn); 



// Lägger till "värden" på produkterna + produkter som skapats med localStorage
 let produkters = [
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
    {
     productName:productName,
     img:src,
     bes:beskrivning,
     kos:kostnad,
  }, 
 
]
 

function displayCart() {
  let korgVaror =localStorage.getItem("produkterikorg");
  korgVaror = JSON.parse(korgVaror);
  let produktSamling = document.querySelector(".produkt")

  console.log(korgVaror);
  if( korgVaror && produktSamling ) {
  produktSamling.innerHTML = '';
  Object.values(korgVaror).map(item => {
      produktSamling.innerHTML += `
      <div class="produkter">
      <div class="style-varukorg"></div>
      <ion-icon class="close" name="close-circle"></ion-icon>
      <img src="./Bilder/${item.tag}.jpg" width="90px">
      <span class="change">${item.namn}</span>  
      </div>
      <div class="Pris">${item.pris} Kr</div>
      </div>
      `;
      
  });
}
}

displayCart();