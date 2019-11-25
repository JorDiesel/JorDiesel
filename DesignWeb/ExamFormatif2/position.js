var nb;
var position;
var autreposition = "oui";


while (autreposition === "oui"){
    nb = Number(prompt("Veuillez indiquer un nombre pour connaître la position du joueur"));

if (nb === 1){
    position = "Le joueur est un lanceur";
}
else if (nb === 2){
    position = "Le joueur est un receveur";
}
else if (nb === 3){
    position = "Le joueur est un premier but";
}
else if (nb === 4){
    position = "Le joueur est un deuxième but";
}
else if (nb === 5){
    position = "Le joueur est un troisième but";
}
else if (nb === 6){
    position = "Le joueur est un short-stop";
}
else if (nb === 7){
    position = "Le joueur est un voltigeur"
}
else if (nb === 8){
    position = "Le joueur est un voltigeur"
}
else if (nb === 9){
    position = "Le joueur est un voltigeur"
}
else if (nb < 0 || nb > 9){
    position = "Cette position n’existe pas";
}

alert(position);
autreposition = prompt("Voulez-vous choisir une autre position?");
}