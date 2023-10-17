function calcul_moyenne(){
    var n1= prompt("donner la première note:");
    var n2= prompt("donner la deuxième note:");
    var n3= prompt("donner la troisième note");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("voici la somme: "+somme+ "<Hr>");
    var moyenne= somme/3;

    document.write("voici la moyenne: "+moyenne+" <br>");

    if (moyenne<10){
    document.write("vous etes redoublant");
    document.bgColor="Red";
    }
    else{
    document.write("vous etes Admis");
    document.bgColor="green";
    }
}

function test_age(){
    var age= prompt("donner votre age");

    if (age<18){
    document.write("<font size='8em' color='pink'>"+"vous etes mineur"+"</font>");
    document.bgColor="Red";
    }
    else{
    document.write("<font size='8em' color='pink'>"+"vous etes majeur"+"</font>");
    document.bgColor="green";
    }
}

function simple_affichage() {
    let name = prompt('donner votre prenom');
    let familyname = prompt('donner votre nom');
    document.write('<div style="margin:auto; witch:300px; border:2px solid blue;">');
    document.write("bonjour" + name + familyname);
    document.write('</div');
}

function test_couleur() {
    let c = prompt("donner une couleur");
    if(c == "rouge" || c == "ROUGE" ) {
        document.body.style.background = "red";
    }
    else if (c == "bleu" || c == "BLEU"){
        document.body.style.background = "blue";
    }
    else{
        document.write("couleur nom comprise");
    }
}
