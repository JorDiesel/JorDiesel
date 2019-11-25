var lignes = 16;
var colonnes = 1;
var nb = 0;
var prixbillet = 3;
var revenu = 0;

for (var i = 0; i < lignes; i ++){
    for (var j = 0; j < colonnes; j ++){

        revenu = (prixbillet * nb);
        document.write(nb + ".........." + prixbillet + ".........." + revenu);
        nb += 10;

    }
    document.write("<br>");

}