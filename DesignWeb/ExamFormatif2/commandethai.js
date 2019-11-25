
var imperiaux;
var principal;
var dessert;
var autrecommande = "non";
var prixav = 0;
var tps = 0.05;
var tvq = 0.09975;
var prixtaxes;
var prixavectaxes;
var prixtps;
var prixtvq;
var nombredecommande = 1;
var prixmoyen;


while (autrecommande === "non"){
    nombredecommande ++;
    imperiaux = prompt("Voulez-vous des rouleaux impériaux en entrée?");
    principal = prompt("Voulez-vous comme plat principal? Makis, Nigiris ou PadThai");
    dessert = prompt("Voulez-vous un dessert?");


    if (imperiaux === "oui") {
        prixav += 3.50;
    } else {
        prixav += 0;
    }

    if (principal === "Makis") {
        prixav += 10;
    } else if (principal === "Nigiris") {
        prixav += 11;
    } else if (principal === "PadThai") {
        prixav += 14;
    } else {
        alert("Ce plat n'est pas disponible pour le moment, mais nous prenons votre demande en note");
    }
    if (dessert === "oui") {
        prixav += 4.50;
    }
    autrecommande = prompt("Avez-vous terminer votre commande?");
}

prixtps = (prixav * tps);
prixtvq = (prixav * tvq);
prixtaxes = (prixtvq + prixtvq);
prixavectaxes = (prixav + prixtaxes);
prixmoyen = (prixavectaxes / nombredecommande)
;
alert("Prix avant taxes : " + prixav + "$  " +  "Prix de la TPS : " + prixtps + "$  " + "Prix de la TVQ : " + prixtvq + "$  " + "Prix total : " + prixavectaxes + "$");
alert("Le prix moyen par personne : " + prixmoyen + "$");