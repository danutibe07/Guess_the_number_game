const randomNumber = Math.ceil(Math.random() * 100) + 1;

  window.onload = function () {
        document.getElementById("submit").addEventListener("click" , playGame);
  }

function playGame() {
    const input = document.getElementById("num").value;
    Terms(input)
    console.log(randomNumber)
}

function Terms (input) {
    if ( input > randomNumber) {
        console.log("guess is too high")
    }else if(input < randomNumber){
        console.log("guess is too low")
    } else {
        console.log("guess is correct")
    }
}