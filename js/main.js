$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
});

$(function () {
    $("body").niceScroll({
        cursorcolor:"#1ab797",
        cursorwidth:"10px",
        cursorborder:"#1ab797",
    });
    new WOW().init();
});


