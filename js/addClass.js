
$(function(){
    // add class vao ham 
    $('.nutbammenu').click(function (event) { 
        //code addClass day menu ra
        $('.menu').toggleClass('daymenura');

        $('.modau').toggleClass('daytheomenu');

        $('.momo').toggleClass('momoxuathien');

        $('.div3').toggleClass('daytheomenu');
    });


    $('.menu').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.modau').removeClass('daytheomenu');

        $('.momo').removeClass('momoxuathien');

        $('.div3').removeClass('daytheomenu');
    })

    $('.div3').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.div3').removeClass('daytheomenu');

        $('.modau').removeClass('daytheomenu');

        $('.momo').removeClass('momoxuathien');
    })

    $('.modau').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.modau').removeClass('daytheomenu');
    })

    $('.momo').click(function (event) {
        $('.momo').removeClass('momoxuathien');
        
        $('.div3').removeClass('daytheomenu');
    })
    // hieu ứng scroll
    $('.menu2').click(function(event) {
        $('html,body').animate({scrollTop: 1},1400);

        $('.menu').addClass('daymenura');

        $('.tongquat').addClass('bienmat');

        $('.tongquat3').addClass('xuathientongquat3');
     });

     $('.menu1').click(function(event) {
        $('html,body').animate({scrollTop: 0},1400);

        $('.tongquat').removeClass('bienmat');

        $('.menu').addClass('daymenura');

        $('.tongquat3').removeClass('xuathientongquat3');
     });
     $('.menu3').click(function(event){
         $('html,body').animate({scrollTop:1200},1400,"easeInOutCubic");
     })
})


