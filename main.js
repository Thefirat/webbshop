// När den blivit rosa så flyttas varan till en wishlist-stapel
// Klickar man på knappen i wishlist-stapeln ska den bli grå, eller på produkten
// När knappen är grå är varan inte i listan 

// om knappen är tryckt på är: true så hamnar den i stapeln
// om knappen är tryckt på är: false så är den inte i stapeln

// VARIABLES
  const heart = document.querySelector(".heart");
     heart.addEventListener('click', function() {
         this.classList.toggle("mystyle");  // togglar i mellan mystyle färgen, av och på 
 }) 
 

