$(window).load(function() {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
        $("body").addClass("ios");
    } else {
        $("body").addClass("web");
    }
    $("body").removeClass("loaded");
});
/* viewport width */
function viewport() {
    var e = window, a = "inner";
    if (!("innerWidth" in window)) {
        a = "client";
        e = document.documentElement || document.body;
    }
    return { width: e[a + "Width"], height: e[a + "Height"] };
}
/* viewport width */
$(function() {
    /* placeholder*/
    $("input, textarea").each(function() {
        var placeholder = $(this).attr("placeholder");
        $(this).focus(function() {
            $(this).attr("placeholder", "");
        });
        $(this).focusout(function() {
            $(this).attr("placeholder", placeholder);
        });
    });
    /* placeholder*/

    $(".button-nav").click(function() {
        $(this).toggleClass("active"), $(".main-nav-list").slideToggle();
        return false;
    });

    /* components */

    /*

	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	
	*/
    /* hamburger */

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");

        $("body").stop().toggleClass("menu-open");
    });

    /* hamburger */

    /* formstyler */

    if ($(".styled").length) {
        $(".styled").styler();
    }

    /* formstyler */

    /* calendar */

    if ($("#datepicker").length) {
        $("#datepicker").datepicker({
            beforeShow: function() {
                $(".ui-datepicker").css("font-size", 16);
            }
        });
    }

    if ($("#datepicker2").length) {
        $("#datepicker2").datepicker({
            beforeShow: function() {
                $(".ui-datepicker").css("font-size", 16);
            }
        });
    }

    /* calendar */

    /* custom checkbox*/

    $(".j-serv").click(function() {
        $(this).toggleClass("checked-item");
    });

    $(".j-serv").toggle(
        function() {
            $(this).find("input:checkbox").attr("checked", "checked");
        },
        function() {
            $(this).find("input:checkbox").removeAttr("checked");
        }
    );
    
    /* custom checkbox*/

    if ($(".bg-slider").length) {
        $(".bg-slider").slick({
            // dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000

            // slidesToScroll: 4,

            // responsive: [

            // 	{

            // 	  breakpoint: 1024,

            // 	  settings: {

            // 		slidesToShow: 3,

            // 		slidesToScroll: 3,

            // 		infinite: true,

            // 		dots: true

            // 	  }

            // 	},

            // 	{

            // 	  breakpoint: 600,

            // 	  settings: "unslick"

            // 	}

            // ]
        });
    }

    /*
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/

    /* components */
});

var handler = function() {
    var height_footer = $("footer").height();
    var height_header = $("header").height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});

    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {
    }
};
$(window).bind("load", handler);
$(window).bind("resize", handler);
