let korg = document.querySelectorAll('.lägg-till')

let produkter = [
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

for (let i=0; i < korg.length; i++){
    korg[i].addEventListener('click', () => {
        korgNummer(produkter[i]);
        totalSumma(produkter[i])
    })
}

function onloadkorgNummer() {
    let produktNummer = localStorage.getItem('korgNummer');

    if(produktNummer) {
        document.querySelector('.varukorg span').textContent = produktNummer
        
    }
}

function korgNummer(produkter){
    let produktNummer = localStorage.getItem('korgNummer');
   
    produktNummer = parseInt(produktNummer);

    if( produktNummer ) {
        localStorage.setItem('korgNummer', produktNummer + 1);
        document.querySelector('.varukorg span').textContent = produktNummer + 1;


    } else {
        localStorage.setItem('korgNummer', 1);
        document.querySelector('.varukorg span').textContent = 1;
    } 
  setItems(produkter);
}
function setItems(produkter) {
    let korgVaror = localStorage.getItem('produkterikorg');
    korgVaror = JSON.parse(korgVaror);

    if(korgVaror != null) { 
        if(korgVaror[produkter.tag] == undefined){
            korgVaror = {
                ...korgVaror,
                [produkter.tag]: produkter
            }
        }
        korgVaror[produkter.tag].iKorg += 1;
    } else {
        produkter.iKorg = 1;
        korgVaror = {
            [produkter.tag]: produkter
        }
    }
    
    
    localStorage.setItem("produkterikorg", JSON.stringify
    (korgVaror));

}

function totalSumma(produkter) {
   // console.log("produkt pris är", produkter.pris);

    let korgSumma = localStorage.getItem('totalSumma');

    console.log("min korgsumma är", korgSumma);
    console.log(typeof korgSumma );

    if(korgSumma != null) {
        korgSumma = parseInt(korgSumma);
     localStorage.setItem("totalSumma", korgSumma + produkter.pris);
    } else {
        localStorage.setItem("totalSumma", produkter.pris);

    }

}
function displayCart() {
    let korgVaror =localStorage.getItem("produkterikorg");
    korgVaror = JSON.parse(korgVaror);
    let produktSamling = document.querySelector(".produkt")
    let korgSumma = localStorage.getItem('totalSumma');

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
        <div class="Antal"><span class="antalartiklar">${item.iKorg}</span>
        </div>
        <div class="totalt">
        ${item.iKorg * item.pris},00kr
        </div>
        `;
        
    });
    produktSamling.innerHTML += `
    <div class="style-varukorg"></div>
    <div class="totalSummaLista">
    <h4 class=""totalTitel>
    Korg       Total 
    </h4>
    <h4 class="korgTotal">
    ${korgSumma},00 kr
    </h4>
    `
  }
}

onloadkorgNummer();
displayCart();