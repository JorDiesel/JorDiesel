var lignes = 8;
var colonnes = 10;
var nb = 2;
var espaces = 0;

for (var i = 0; i < lignes; i ++){
    for (var j = 0; j < colonnes; j ++){
        if (j === 0){
            for (var k = 0; k < espaces; k ++){
                document.write(".");
            }
            espaces += 5;
        }
        document.write(nb + " ");
        nb += 2
    }
    document.write("<br>");
    nb -= 2;
    nb += 5;
}