
function myFunction() {
  var a = Math.floor(Math.random() * 5)+1;
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 5) {
    text = "Número fuera de rango";

  } else {
    if (isNaN(x) || x == a ) {
      text = "¡GANASTE! el número es: "+a;

    } else {
      text = "¡PERDISTE! el número es: "+a;

    }
  }
  document.getElementById("demo").innerHTML = text;
  
}
window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}
