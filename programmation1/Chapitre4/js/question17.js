
var i = 50;
var jours = 3;
var nuits = 2;
var monter;
var nombredejourstotals = 0;

    for (i = 50; i >= 1; i --){
        monter = (jours - nuits);
        nombredejourstotals += monter;

    }
    document.write(nombredejourstotals + " jours");