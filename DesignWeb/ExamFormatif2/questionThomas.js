var lignes = 10;
var colonnes = 6;
var nb = 2;
var espaces = 100;

for (var i = 0; i < lignes; i ++){
    for (var j = 0; j < colonnes; j ++){
        if (j === 0){
            for (var k = 0; k < espaces; k ++){
                document.write(".");
            }
            espaces -= 10;
        }
        document.write(nb + " ");
        nb += 2;
    }
    document.write("<br>");
    nb -= 2;
    nb *= 2;
}
