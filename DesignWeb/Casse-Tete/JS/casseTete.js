var imageId1;
var imageId2;
var imageSrc1;
var imageSrc2;
var click = 1;

$('#boutonTricher').click(function () {
    $('#image1').attr("src","images/1.jpg");
    $('#image2').attr("src","images/2.jpg");
    $('#image3').attr("src","images/3.jpg");
    $('#image4').attr("src","images/4.jpg");
    $('#image5').attr("src","images/5.jpg");
    $('#image6').attr("src","images/6.jpg");
    $('#image7').attr("src","images/7.jpg");
    $('#image8').attr("src","images/8.jpg");
    $('#image9').attr("src","images/9.jpg");


});

$('#boutonRecommencer').click(function () {
    $('#image1').attr("src","images/4.jpg");
    $('#image2').attr("src","images/9.jpg");
    $('#image3').attr("src","images/5.jpg");
    $('#image4').attr("src","images/3.jpg");
    $('#image5').attr("src","images/7.jpg");
    $('#image6').attr("src","images/6.jpg");
    $('#image7').attr("src","images/1.jpg");
    $('#image8').attr("src","images/2.jpg");
    $('#image9').attr("src","images/8.jpg");
});

$('.img-fluid').click(function () {
if (click === 1){
    imageId1 = $(this).attr("id");
    imageSrc1 = $(this).attr("src");
    click += 1;
}
else if (click === 2){
    imageId2 = $(this).attr("id");
    imageSrc2 = $(this).attr("src");
    $('#' + imageId1).attr('src', imageSrc2);
    $('#' + imageId2).attr('src', imageSrc1);
    click -= 1;
}

});