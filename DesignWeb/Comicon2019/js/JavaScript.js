$('#dc').hide();
$('#marvel').hide();
$('#starwars').hide();
$('#validationUser').hide();
$('#securite').hide();
$('#securitemax').hide();

var $radio = $('input[name = "gender"]');
$radio.change(function () {
    if (this.value === "starwars"){
        $('#starwars').show();
        $('#dc').hide();
        $('#marvel').hide();
    }
    else if (this.value === "marvel"){
        $('#marvel').show();
        $('#dc').hide();
        $('#starwars').hide();
    }
    else if (this.value === "dc"){
        $('#dc').show();
        $('#marvel').hide();
        $('#starwars').hide();
    }
});


$('#nomuser').keyup(function () {
    var texte = $('#nomuser').val();
    if (texte === "Slay" || texte === "test"){
        $('#validationUser').css("color","red");
        $('#validationUser').html("nom d'usager non disponible");
        $('#validationUser').show();
    }
    else{
        $('#validationUser').css('color','lightgreen');
        $('#validationUser').html("Valide");
        $('#validationUser').show();
    }
});

$('#password1').keyup(function () {
    var password1 = $('#password1').val().length;
    if (password1 < 6){
        $('#securite').css("color","red");
        $('#securite').html("Faible");
        $('#securite').show();
    }
    else if (password1 >= 6 && password1 < 9){
        $('#securite').css("color","yellow");
        $('#securite').html("Moyen");
        $('#securite').show();
    }
    else if (password1 >= 9 && hasUpperCase($('#password1').val()) && isNaN($('#password1').val())){
        $('#securite').css("color","lightgreen");
        $('#securite').html("Fort");
        $('#securite').show();
    }

});
function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}
function isNaN(str) {
    return (/[0-9]/.test(str));
}

$('#password2').keyup(function () {
    var password2 = $('#password2').val();
    var password1 = $('#password1').val();
    if (password2 === password1){
        $('#securitemax').css("color","lightgreen");
        $('#securitemax').html("Les mots de passe sont identiques");
        $('#securitemax').show();
    }
    else{
        $('#securitemax').css("color","red");
        $('#securitemax').html("Les mots de passe sont différents");
        $('#securitemax').show();
    }
});


$('#choixStarwars').change(function () {
    var choix = ($("#choixStarwars option:selected").text());
    if (choix === "Yoda"){
        $('#imageStar').attr("src","yoda.jpg");
    }
    else if (choix === "Obiwan"){
        $('#imageStar').attr("src","Obiwan.jpg");
    }
    else if (choix === "Darth Vader"){
        $('#imageStar').attr("src","DarthVader.jpg");
    }
});





