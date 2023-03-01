const resultat = document.querySelector("#resultat");
const buttons = document.querySelectorAll("button");

function calcul() {
  for (let button of buttons) {
    button.addEventListener("click", () => {
      if (button.innerText != "C" && button.innerText != "=") {
        resultat.innerHTML += button.innerText;
      } 
      if (button.innerText == "=") {
        resultat.innerText = eval(resultat.innerText);
      }
      if (button.innerText == "C") {
        resultat.innerHTML = "";
      }
    });
  } 
}

calcul();
