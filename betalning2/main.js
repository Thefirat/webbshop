
function myFunction1() {
  let inputName = document.querySelector("#fname");
  let inputEfternamen = document.querySelector("#lname");
  let inputPost = document.querySelector("#epost");
  let inputPersonnummer = document.querySelector("#pnummer");
  let inputLadress = document.querySelector("#adress");
  if (inputName.value == "") {
    prompt("fyll i namn");
  } else {
    console.log("Tack")
  }
    if (inputEfternamen.value == ""){
      prompt("fyll i eftername");
    }else{
      console.log("Tack")
    }
    if (inputPost.value == "") {
      prompt("fyll i epost");
    } else {
      console.log("Tack!")
    }
  if (inputPersonnummer.value == "") {
    prompt("fyll i personnummer");
    
  } else {
    console.log("Tack!!")
  }

  if (inputLadress.value == "") {
    prompt("fyll i Levaransadressen");
  } else {
    console.log("tack")
    window.location.href='./sista.html'
  }
  
}



