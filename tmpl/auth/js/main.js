$(document).ready(function () {
    // nav hamburger
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function (e){
        $hamburger.toggleClass("is-active");
        $('.nav-list').toggleClass('hidden');
    });
    $('.nav-list__item').click(function(){
        $('.nav-list').addClass('hidden');
        $hamburger.removeClass("is-active");
    });

    // smooth scrolling 
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        } 
    });

    // banner slider
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // bind service title to btn hover
    $('.service__btn').mouseenter(function () {
        $(this).parents('.services__item').addClass('title--hover');
    });

    $('.service__btn').mouseleave(function () {
        $(this).parents('.services__item').removeClass('title--hover');
    });


});