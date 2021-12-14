
function myFunction1() {
  let inputName = document.querySelector("#fname");
  let inputEfternamen = document.querySelector("#lname");
  if (inputName.value == "") {
    prompt("fyll i namn");
  } else {
    console.log("Tack")
    if (inputEfternamen.value == ""){
      prompt("fyll i eftername");
    }else{
      console.log("Tack")
    }
  }
}



