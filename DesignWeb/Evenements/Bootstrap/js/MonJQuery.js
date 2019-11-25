
$('#texteclic1').css("font-size","2rem");
$('#texteclic2').css("font-size","2rem");
$('#texteclic3').css("font-size","2rem");


$('#zoneaenlever').hide();
$('#zoneaenlever2').hide();
$('#zoneaenlever3').hide();

//premier bouton

$('#bouton1').click(function () {
    $('#zoneaenlever').show();
});

$('#zoneaenlever').click(function () {
   $('#zoneaenlever').hide();
});

//2eme bouton

$('#bouton2').click(function () {
    $('#zoneaenlever2').show();
});

$('#zoneaenlever2').click(function () {
   $('#zoneaenlever2').hide();
});

//3eme bouton

$('#bouton3').click(function () {
   $('#zoneaenlever3').show();
});

$('#zoneaenlever3').click(function () {
   $('#zoneaenlever3').hide();
});

