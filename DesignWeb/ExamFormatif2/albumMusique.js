var choix;
var mauvaisesreponse = 0;



while (choix !== "0"){

    choix = prompt("Veuillez choisir une valeur entre 1 et 5");

    if(choix === "1"){
     alert("Album Enfants");
    }
    else if (choix === "2"){
        alert("Album Rock");
    }
    else if (choix === "3"){
        alert("Album Détente");
    }
    else if (choix === "4"){
        alert("Album Populaire");
    }
    else if (choix === "5"){
        alert("Album Jazz");
    }
    else if (choix > 5 || choix < 0){
        alert("Cette option n'est pas disponible");
        mauvaisesreponse += 1;
    }
}

alert("Nombre de mauvaises réponses : " + mauvaisesreponse);
