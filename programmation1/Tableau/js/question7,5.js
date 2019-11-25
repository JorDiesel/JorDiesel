var tabVraiFaux = [];
var nbV = 0;
var nbF = 1;
var MaxV = 0;
var MaxF = 0;
var indiceV = 0;
var indiceF = 0;
var maxIndiceV = 0;
var maxIndiceF = 0;

for (var i = 0; i < 19; i ++){
    var b = Math.floor(Math.random() * Math.floor(2));
    if (b === 0){
        tabVraiFaux[i] = false;
    }
    else if (b === 1){
        tabVraiFaux[i] = true;
    }
    document.write(tabVraiFaux[i] + " . ");

}
for (var j = 0; j < i; j ++){
    if (tabVraiFaux[i] === true){
        if (nbF !== 0){
            indiceV = i;
            nbF = 0;
            nbV ++;
            indiceF = 0;
            if (nbV > MaxV){
                MaxV = nbV;
                maxIndiceV = indiceV;
                alert("Le max de vrai : " + maxIndiceV);
            }
        }
    }
}