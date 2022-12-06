let left_nbr_member;
let operator;
let right_nbr_member;
let result;
let btn = document.createElement("button");
document.body.append(btn);
btn.textContent = "Calculatrice";

/**
 * fonction qui simule une calculatrice en utilisant les opérations basiques : +, -, /, *
 * @returns string
 */
function calculatrice() {
  do {
    left_nbr_member = Number(prompt("Choisi un premier nombre"));
  } while (isNaN(left_nbr_member));
  do {
    operator = prompt(
      "Choisissez un opérateur parmis les suivants : + , - , / , *"
    );
  } while (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "/" &&
    operator !== "*"
  );
  do {
    right_nbr_member = Number(prompt("Choisi un second nombre"));
  } while (isNaN(right_nbr_member));
  switch (operator) {
    case "+":
      result = left_nbr_member + right_nbr_member;
      break;
    case "-":
      result = left_nbr_member - right_nbr_member;
      break;
    case "/":
      result = left_nbr_member / right_nbr_member;
      break;
    case "*":
      result = left_nbr_member * right_nbr_member;
      break;

    default:
      break;
  }
  if (
    confirm(
      "Souhaitez-vous excécuter l'opération : " +
        left_nbr_member +
        " " +
        operator +
        " " +
        right_nbr_member +
        " ?\nSi non une nouvelle procédure de calcul se lancera"
    )
  ) {
    return (
      left_nbr_member + " " + operator + " " + right_nbr_member + " = " + result
    );
  } else {
    return calculatrice();
  }
}

btn.addEventListener("click", (e) => {
  // console.log(calculatrice());
  alert(calculatrice());
});
