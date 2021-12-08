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

/* 1. Prova detta
  localStorage.setItem('name', name.value);
  var storedName = localStorage.getItem('name');
  const text = document.querySelector("#text").value;
  Istället för name och text kanske man kan använda bild?
  const textList = []; för en tom array kan användas för att lagra data
  textList.push (text)

 */


 /*  2. Prova detta
  var myProducts = new Array();
  myProducts[0] = "product";
  myProducts[1] = "product1";
  myProducts[2] = "product2";

        localStorage["myProducts"] = JSON.stringify(myProducts);
        var datas = JSON.parse(localStorage["myProducts"]);  */




        /* 3. Prova detta
        //Skapa en array av produkter
        var products = [
            ["Stol"], ["Säng"], ["Badkar"]]
            ;

        //Spara arrayen som en string
        JSON.stringify(products)

        //Data sparas under key allProducts
        localStorage.setItem("allProducts", JSON.stringify(products));

        //Hämta data
        var retrievedData = localStorage.getItem("allProducts");

        //För att konvertera från string tillbaka till obejkt: parse
        var products2 = JSON.parse(retrievedData); */


       /*  4. Prova detta
            const productInfo = { 
            namn: "Stol", 
            beskrivning: ["Stol i trä"],
            pris: ["400kr"]
        } 

        localStorage.setItem("productInfo", JSON.stringify( productInfo)); 
        const addToLocalStorage = localStorage.getItem("productInfo")  */



       // 5. Denna lagrar produkten i localStorage
function addImgFront () {

}

     const productOne = {
     namn: "Stol",
     beskrivning: "Stol i trä",
     pris: 400,
     src : "/productOne.jpg"

 }
    localStorage.setItem("src", JSON.stringify (productOne));
    const addToLocalStorage = localStorage.getItem("productOne");
    var product1 = JSON.parse(addToLocalStorage); 


    document
    .querySelector("addProd")
    .addEventListener("click", addImgFront)
 


 