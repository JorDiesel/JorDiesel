
var i = 5;
var taxe;
var montant;

    for (i = 5; i <= 100; i += 5){
        taxe = (i * 0.09);
        montant = taxe + i;
        document.write("Montant = " + montant + "$" + "  taxe = " + taxe + "$" + "<br>");
    }