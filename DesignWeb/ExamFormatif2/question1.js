var lignes = 5;
var colonnes = 4;
var nb = 1;
var espaces = 5;

for (var i = 0; i < lignes; i ++){
    for (var j = 0; j < colonnes; j ++){
        if (j === 0){
            for (var k = 0; k < espaces; k ++){
                document.write(".");
            }
            espaces += 5
        }
        document.write(nb + " ");
        nb += 1;
    }
    document.write("<br>");
    nb -= 1;
    nb *= 2;
}

