
$('#bouton').click(function () {
    var mot = $('#mot').val();
    if (mot.length < 3 || mot.length > 12){
        alert("Le mot doit être compris entre 3 et 12 lettres");
    }
    let stream = this.value;
    let stream2 = stream.charAt(length - 1);
    let longueur = this.value.length;

    if (/[A-Z]/.test(stream2) || stream2.includes("*") ||/[a-z]/.test(stream2)){

    }
    else{
        this.value = this.value.replace(stream2, "");
        return this.value;
    }


});
$('#bouton').click(function () {
    var mot2 = $('#mot').val();
    if (mot2.length === 3){
        $('#img1').attr("class","col-xl-4");
        $('#img2').attr("class","col-xl-4");
        $('#img3').attr("class","col-xl-4");
        $('#img4').hide();
        $('#img5').hide();
        $('#img6').hide();
        $('#img7').hide();
        $('#img8').hide();
        $('#img9').hide();
        $('#img10').hide();
        $('#img11').hide();
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
    }
    else if (mot2.length === 4){
        $('#img1').attr("class","col-xl-3");
        $('#img2').attr("class","col-xl-3");
        $('#img3').attr("class","col-xl-3");
        $('#img4').attr("class","col-xl-3");
        $('#img5').hide();
        $('#img6').hide();
        $('#img7').hide();
        $('#img8').hide();
        $('#img9').hide();
        $('#img10').hide();
        $('#img11').hide();
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
    }
    else if (mot2.length === 5){
        $('#img1').attr("class","col-xl-2");
        $('#img2').attr("class","col-xl-2");
        $('#img3').attr("class","col-xl-2");
        $('#img4').attr("class","col-xl-2");
        $('#img5').attr("class","col-xl-2");
        $('#img6').hide();
        $('#img7').hide();
        $('#img8').hide();
        $('#img9').hide();
        $('#img10').hide();
        $('#img11').hide();
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
    }
    else if (mot2.length === 6){
        $('#img1').attr("class","col-xl-2");
        $('#img2').attr("class","col-xl-2");
        $('#img3').attr("class","col-xl-2");
        $('#img4').attr("class","col-xl-2");
        $('#img5').attr("class","col-xl-2");
        $('#img6').attr("class","col-xl-2");
        $('#img7').hide();
        $('#img8').hide();
        $('#img9').hide();
        $('#img10').hide();
        $('#img11').hide();
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
        $('#img6').show();
    }
    else if (mot2.length === 7){
        $('#img1').attr("class","col-xl-1");
        $('#img2').attr("class","col-xl-1");
        $('#img3').attr("class","col-xl-1");
        $('#img4').attr("class","col-xl-1");
        $('#img5').attr("class","col-xl-1");
        $('#img6').attr("class","col-xl-1");
        $('#img7').attr("class","col-xl-1");
        $('#img8').hide();
        $('#img9').hide();
        $('#img10').hide();
        $('#img11').hide();
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
        $('#img6').show();
        $('#img7').show();
    }
    else if (mot2.length === 8){
        $('#img1').attr("class","col-xl-1");
        $('#img2').attr("class","col-xl-1");
        $('#img3').attr("class","col-xl-1");
        $('#img4').attr("class","col-xl-1");
        $('#img5').attr("class","col-xl-1");
        $('#img6').attr("class","col-xl-1");
        $('#img7').attr("class","col-xl-1");
        $('#img8').attr("class","col-xl-1");
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
        $('#img6').show();
        $('#img7').show();
        $('#img8').show();
        $('#img9').hide();
        $('#img10').hide();
        $('#img11').hide();
        $('#img12').hide();
    }
    else if (mot2.length === 9){
        $('#img1').attr("class","col-xl-1");
        $('#img2').attr("class","col-xl-1");
        $('#img3').attr("class","col-xl-1");
        $('#img4').attr("class","col-xl-1");
        $('#img5').attr("class","col-xl-1");
        $('#img6').attr("class","col-xl-1");
        $('#img7').attr("class","col-xl-1");
        $('#img8').attr("class","col-xl-1");
        $('#img9').attr("class","col-xl-1");
        $('#img10').hide();
        $('#img11').hide();
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
        $('#img6').show();
        $('#img7').show();
        $('#img8').show();
        $('#img9').show();
    }
    else if (mot2.length === 10){
        $('#img1').attr("class","col-xl-1");
        $('#img2').attr("class","col-xl-1");
        $('#img3').attr("class","col-xl-1");
        $('#img4').attr("class","col-xl-1");
        $('#img5').attr("class","col-xl-1");
        $('#img6').attr("class","col-xl-1");
        $('#img7').attr("class","col-xl-1");
        $('#img8').attr("class","col-xl-1");
        $('#img9').attr("class","col-xl-1");
        $('#img10').attr("class","col-xl-1");
        $('#img11').hide();
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
        $('#img6').show();
        $('#img7').show();
        $('#img8').show();
        $('#img9').show();
        $('#img10').show();
    }
    else if (mot2.length === 11){
        $('#img1').attr("class","col-xl-1");
        $('#img2').attr("class","col-xl-1");
        $('#img3').attr("class","col-xl-1");
        $('#img4').attr("class","col-xl-1");
        $('#img5').attr("class","col-xl-1");
        $('#img6').attr("class","col-xl-1");
        $('#img7').attr("class","col-xl-1");
        $('#img8').attr("class","col-xl-1");
        $('#img9').attr("class","col-xl-1");
        $('#img10').attr("class","col-xl-1");
        $('#img11').attr("class","col-xl-1");
        $('#img12').hide();
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
        $('#img6').show();
        $('#img7').show();
        $('#img8').show();
        $('#img9').show();
        $('#img10').show();
        $('#img11').show();

    }
    else if (mot2.length === 12){
        $('#img1').attr("class","col-xl-1");
        $('#img2').attr("class","col-xl-1");
        $('#img3').attr("class","col-xl-1");
        $('#img4').attr("class","col-xl-1");
        $('#img5').attr("class","col-xl-1");
        $('#img6').attr("class","col-xl-1");
        $('#img7').attr("class","col-xl-1");
        $('#img8').attr("class","col-xl-1");
        $('#img9').attr("class","col-xl-1");
        $('#img10').attr("class","col-xl-1");
        $('#img11').attr("class","col-xl-1");
        $('#img12').attr("class","col-xl-1");
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $('#img4').show();
        $('#img5').show();
        $('#img6').show();
        $('#img7').show();
        $('#img8').show();
        $('#img9').show();
        $('#img10').show();
        $('#img11').show();
        $('#img12').show();
    }
});



$('.fond').click(function () {
    var fond = $(this).attr("id");
    $('#fondcouleur').css("background-image", 'url("background/' + fond + '.jpg")');
});

$('#choixCouleur').hover(function () {
   $('#choixCouleur').css("cursor","pointer");
});

$('#image1').hover(function () {
    $('#image1').css("cursor","pointer")
});
$('#image2').hover(function () {
    $('#image2').css("cursor","pointer")
});
$('#image3').hover(function () {
    $('#image3').css("cursor","pointer")
});
$('#image4').hover(function () {
    $('#image4').css("cursor","pointer")
});
$('#image5').hover(function () {
    $('#image5').css("cursor","pointer")
});
$('#image6').hover(function () {
    $('#image6').css("cursor","pointer")
});
$('#image7').hover(function () {
    $('#image7').css("cursor","pointer")
});
$('#image8').hover(function () {
    $('#image8').css("cursor","pointer")
});
$('#image9').hover(function () {
    $('#image9').css("cursor","pointer")
});
$('#image10').hover(function () {
    $('#image10').css("cursor","pointer")
});
$('#image11').hover(function () {
    $('#image11').css("cursor","pointer")
});
$('#image12').hover(function () {
    $('#image12').css("cursor","pointer")
});
$('#car1').hover(function () {
    $('#car1').css("cursor","pointer")
});
$('#car2').hover(function () {
    $('#car2').css("cursor","pointer")
});
$('#car3').hover(function () {
    $('#car3').css("cursor","pointer")
});
$('#car4').hover(function () {
    $('#car4').css("cursor","pointer")
});


$('#img1').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img2').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img3').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img4').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img5').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img6').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img7').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img8').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img9').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img10').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img11').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});
$('#img12').click(function () {
    $('#modal1').show();
    $('#boutonfermer1').click(function () {
        $('#modal1').hide();
    });
    $('#x1').click(function () {
        $('#modal1').hide();
    });
});

$('#boutonImprimer').click(function () {
    $('#texte').hide();
    $('#boutonImprimer').hide();
    $('#fondcouleur').attr("class","py-5 my-5");
    $('#image1').hover(function () {
        $('#image1').css("cursor","context-menu")
    });
    $('#image2').hover(function () {
        $('#image2').css("cursor","context-menu")
    });
    $('#image3').hover(function () {
        $('#image3').css("cursor","context-menu")
    });
    $('#image4').hover(function () {
        $('#image4').css("cursor","context-menu")
    });
    $('#image5').hover(function () {
        $('#image5').css("cursor","context-menu")
    });
    $('#image6').hover(function () {
        $('#image6').css("cursor","context-menu")
    });
    $('#image7').hover(function () {
        $('#image7').css("cursor","context-menu")
    });
    $('#image8').hover(function () {
        $('#image8').css("cursor","context-menu")
    });
    $('#image9').hover(function () {
        $('#image9').css("cursor","context-menu")
    });
    $('#image10').hover(function () {
        $('#image10').css("cursor","context-menu")
    });
    $('#image11').hover(function () {
        $('#image11').css("cursor","context-menu")
    });
    $('#image12').hover(function () {
        $('#image12').css("cursor","context-menu")
    });
    $('#img1').click(function () {
        $('#modal1').hide();
    });
    $('#img2').click(function () {
        $('#modal1').hide();
    });
    $('#img3').click(function () {
        $('#modal1').hide();
    });
    $('#img4').click(function () {
        $('#modal1').hide();
    });
    $('#img5').click(function () {
        $('#modal1').hide();
    });
    $('#img6').click(function () {
        $('#modal1').hide();
    });
    $('#img7').click(function () {
        $('#modal1').hide();
    });
    $('#img8').click(function () {
        $('#modal1').hide();
    });
    $('#img9').click(function () {
        $('#modal1').hide();
    });
    $('#img10').click(function () {
        $('#modal1').hide();
    });
    $('#img11').click(function () {
        $('#modal1').hide();
    });
    $('#img12').click(function () {
        $('#modal1').hide();
    });
    $('#divCouleur').hide();

});




