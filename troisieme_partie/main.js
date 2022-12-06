// let input_affiche = document.getElementsByName("affiche");
let input_affiche = document.Calculette.affiche;
let left_member;
let right_member;
let operator;
let result;

input_affiche.setAttribute("value", "");

// fonction ajouter
function ajouter(str) {
  if (input_affiche.value == undefined || isNaN(Number(input_affiche.value))) {
    input_affiche.value = str;
  } else {
    input_affiche.value += str;
  }
  // input_affiche.value += str;
}

//fonction operation
function operation(signe) {
  left_member = Number(input_affiche.value);
  operator = signe;
  input_affiche.value += signe;
}

//fonctions effectuant des operations speciales (via des methodes intégrées à javascript)
function fonctionSpeciale(opespeciale) {
  switch (opespeciale) {
    case "sqrt":
      document.Calculette.affiche.value = Math.sqrt(
        eval(document.Calculette.affiche.value)
      );
      break;
    case "log":
      document.Calculette.affiche.value = Math.log(
        eval(document.Calculette.affiche.value)
      );
      break;
    case "pow":
      document.Calculette.affiche.value = Math.pow(
        eval(document.Calculette.affiche.value),
        2
      );
      break;
  }
}

//fonction de resultat
function resultat() {
  right_member = Number(input_affiche.value);
  if (right_member == undefined || left_member == undefined) {
    return "";
  }
  switch (operator) {
    case "+":
      result = left_member + right_member;
      break;
    case "-":
      result = left_member - right_member;
      break;
    case "/":
      result = left_member / right_member;
      break;
    case "*":
      result = left_member * right_member;
      break;
    default:
      break;
  }
  input_affiche.value = result;
  left_member = 0;
  right_member = 0;
  // try {
  //   input_affiche.value = eval(input_affiche.value);
  // } catch (error) {
  //   alert("Expression incorrecte, réessayez");
  // } finally {
  //   input_affiche.value = "";
  // }
}

function reset_calculatrice() {
  left_member = "";
  right_member = "";
  operator = "";
  result = "";
}
