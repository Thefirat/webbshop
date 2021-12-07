const card = document.getElementsByClassName("card");
const btnAdd = document.getElementsByClassName("btn-info");
const btnCart = document.querySelector(".btn-cart");
const cartList = document.querySelector(".shopping-cart-list");


class Shopping{
    constructor(title,price,image){
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

/* 


document.queryselector("")
produktLista= [{ src:"./...", price:22, description: "dfafsd"}]

sparas i localstorage 

*/
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
        cartList.appendChild(listItem);
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
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length;
    }

    cartToggle(){
        btnCart.addEventListener("click", function(){
            cartList.classList.toggle("d-none");
        })
    }
    
}


for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener("click", function(e){
        let title = card[i].getElementsByClassName("card-title")[0].textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;
        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = "Aktivierad";
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
    var toplam = Number(p1.value)+ (p2.value);
}

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

