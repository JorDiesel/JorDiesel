var lignes = 6;
var colonnes = 6;
var nb = 0;
var espaces = 75;

for (var i = 0; i < lignes; i ++){
    for (var j = 0; j < colonnes; j ++){
        if (j === 0){
            for (var k = 0; k < espaces; k ++){
                document.write(".");
            }
            espaces -= 15;
        }

        document.write(nb + " ");
        nb += 4;
    }
    document.write("<br>");
    nb -= 4;
    nb *= 3;

}