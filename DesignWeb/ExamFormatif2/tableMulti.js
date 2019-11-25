
var nb = 1;
var nbligne = 10;
var nbcolonne = 10;

for (var i = 1; i <nbligne; i ++){

    for (var j = 1; j < nbcolonne; j ++){
        nb = document.write((i * j) + " ");
    }

    document.write("<br>");
}