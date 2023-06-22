const randomNumber = Math.ceil(Math.random() * 100) + 1;

window.onload = function () {
  document.getElementById("submit").addEventListener("click", playGame);
};

function playGame() {
  const input = document.getElementById("num").value;
  const alertMsg = document.getElementById("status");
  Alert(input , randomNumber , alertMsg);  
  Terms(input , alertMsg);
}

function Terms(input , alertMsg) {
  let texthigh = "guess is too high";
  let textlow = "guess is too low";
  let textcorrect = "guess is correct";
  if (input > randomNumber) {
    alertMsg.innerHTML = texthigh;
  } else if (input < randomNumber) {
    alertMsg.innerHTML = textlow;
  } else {
    alertMsg.innerHTML = textcorrect;
  }
}

function Alert(input, randomNumber, alertMsg) {
  if (input > randomNumber) {
    alertMsg.classList.add("error");
    alertMsg.classList.remove("warning");
    alertMsg.classList.remove("success");
  } else if (input < randomNumber) {
    alertMsg.classList.add("warning");
    alertMsg.classList.remove("error");
    alertMsg.classList.remove("success");
  } else {
    alertMsg.classList.remove("error");
    alertMsg.classList.remove("warning");
    alertMsg.classList.add("success");
  }
}

function History() {
    
}