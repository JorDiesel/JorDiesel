$('#WWE1').hide();
$('#WWE2').hide();
$('#WWE3').hide();
$('#WWE4').hide();
$('#WWE5').hide();
$('#WWE6').hide();
$('#WWE7').hide();
$('#WWE8').hide();

$('#boutonmodal').click(function () {
    $('#Modal').show();
});

$('#fermerModal').click(function () {
   $('#Modal').hide();
});

$('#X').click(function () {
   $('#Modal').hide();
});

$('#font1').hover(function () {
    $('#font1').css("cursor","pointer")
});
$('#font2').hover(function () {
    $('#font2').css("cursor","pointer")
});
$('#font3').hover(function () {
    $('#font3').css("cursor","pointer")
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$('#imgRaw1').hover(function () {
    $('#imgRaw1').css("cursor","pointer")
});
$('#imgRaw2').hover(function () {
    $('#imgRaw2').css("cursor","pointer")
});
$('#imgRaw3').hover(function () {
    $('#imgRaw3').css("cursor","pointer")
});
$('#imgDown1').hover(function () {
    $('#imgDown1').css("cursor","pointer")
});
$('#imgDown2').hover(function () {
    $('#imgDown2').css("cursor","pointer")
});
$('#imgDown3').hover(function () {
    $('#imgDown3').css("cursor","pointer")
});

//Ceinture
$('#belt1').hover(function () {
    $('#belt1').css("cursor","pointer")
});
$('#belt2').hover(function () {
    $('#belt2').css("cursor","pointer")
});
$('#belt3').hover(function () {
    $('#belt3').css("cursor","pointer")
});
$('#belt4').hover(function () {
    $('#belt4').css("cursor","pointer")
});
$('#belt5').hover(function () {
    $('#belt5').css("cursor","pointer")
});
$('#belt6').hover(function () {
    $('#belt6').css("cursor","pointer")
});
$('#belt7').hover(function () {
    $('#belt7').css("cursor","pointer")
});
$('#belt8').hover(function () {
    $('#belt8').css("cursor","pointer")
});

$('#belt1').click(function () {
    $('#WWE1').show();
    $('#WWE2').hide();
    $('#WWE3').hide();
    $('#WWE4').hide();
    $('#WWE5').hide();
    $('#WWE6').hide();
    $('#WWE7').hide();
    $('#WWE8').hide();
});
$('#belt2').click(function () {
    $('#WWE1').hide();
    $('#WWE2').show();
    $('#WWE3').hide();
    $('#WWE4').hide();
    $('#WWE5').hide();
    $('#WWE6').hide();
    $('#WWE7').hide();
    $('#WWE8').hide();
});
$('#belt3').click(function () {
    $('#WWE1').hide();
    $('#WWE2').hide();
    $('#WWE3').show();
    $('#WWE4').hide();
    $('#WWE5').hide();
    $('#WWE6').hide();
    $('#WWE7').hide();
    $('#WWE8').hide();
});
$('#belt4').click(function () {
    $('#WWE1').hide();
    $('#WWE2').hide();
    $('#WWE3').hide();
    $('#WWE4').show();
    $('#WWE5').hide();
    $('#WWE6').hide();
    $('#WWE7').hide();
    $('#WWE8').hide();
});
$('#belt5').click(function () {
    $('#WWE1').hide();
    $('#WWE2').hide();
    $('#WWE3').hide();
    $('#WWE4').hide();
    $('#WWE5').show();
    $('#WWE6').hide();
    $('#WWE7').hide();
    $('#WWE8').hide();
});
$('#belt6').click(function () {
    $('#WWE1').hide();
    $('#WWE2').hide();
    $('#WWE3').hide();
    $('#WWE4').hide();
    $('#WWE5').hide();
    $('#WWE6').show();
    $('#WWE7').hide();
    $('#WWE8').hide();
});
$('#belt7').click(function () {
    $('#WWE1').hide();
    $('#WWE2').hide();
    $('#WWE3').hide();
    $('#WWE4').hide();
    $('#WWE5').hide();
    $('#WWE6').hide();
    $('#WWE7').show();
    $('#WWE8').hide();
});
$('#belt8').click(function () {
    $('#WWE1').hide();
    $('#WWE2').hide();
    $('#WWE3').hide();
    $('#WWE4').hide();
    $('#WWE5').hide();
    $('#WWE6').hide();
    $('#WWE7').hide();
    $('#WWE8').show();
});



