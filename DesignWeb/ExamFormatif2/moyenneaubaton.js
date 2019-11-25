var presenceaubaton;
var coupssur;
var moyennejoueur;
var moyenneequipe;
var presencetotal = 0;
var coupssurtotal = 0;
var joueur = "1";

while (joueur === "1"){
    presenceaubaton = prompt("Indiquer le nombre de présence au baton");
    presencetotal += presenceaubaton;
    coupssur = prompt("Indiquer le nombre de coups sûrs");
    coupssurtotal += coupssur;

    moyennejoueur = ((coupssur / presenceaubaton) * 1000);

    alert("La moyenne de votre joueur est de : " + moyennejoueur);
    joueur = prompt("Voulez-vous indiquez la moyenne d'un autre joueur? (1 pour oui, 0 pour non)");
}

moyenneequipe = ((coupssurtotal / presencetotal) * 1000);

alert("La moyenne de votre équipe est de : " + moyenneequipe);
