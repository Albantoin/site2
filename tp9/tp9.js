function seconnecter() {
  var login = prompt("Donner votre nom d'utilisateur");
  var password = prompt("Entre votre mot de passe");
  if (login == "admin" && password == "admin") {
    document.write("bienvenue :" + login);
  } else {
    alert("Acces refusé");
  }
}

function affichagetab() {
  document.write("<table border=2px wifth=30%");
  for (var i = 0; i <= 5; i++) {
    document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
  }
  document.write("</table>");
}

function affichagetab2() {
  var count = prompt("combien de lignes souhaitez vous ?");
  document.write("<table border=2px wifth=30%");
  for (var i = 0; i <= count; i++) {
    document.write("<tr><td>" + i + "</td><td>*</td><td>*</td></tr>");
  }
  document.write("</table>");
}

function cdc() {
  var chaine = prompt("Donner un mot");
  document.write(chaine.toUpperCase() + "<br>");
  document.write(chaine.toLowerCase() + "<br>");
  document.write("la chaine contient " + chaine.length + "caractère" + "<br>");
  document.write("la première lettre est " + chaine.substr(0, 1) + "<br>"); //premier caractere du mot
  document.write(
    "la première lettre est " + chaine.substr(chaine.length - 1, 1) + "<br>"
  ); //dernier caractere du mots
}

function color() {
  var color = prompt("Donner une couleur");
  switch (color) {
    case "rouge":
      document.body.style.background = "red";
      break;
    case "ROUGE":
      document.body.style.background = "red";
      break;
    case "bleu":
      document.body.style.background = "blue";
      break;
    case "BLEU":
      document.body.style.background = "blue";
      break;
    case "vert":
      document.body.style.background = "green";
      break;
    case "VERT":
      document.body.style.background = "green";
      break;
    default:
      alert("couleur non definie");
  }
}
function seconnecter3() {
  var i = 0;
  do {
    var id = prompt("Entrez votre nom d'utilisateur");
    var mdp = prompt("Entrez votre mot de passe");
    if (id == "admin" && mdp == "admin") {
      document.write("bienvenue" + id);
      break;
    } else alert("Accès refusé");
    i += 1;
  } while (i < 3);
  if (i == 3) alert("Delai dépassé");
}
