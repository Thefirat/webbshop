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

/* //Aktivera produkter från baksida till framsida
function addToLocalStorage (e){
e.preventDefault ();

}

const addPicture = document.querySelector("class till bilder").value;

document
.querySelector(".addToLocalStorage")
.querySelector(".knapp")
.addEventListener("click", addToLocalStorage)


localStorage.setItem("klass till bilder", klass till bilder)

const res = localStorage.getItem("class till bilder");

localStorage.setItem('addPicture', JSON.stringify(addPicture)); */