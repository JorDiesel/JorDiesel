
var i = 5;
var lettre;
var mot;
var afficherlettre;

mot = prompt("Veuillez inscrire un mot de 6 lettres");
lettre = mot.length;

   for (i = 5; i >= 0; i --){
       afficherlettre = mot[i];
       document.write(afficherlettre);
   }