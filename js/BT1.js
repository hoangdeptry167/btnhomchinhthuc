$(function () {
    TweenMax.fromTo($('.noidung'),2,{y:200,opacity:0.3,delay:2},{y:-20,opacity:1});
    TweenMax.from($('.zoom'),1.3,{scale:1.6,opacity:0.5,delay:0.5});
})
// $('.noidung h2').mouseenter(function (event) {
//     $('.noidung').animate({width:500});
// });