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


//Produkter

/* 1. Varje produkt ska loggas i localStorage som array. Namn, pris, beskrivning. Bild?
   2. Sen ska de laddas upp 
   Finns bilderna i html? Använda länk till html-framsida? */
const list = []
     function addImgFront () {
// input value 
     const productOne = {
     namn: "Stol",
     beskrivning: "Stol i trä",
     pris: 400,
     src : "/productOne.jpg"

 }
 list.push(productOne)
    localStorage.setItem("src", JSON.stringify (list));
    const addToLocalStorage = localStorage.getItem("productOne");
    var product1 = JSON.parse(addToLocalStorage); 


}
    

    document
    .querySelector("addProd")
    .addEventListener("click", addImgFront)
 


 