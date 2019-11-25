
$('#flashID').css("position","relative");
$('#texte2').hide();
$('#jokerID').hide();


$('#boutonGauche').click(function () {
    $('#flashID').css("right","100px");
});

$('#boutonDroite').click(function () {
    $('#flashID').css("left","1000px");
});

$('#boutonAjouterTitre').click(function () {
    $('#texte2').show();
});

$('#boutonNuke').click(function () {
    $('#flashID').hide();
    $('#texte').hide();
    $('#boutonVitesseSupreme').hide();
    $('#boutonFinVitesseSupreme').hide();
    $('#boutonAjouterTitre').hide();
    $('#boutonDroite').hide();
    $('#boutonAjouterAttribut').hide();
    $('#boutonAjouterImage').hide();
    $('#boutonChangerImage').hide();
    $('#boutonTeleport').hide();
    $('#boutonRalentir').hide();
    $('#boutonPerso2').hide();
    $('#boutonPerso1').hide();
    $('#boutonEnleverImage').hide();
    $('#boutonGauche').hide();
    $('#boutonNuke').hide();
    $('#boutonDupliquer').hide();
    $('#texte1').hide();
    $('#texte2').hide();

    var url = "img/centalCity.jpg";
    if (url === "img/centalCity.jpg"){
        $('.centralCity').css("background-image",'url("img/Nuke.jpg")');
    }
});

$('#boutonChangerImage').click(function () {
    var src = "img/Flash1.png";
   if (src === "img/Flash1.png"){
       $('#flashID').attr("src","img/Flash2.png");
   }
});

$('#boutonEnleverImage').click(function () {
   $('#flashID').hide();
});

$('#boutonAjouterImage').click(function () {
   $('#flashID').show();
});

$('#boutonAjouterAttribut').click(function () {
   $('#flashID').attr("alt","Image de Flash");
});


$('#boutonDupliquer').click(function () {

});

var timer;
$('#boutonVitesseSupreme').click(function () {
    timer = setInterval(vitesseSupreme, 500);
});

$('#boutonFinVitesseSupreme').click(function () {
    clearInterval(timer);
});

function vitesseSupreme() {
    $('#flashID').css("left","500px");
}

$('#boutonPerso2').click(function () {
    var src = "img/Flash1.png";
    if (src === "img/Flash1.png"){
        $('#flashID').attr("src","img/Batman.png");
    }
    var url = "img/centalCity.jpg";
    if (url === "img/centalCity.jpg"){
        $('.centralCity').css("background-image",'url("img/GothamCity.jpg")');
    }
    $('#texte1').html("Batman prends le contrôle de la situation");
    $('#jokerID').show();
});

$('#boutonPerso1').click(function () {
    setInterval(AttaqueEclair,100);
});
var compteur = 0;
function AttaqueEclair() {
    if (compteur < 9){
        $('#flashID').css("left","+=150");
    }
    else if (compteur < 11){
        $('#flashID').css("top","+=270");
    }
    else if (compteur < 20){
        $('#flashID').css("left","-=150");
    }
    else if (compteur < 21){
        $('#flashID').css("top","-=150");
    }
    else if (compteur < 22){
        $('#flashID').css("left","+=150");
    }
    else if (compteur < 23){
        $('#flashID').css()
    }
    compteur += 1;
}




