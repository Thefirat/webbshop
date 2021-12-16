   //Registrera och skapa admin

function store(){
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
   

    if(name.value.length == 0){
        alert('Vänligen fyll i email');

    }else if(pw.value.length == 0){
        alert('Vänligen fyll i lösenord');


    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Ditt konto har skapats!');
    }
}


//Logga in som registrerad admin

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Du är inloggad!');
    }else{
        alert('Något gick fel!');
    }
}


//JavaScript för produkter

const productList = JSON.parse( localStorage.getItem("productList")) || [];
function addProduct(e) {
e.preventDefault();

const src= document.querySelector("#imgSrc").value;
const productName= document.querySelector("#productName").value;
const beskrivning = document.querySelector("#beskrivning").value;
const kostnad = document.querySelector("#kostnad").value;


let productObj= {
productName:productName,
img:src,
bes:beskrivning,
kos:kostnad,
}

productList.push(productObj);
localStorage.setItem("productList", JSON.stringify(productList));

}

document.querySelector("button").addEventListener("click" , addProduct);
//Variabler
const kort = document.getElementsByClassName("card"); //
const btnAdd = document.getElementsByClassName("btn-info");
const btnKort = document.querySelector(".btn-cart");
const kortList = document.querySelector(".shopping-cart-list");
const Knapp = document.querySelector(".knapp");


//Constructor används för att initiera egenskaperna för objekten som ska härledas från klassen. 
//Det vill säga konstruktörer initierar objekt.
class Shopping{
    constructor(title,price,image){
        this.image = image;
        this.title = title;
        this.price = price;
    }
}


class UI{

    addToCart(shopping){
        const listItem = document.createElement("div");
        listItem.classList = "list-item";

        listItem.innerHTML = 
        `
        <div class="row align-items-center text-white-50">
            <div class="col-md-3">
                <img src="${shopping.image}" alt="product" class="img-fluid">
            </div>
            <div class="col-md-5">
                <div class="title">${shopping.title}</div>
            </div>
            <div class="col-md-2">
                <div class="price">${shopping.price}</div>
            </div>
            <div class="col-md-2">
                <button class="btn btn-delete">
                    <i class="fas fa-trash-alt text-danger"></i>
                </button>
            </div>
        </div>
        `       
        kortList.appendChild(listItem);
    }

    removeCart(){
        let btnRemove = document.getElementsByClassName("btn-delete");
        let self = this;
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function(){
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
            })
            
        }
    }

    cartCount(){
        let cartListItem = kortList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length;
    }

    cartToggle(){
        btnKort.addEventListener("click", function(){
            kortList.classList.toggle("d-none");
        })
    }
    
}


for (let i = 0; i < kort.length; i++) {
    btnAdd[i].addEventListener("click", function(e){
        let title = kort[i].getElementsByClassName("card-title")[0].textContent;
        let price = kort[i].getElementsByClassName("price")[0].textContent;
        let image = kort[i].getElementsByClassName("card-img-top")[0].src;
        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = ("Vald");
        let shopping = new Shopping(title,price,image);
        let ui = new UI();

        ui.addToCart(shopping);
        ui.removeCart()
        ui.cartCount();


        e.preventDefault();
    })
}

for (let i = 0; i < kort.length; i++) {
    Knapp[i].addEventListener("click", function(e){
        let title = kort[i].getElementsByClassName("card-title")[0].textContent;
        let price = kort[i].getElementsByClassName("price")[0].textContent;
        let image = kort[i].getElementsByClassName("card-img-top")[0].src;
        Knapp[i].classList.add("disabled");
        Knapp[i].textContent = ("Vald");
        let shopping = new Shopping(title,price,image);
        let ui = new UI();

        ui.addToCart(shopping);
        ui.removeCart()
        ui.cartCount();


        e.preventDefault();
    })
}



document.addEventListener("DOMContentLoaded", ()=> {
    let ui = new UI();

    ui.cartToggle();
})

Totaltsumma.innerHTML





/*
var p1 = document.getElementById(produkt1);
var p2 = document.getElementById(produkt2);
var p3 = document.getElementById(produkt3);
var p4 = document.getElementById(produkt4);
var p5 = document.getElementById(produkt5);
var p6 = document.getElementById(produkt6);
var p7 = document.getElementById(produkt7);
var p8= document.getElementById(produkt8);

var räknaBtn = document.getElementById(btn);
var totalt = document.getElementById(totalt1);

räknaBtn.onclick=function()
{
    var toplam = Number(p1.value)+ (p2.value)+ (p3.value)+ (p4.value)+ (p5.value)+ (p6.value)+ (p7.value)+ (p8.value);
}


*/
/* function addToLocalStorage (e){
    e.preventDefault();
    console.log(e)


    
}


document
.querySelector("btn btn-info text-white")
.addEventListener("click", addToLocalStorage)

localStorage.setItem("./css/bilder/soffa2.png");
const res = localStorage.getItem("./css/bilder/soffa2.png" )

 */



/* 


document.queryselector("")
produktLista= [{ src:"./...", price:22, description: "dfafsd"}]

sparas i localstorage 

*/



/*
function findTotal(){
    var arr = document.getElementById('produkt');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total-1').value = tot;
}
*/


