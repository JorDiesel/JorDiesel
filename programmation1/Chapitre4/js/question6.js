
var i = 0;
var montantdeposer = 0.01;
var solde = 0;

    for (i = 0; i <= 10; i ++){
        if (i === 0){
            montantdeposer = 0.01
        }
        else {
        montantdeposer *= 2;
        }
        solde += montantdeposer;
        document.write("Numéro du jour : " + i + " Montant déposé : " + montantdeposer + "$" + " Solde : " + solde + "$" + "<br>");
    }