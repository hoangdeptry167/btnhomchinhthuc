$(function(){
    // add class vao ham 
    $('.nutbammenu').click(function (event) { 
        //code addClass day menu ra
        $('.menu').addClass('daymenura');

        $('.modau').addClass('daytheomenu')

        $('.momo').addClass('momoxuathien');
    });


    $('.menu').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.modau').removeClass('daytheomenu');

        $('.momo').removeClass('momoxuathien');
    })

    $('.modau').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.modau').removeClass('daytheomenu');
    })

    $('.momo').click(function (event) {
        $('.momo').removeClass('momoxuathien');
    })    
    // hieu ứng scroll
    $('.nut_1').click(function(event) {
        $('html,body').animate({scrollTop: 754},1400);

        $('.menu').addClass('daymenura');
     });
})
