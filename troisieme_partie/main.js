// let input_affiche = document.getElementsByName("affiche");
const input_affiche = document.Calculette.affiche;
let left_member;
let right_member;
let operator;
let result;

input_affiche.setAttribute("value", "");

//
/**
 * fonction ajouter qui ajoute un nombre ou un point dans l'input de la calculatrice
 * @param {string} str
 */
function ajouter(str) {
  if (input_affiche.value == undefined) {
    input_affiche.value = str;
  } else {
    input_affiche.value += str;
  }
}

//
/**
 * fonction operation qui insere le signe operant dans l'input de la calculatrice
 * @param {string} signe
 */
function operation(signe) {
  // left_member = Number(input_affiche.value);
  operator = signe;
  input_affiche.value += signe;
}

/**
 * fonctions effectuant des operations speciales (via des methodes intégrées à javascript)
 * @param {string} opespeciale
 */
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

/**
 * fonction de resultat
 * @returns string
 */
function resultat() {
  // right_member = Number(input_affiche.value);
  let members_arr = input_affiche.value.split(operator);
  left_member = Number(members_arr[0]);
  right_member = Number(members_arr[1]);
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

/**
 * fonction qui place une string vide dans chaque variable globale
 */
function reset_calculatrice() {
  left_member = "";
  right_member = "";
  operator = "";
  result = "";
}
